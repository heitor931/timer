"use server";

import {  timers } from "@/lib/dummyData";
import { createNewTimer } from "@/lib/utils";
import { revalidatePath } from "next/cache";

export const addNewTimerAction = async(formData:FormData) => { 
    const timerName = formData.get("timerName") as string;
    console.log(timerName);
    
    try {

        const newTimer = createNewTimer(timerName);
        timers.unshift(newTimer); // add the new timer to the timers array

        // create a new timer object
        
    } catch (error) {
        if (error) {
            return {
                message: "Error adding new timer",
            }
        }
          return {
        message:"New timer added successfully",
    }
    }

    revalidatePath("/timer");
    
  
 }