import { schedule, type DaySchedule } from "@/lib/business"

export type OpenStatus = {
  isOpen: boolean
  /** Texto corto: "Abierto ahora" / "Cerrado" */
  label: string
  /** Texto largo: "Cierra a las 16:00", "Abre hoy a las 19:00", "Abre el miércoles a las 09:00" */
  detail: string
  dayIndex: number
}

const DAY_KEYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number)
  return h * 60 + m
}

/** Día y hora actuales en la zona horaria del restaurante (Europe/Madrid). */
export function getMadridNow(date: Date = new Date()) {
  try {
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Madrid",
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).formatToParts(date)
    const map: Record<string, string> = {}
    for (const p of parts) if (p.type !== "literal") map[p.type] = p.value
    const dayIndex = DAY_KEYS.indexOf(map.weekday)
    let hour = Number(map.hour)
    if (hour === 24) hour = 0
    return {
      dayIndex: dayIndex >= 0 ? dayIndex : date.getDay(),
      minutes: hour * 60 + Number(map.minute),
    }
  } catch {
    return { dayIndex: date.getDay(), minutes: date.getHours() * 60 + date.getMinutes() }
  }
}

function dayByIndex(index: number): DaySchedule {
  const normalized = ((index % 7) + 7) % 7
  return schedule.find((d) => d.dayIndex === normalized) as DaySchedule
}

export function getOpenStatus(date: Date = new Date()): OpenStatus {
  const { dayIndex, minutes } = getMadridNow(date)
  const today = dayByIndex(dayIndex)

  for (const range of today.ranges) {
    if (minutes >= toMinutes(range.start) && minutes < toMinutes(range.end)) {
      return { isOpen: true, label: "Abierto ahora", detail: `Cierra a las ${range.end}`, dayIndex }
    }
  }

  const laterToday = today.ranges.find((r) => toMinutes(r.start) > minutes)
  if (laterToday) {
    return { isOpen: false, label: "Cerrado", detail: `Abre hoy a las ${laterToday.start}`, dayIndex }
  }

  for (let offset = 1; offset <= 7; offset++) {
    const next = dayByIndex(dayIndex + offset)
    if (next.ranges.length > 0) {
      const when = offset === 1 ? "mañana" : `el ${next.day.toLowerCase()}`
      return { isOpen: false, label: "Cerrado", detail: `Abre ${when} a las ${next.ranges[0].start}`, dayIndex }
    }
  }

  return { isOpen: false, label: "Cerrado", detail: "", dayIndex }
}
