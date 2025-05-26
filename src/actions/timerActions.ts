"use server";

import { revalidatePath } from "next/cache";

export const addNewTimerAction = async(formData:FormData) => { 
    const timerName = formData.get("timerName") as string;
    console.log(timerName);
    
    try {

        // create a new timer object
        

        
    } catch (error) {
          return {
        message:"New timer added successfully",
    }
    }

    revalidatePath("/timer");
    
  
 }