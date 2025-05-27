"use server";

import { createNewTimer } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { prisma } from "../../prisma";

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
    console.log("New timer created:", newTimer);
    

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
