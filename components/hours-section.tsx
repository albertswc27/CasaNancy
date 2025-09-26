'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Calendar } from "lucide-react"
import { useState, useEffect } from "react"

export function HoursSection() {
  const [currentTime, setCurrentTime] = useState(new Date())
  
  // Actualizar cada minuto
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)
    
    return () => clearInterval(timer)
  }, [])

  const schedule = [
    { day: "Lunes", dayIndex: 1, hours: "Cerrado", closed: true },
    { day: "Martes", dayIndex: 2, hours: "Cerrado", closed: true },
    { day: "Miércoles", dayIndex: 3, hours: "12:00-16:00 • 19:00-22:00", openTimes: [{start: '12:00', end: '16:00'}, {start: '19:00', end: '22:00'}] },
    { day: "Jueves", dayIndex: 4, hours: "12:00-16:00 • 19:00-22:00", openTimes: [{start: '12:00', end: '16:00'}, {start: '19:00', end: '22:00'}] },
    { day: "Viernes", dayIndex: 5, hours: "12:00-16:00 • 19:00-22:00", openTimes: [{start: '12:00', end: '16:00'}, {start: '19:00', end: '22:00'}], special: "¡Tamales especiales!" },
    { day: "Sábado", dayIndex: 6, hours: "12:00-17:00 • 19:00-23:00", openTimes: [{start: '12:00', end: '17:00'}, {start: '19:00', end: '23:00'}], special: "¡Platos especiales!" },
    { day: "Domingo", dayIndex: 0, hours: "12:00-17:30", openTimes: [{start: '12:00', end: '17:30'}], special: "¡Sopa de Pata!" },
  ]

  const getCurrentDayIndex = () => currentTime.getDay()
  const getCurrentTimeString = () => {
    const hours = currentTime.getHours().toString().padStart(2, '0')
    const minutes = currentTime.getMinutes().toString().padStart(2, '0')
    return `${hours}:${minutes}`
  }

  const isTimeInRange = (timeStr: string, startTime: string, endTime: string): boolean => {
    const [hours, minutes] = timeStr.split(':').map(Number)
    const [startHours, startMinutes] = startTime.split(':').map(Number)
    const [endHours, endMinutes] = endTime.split(':').map(Number)
    
    const currentMinutes = hours * 60 + minutes
    const startMinutesTotal = startHours * 60 + startMinutes
    const endMinutesTotal = endHours * 60 + endMinutes
    
    return currentMinutes >= startMinutesTotal && currentMinutes <= endMinutesTotal
  }

  const getRestaurantStatus = () => {
    const currentDayIndex = getCurrentDayIndex()
    const currentTimeStr = getCurrentTimeString()
    const todaySchedule = schedule.find(s => s.dayIndex === currentDayIndex)
    
    if (!todaySchedule || todaySchedule.closed) {
      return { status: 'closed', message: 'Cerrado hoy', color: 'text-muted-foreground' }
    }

    const isOpen = todaySchedule.openTimes?.some(time => 
      isTimeInRange(currentTimeStr, time.start, time.end)
    ) || false

    if (isOpen) {
      // Encontrar cuando cierra
      const currentPeriod = todaySchedule.openTimes?.find(time => 
        isTimeInRange(currentTimeStr, time.start, time.end)
      )
      if (currentPeriod) {
        return { 
          status: 'open', 
          message: `Abierto • Cierra a las ${currentPeriod.end}`, 
          color: 'text-green-600' 
        }
      }
    }

    // Encontrar próxima apertura
    const nextOpening = todaySchedule.openTimes?.find(time => {
      const [hours, minutes] = time.start.split(':').map(Number)
      const [currentHours, currentMinutes] = currentTimeStr.split(':').map(Number)
      const startMinutes = hours * 60 + minutes
      const currentMinutesTotal = currentHours * 60 + currentMinutes
      return startMinutes > currentMinutesTotal
    })

    if (nextOpening) {
      return { 
        status: 'closed', 
        message: `Cerrado • Abre a las ${nextOpening.start}`, 
        color: 'text-orange-600' 
      }
    }

    return { status: 'closed', message: 'Cerrado', color: 'text-muted-foreground' }
  }

  const restaurantStatus = getRestaurantStatus()
  const currentDayIndex = getCurrentDayIndex()

  return (
    <section id="horarios" className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Horarios de Atención</h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Te esperamos con los brazos abiertos y las pupusas calentitas
          </p>
          
          {/* Estado actual en tiempo real */}
          <div className={`inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-background border ${restaurantStatus.color}`}>
            <div className={`w-2 h-2 rounded-full ${restaurantStatus.status === 'open' ? 'bg-green-500' : 'bg-gray-400'} ${restaurantStatus.status === 'open' ? 'animate-pulse' : ''}`}></div>
            <span className="font-medium text-sm md:text-base">{restaurantStatus.message}</span>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                <Clock className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                Horario Semanal
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 md:space-y-4">
              {schedule.map((item, index) => {
                const isToday = item.dayIndex === currentDayIndex
                return (
                  <div
                    key={index}
                    className={`flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 rounded-lg transition-colors space-y-1 sm:space-y-0 ${
                      isToday
                        ? "bg-primary/10 border border-primary/20"
                        : item.closed
                          ? "bg-muted/50"
                          : "bg-background"
                    }`}
                  >
                    <div className="flex items-center gap-2 md:gap-3">
                      <span
                        className={`font-medium text-sm md:text-base ${isToday ? "text-primary" : "text-foreground"}`}
                      >
                        {item.day}
                      </span>
                      {isToday && (
                        <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">Hoy</span>
                      )}
                    </div>
                    <div className="text-left sm:text-right">
                      <div
                        className={`font-medium text-sm md:text-base ${item.closed ? "text-muted-foreground" : "text-foreground"}`}
                      >
                        {item.hours}
                      </div>
                      {item.special && <div className="text-xs text-accent font-medium">{item.special}</div>}
                    </div>
                  </div>
                )
              })}
            </CardContent>
          </Card>

          <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Card>
              <CardContent className="p-4 md:p-6 text-center">
                <Calendar className="h-6 w-6 md:h-8 md:w-8 text-accent mx-auto mb-2 md:mb-3" />
                <h3 className="font-semibold mb-2 text-sm md:text-base">Reservas</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Recomendamos reservar para grupos de 6 o más personas
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 md:p-6 text-center">
                <Clock className="h-6 w-6 md:h-8 md:w-8 text-destructive mx-auto mb-2 md:mb-3" />
                <h3 className="font-semibold mb-2 text-sm md:text-base">Última Orden</h3>
                <p className="text-xs md:text-sm text-muted-foreground">30 minutos antes del cierre</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
