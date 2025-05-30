import { TimerType } from '@/lib/dummyData';
import { createNewTimer } from '@/lib/utils';
import { create } from 'zustand'

type TimerContext = {
    timers: TimerType[]
    addTimer: (timerName: string) => void
    showTimer:(timerId: string) => void
    deleteTimer: (timerId: string) => void
    setTimers: (timers: TimerType[]) => void
    updateCurrentTime: (timerId: string, currentTime: number) => void
    pid: number | null
    setPid:(pid: number) => void
}

const useTimerStore = create<TimerContext>((set) => ({
    timers: [],
    setTimers: (timers: TimerType[]) => set({ timers }),
    addTimer: (timerName: string) => set((state) => ({
        timers: [createNewTimer(timerName),...state.timers, ]
    })),
    updateCurrentTime: (timerId: string, currentTime: number) => set((state) => ({
        timers: state.timers.map(timer =>
            timer.timerId === timerId ? { ...timer, currentTime } : timer
        )
    })),
    showTimer: (timerId: string) => set((state) => ({
        timers: state.timers.map(timer =>
            timer.timerId === timerId ? { ...timer, isActive: !timer.isActive } : timer
        )
    })),
    deleteTimer: (timerId: string) => set((state) => ({
        timers: state.timers.filter(timer => timer.timerId !== timerId)
    })),
    pid: null,
    setPid: (pid: number) => set({ pid  })
}))

export default useTimerStore;