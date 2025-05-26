import InputWithButton from "@/components/InputWithButton";
import Timer from "@/components/Timer";
import { timers } from "@/lib/dummyData";

function TimerHome() {
  

  return (
    <main className="flex flex-col gap-3 flex-wrap p-2">
        <InputWithButton />
<div className="flex flex-col gap-4 ">
     {timers.map((timer) => (
        <Timer key={timer.timerId} {...timer} />
      ))}
</div>
    
    </main>
  );
}

export default TimerHome;