import { HabitDay } from "./HabitDay.js";
import { generateRange } from "./utils/generateRange";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
const summaryDates = generateRange();

const minimumSummary = 7 * 34.5714286;
const amountDays = minimumSummary - summaryDates.length;

export function Table() {
  return (
    <div className="all">
      <div className="days">
        <div>
          {weekDays.map((weekDay, i) => {
            return (
              <div className="week" key={`${weekDay}-${i}`}>
                {weekDay}
              </div>
            );
          })}
        </div>
      </div>

      <div className="btns">
        <div className="btns2">
          {summaryDates.map((date) => {
            return <HabitDay />;
          })}
          {amountDays > 0 &&
            Array.from({ length: amountDays }).map((_, i) => {
              return <div key={i} className="daysbtn" />;
            })}
        </div>
      </div>
    </div>
  );
}
