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
