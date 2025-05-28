"use server";


import { createNewTimer } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { prisma } from "../../prisma";
import { exec } from "child_process";
import os from "os";

export const addNewTimerAction = async (
  prevState: { message: string; success: boolean },
  formData: FormData
) => {
  const timerName = formData.get("timerName") as string;
  // console.log(prevState);
  if (!timerName || timerName.trim() === "") {
    return {
      success: false,
      message: "Timer name cannot be empty",
    };
  }

  try {
    const newTimer = createNewTimer(timerName);
    
    // create a new timer object
    await prisma.timer.create({
      data: newTimer
    })
    

    revalidatePath("/timer");
  } catch (error) {
    if (error) {
      return {
        success: false,
        message: "Error adding new timer",
      };
    }
    return {
      success: true,
      message: "New timer added successfully",
    };
  }
};

export const showTimerAction = async(active:boolean, timerId:string) => { 
  console.log(active, timerId);
  
  await prisma.timer.update({
    where: {
      timerId: timerId,
    },
    data: {
      isActive: active,
    }     
  })

  revalidatePath("/timer");

 }

export const deleteTimerAction = async (timerId: string) => {
  try {
    await prisma.timer.delete({
      where: {
        timerId: timerId,
      },
    });
    revalidatePath("/timer");
  } catch (error) {
    console.error("Error deleting timer:", error);
  }
  return {
    success: true,
    message: "Timer deleted successfully",
  };
};  

//open vlc action
export const openVlcAction = async () => {
  try {
    let command = "";
    if (os.platform() === "win32") {
      // Windows VLC path (adjust if installed elsewhere)
      const vlcPath = `"C:\\Program Files (x86)\\VideoLAN\\VLC\\vlc.exe"`;
      const musicPath = `"C:\\Engineering\\Music\\yoga_music"`; // adjust as needed
      command = `${vlcPath} -Z ${musicPath}`;
    } else if (os.platform() === "linux") {
      // Linux VLC path (assumes vlc is in PATH)
      const musicPath = `~/Music/Silence`; // adjust as needed
      command = `vlc -Z ${musicPath}`;
    } else {
      return {
        success: false,
        message: "Unsupported OS",
      };
    }

    exec(command, (error) => {
      if (error) {
        console.error("Failed to open VLC:", error);
        return {
          success: false,
          message: "Failed to open VLC",
        };
      }
    });

    return {
      success: true,
      message: "VLC opened successfully",
    };
  } catch (error) {
    console.error("Error opening VLC:", error);
    return {
      success: false,
      message: "Error opening VLC",
    };
  }
};

// update current time action
export const updateCurrentTimeAction = async (timerId: string, currentTime: number) => {
  try {
    await prisma.timer.update({
      where: { timerId },
      data: { currentTime }
    });
    revalidatePath("/timer");
    return {
      success: true,
      message: "Current time updated successfully",
    };
  } catch (error) {
    console.error("Error updating current time:", error);
    return {
      success: false,
      message: "Error updating current time",
    };
  }
};

// update timer start date action
export const updateInitialTimeAction = async (timerId: string, initialTime: number) => {
  try {
    await prisma.timer.update({
      where: { timerId },
      data: { initialTime }
    });
    revalidatePath("/timer");
    return {
      success: true,
      message: "Timer start time updated successfully",
    };
  } catch (error) {
    console.error("Error updating timer start time:", error);
    return {
      success: false,
      message: "Error updating timer start time",
    };
  }
};

export const updateIsRunningAction = async (timerId: string, isRunning: boolean) => {
  try {
    await prisma.timer.update({
      where: { timerId },
      data: { isRunning }
    });
    revalidatePath("/timer");
    return {
      success: true,
      message: "Timer running state updated successfully",
    };
  } catch (error) {
    console.error("Error updating timer running state:", error);
    return {
      success: false,
      message: "Error updating timer running state",
    };
  }
};