"use client"


import { addNewTimerAction } from "@/actions/timerActions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"



function InputWithButton() {

  const handleAddNewTimer = async (formData: FormData) => { 
    
    await addNewTimerAction(formData);
   }


  return (
    <form action={handleAddNewTimer} className="flex w-full max-w-sm items-center space-x-2">
      <Input  type="text" name="timerName" placeholder="Add a new timer" />
      <Button type="submit">Submit</Button>
    </form>
  )
}

export default InputWithButton