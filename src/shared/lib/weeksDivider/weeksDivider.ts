import { TimetableEntry } from "../../../entities/Calendar/model/types/timetable";

export const groupByWeeks = (data: TimetableEntry[]) => {
    if (!data || data.length === 0) return [];
    const weeks = [];
    for (let i = 0; i < data.length; i += 7) {
      weeks.push(data.slice(i, i + 7));
    }
    return weeks;
  };