import * as Popover from "@radix-ui/react-popover";
import { ProgressBar } from "./ProgressBar.tsx";

export function HabitDay() {
  return (
    <Popover.Root>
      <Popover.Trigger className="daysbtn" />
      <Popover.Portal>
        <Popover.Content className="content">
          <div className="test">
            <span className="thursday">QUINTA FEIRA</span>
            <span className="date">26/01</span>
            <ProgressBar progresss={20} />
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
