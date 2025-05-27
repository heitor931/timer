"use client";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

import { deleteTimerAction, showTimerAction } from "@/actions/timerActions";
import useTimerStore from "@/app/timer/_context/store";
import { startTransition, useState,MouseEvent } from "react";

type TimerHeaderProps = {
  timerName: string;
  currentTime: number;
  timerId: string;
  isActive: boolean;
};

function TimerHeader({ timerName, timerId, isActive }: TimerHeaderProps) {
  const [activate, setActivate] = useState(isActive);
  const { showTimer, deleteTimer } = useTimerStore();
  const activateAction = showTimerAction.bind(null, !activate, timerId);

  const handleClick = () => {
    console.log("clicked");
    
    setActivate(!activate);
    showTimer(timerId);
    startTransition(() => {
      activateAction();
    });
  };

  const handleDelete = (e:MouseEvent<HTMLDivElement>) => {
    console.log("delete");
    
    e.stopPropagation(); // Prevent the context menu from closing immediately
    // Here you would typically call an action to delete the timer
    // For now, we will just log the timerId
    deleteTimer(timerId);
    startTransition(() => {
      deleteTimerAction(timerId);
    });
  };

  return (
    <div onClick={handleClick} className="w-72">
      <ContextMenu>
        <ContextMenuTrigger>
          <p style={{backgroundColor: isActive ? "#3b82f6" : "#000"}} className="bg-transparent cursor-pointer rounded-md border p-2 text-center">
            {timerName}
          </p>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem className="text-red-500" onClick={handleDelete}>Delete</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  );
}

export default TimerHeader;
