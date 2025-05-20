import { InputWithButton } from "@/components/InputWithButton";
import Timer from "@/components/Timer";

function TimerHome() {

  
  return (
    <main className="flex flex-col gap-3 flex-wrap p-2">
        <InputWithButton />
<div className="flex flex-wrap gap-4 justify-center items-center">
      {Array.from({ length: 2 }, (_, i) => (
        <Timer key={i} />
       
      ))}
</div>
    
    </main>
  );
}

export default TimerHome;