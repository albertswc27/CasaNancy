"use client"

import { Sparkles } from "lucide-react"
import { useOpenStatus } from "@/hooks/use-open-status"
import { schedule, formatRanges } from "@/lib/business"
import { cn } from "@/lib/utils"

export function WeeklySchedule() {
  const status = useOpenStatus()
  const todayIndex = status?.dayIndex ?? -1

  return (
    <ol className="divide-y divide-foreground/[0.06]">
      {schedule.map((day) => {
        const isToday = day.dayIndex === todayIndex
        const closed = day.ranges.length === 0
        return (
          <li
            key={day.day}
            className={cn(
              "flex flex-col gap-1 px-4 py-3.5 transition-colors sm:flex-row sm:items-center sm:justify-between sm:gap-4",
              isToday && "rounded-2xl bg-primary/[0.07] ring-1 ring-primary/15",
            )}
            aria-current={isToday ? "date" : undefined}
          >
            <div className="flex items-center gap-2.5">
              <span className={cn("font-semibold", isToday ? "text-primary" : closed ? "text-muted-foreground" : "")}>
                {day.day}
              </span>
              {isToday && (
                <span className="rounded-full bg-primary px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-white">
                  Hoy
                </span>
              )}
            </div>
            <div className="sm:text-right">
              <p className={cn("text-sm font-medium sm:text-base", closed ? "text-muted-foreground" : "text-foreground")}>
                {formatRanges(day.ranges)}
              </p>
              {day.special && (
                <p className="mt-0.5 inline-flex items-center gap-1 text-xs font-medium text-accent">
                  <Sparkles className="size-3" aria-hidden="true" />
                  {day.special}
                </p>
              )}
            </div>
          </li>
        )
      })}
    </ol>
  )
}
