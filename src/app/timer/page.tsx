import { InputWithButton } from "@/components/InputWithButton";
import Timer from "@/components/Timer";
import { timers } from "@/lib/dummyData";

function TimerHome() {
  
  const handleAddTimer = (newTimer) => {
    timers.push(newTimer);
  };
  
  return (
    <main className="flex flex-col gap-3 flex-wrap p-2">
        <InputWithButton />
<div className="flex flex-wrap gap-4 justify-center items-center">
     {timers.map((timer) => (
        <Timer key={timer.timerId} {...timer} />
      ))}
</div>
    
    </main>
  );
}

export default TimerHome;