import { HabitDay } from "./HabitDay.js";
import { generateRange } from "./utils/generateRange";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
const summaryDates = generateRange();

const minimumSummary = 10 * 7;
const amountDays = minimumSummary - summaryDates.length;

export function Table() {
  return (
    <div className="all">
      <div>
        {weekDays.map((weekDay, i) => {
          return (
            <div className="week" key={`${weekDay}-${i}`}>
              {weekDay}
            </div>
          );
        })}
      </div>

      <div className="btns">
        {summaryDates.map((date) => {
          return (
            <div className="dates" key={date}>
              <HabitDay key={toString} />
            </div>
          );
        })}
        {amountDays > 0 &&
          Array.from({ length: amountDays }).map((_, i) => {
            return <div key={i} className="daysbtn" />;
          })}
      </div>
    </div>
  );
}
