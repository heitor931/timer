import { addNewTimerAction } from "@/actions/timerActions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"



export async function InputWithButton() {
  return (
    <form action={addNewTimerAction} className="flex w-full max-w-sm items-center space-x-2">
      <Input  type="text" placeholder="Add a new timer" />
      <Button type="submit">Submit</Button>
    </form>
  )
}
