"use client"


import { addNewTimerAction } from "@/actions/timerActions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useActionState } from "react"



function InputWithButton() {
  const [state, action,isPending] = useActionState(
    addNewTimerAction as (prevState: { message: string } | undefined, formData: FormData) => Promise<{ message: string } | undefined>,
    { message: "" }
  );

  // const handleAddNewTimer = async (formData: FormData) => { 
    
  //   await action(formData);
  //  }


  return (
    <form action={action} className="flex w-full max-w-sm items-center space-x-2">
      <Input  type="text" name="timerName" placeholder="Add a new timer" />
      <Button type="submit">Submit</Button>
      {isPending && <p className="text-blue-500 absolute translate-y-10 bg-white rounded border p-1">Adding...</p>}
      {state?.message && <p className="text-red-500 absolute translate-y-10 bg-white rounded border p-1">{state.message}</p>}
    </form>
  )
}

export default InputWithButton