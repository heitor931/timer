"use client"


import { addNewTimerAction } from "@/actions/timerActions"
import useTimerStore from "@/app/timer/_context/store"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChangeEvent, FormEvent, startTransition, useActionState, useState } from "react"



function InputWithButton() {
  const [state, action] = useActionState(
    addNewTimerAction as (prevState: { message: string } | undefined, formData: FormData) => Promise<{ message: string } | undefined>,
    { message: "" }
  );
  const [timerInput, setTimerInput] = useState("")
  const {addTimer} = useTimerStore()


  const handleChangeValue = (e:ChangeEvent<HTMLInputElement>) => { 
    setTimerInput(e.target.value);
   }
  
  const handleAddNewTimer =  (e: FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const timerName = formData.get("timerName") as string;
    if (!timerName || timerName.trim() === "") {
      return;
    }
      addTimer(timerName);
      setTimerInput(""); // Clear the input field after submission

      // update the database with the new timer
      
      startTransition(() => {
       action(formData);
     
    });
     
   
   }


  return (
    <form onSubmit={handleAddNewTimer}  className="flex m-auto w-full max-w-sm items-center space-x-2">
      <Input onChange={handleChangeValue} value={timerInput}  type="text" name="timerName" placeholder="Add a new timer" />
      <Button type="submit">Submit</Button>
      {state?.message && <p className="text-red-500 absolute translate-y-10 bg-white rounded border p-1">{state.message}</p>}
    </form>
  )
}

export default InputWithButton