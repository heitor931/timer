import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getCurrentDate(): string {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  return `${day}/${month}/${year}`;
}

export function getCurrentTime(): string {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

  export  const createNewTimer = (title: string) => {

        return {
            timerName: title,
            currentTime: 900,
            timerId: crypto.randomUUID(),
            timerEventList: ["event-3", "event-4"],
            timerTriggerList: ["trigger-3", "trigger-4"],
            timerStartDate: "01/01/2025",
            timerStartTime: "18:00:00",
            timerEndDate: "01/01/2025",
            timerEndTime: "18:30:00",
            isPaused:false,
            isActive:false,
            isSet:false,
            isRunning:false,
            isStopped:false,
            isReset:false,
            isStarted:false,
            isFinished:false,
            isCompleted:false,

        }
    }
