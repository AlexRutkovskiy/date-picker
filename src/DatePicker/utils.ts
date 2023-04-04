import { DateObj } from "./types";

const MAX_CEIL = 42;

export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const dayOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

export const dayOfWeekShort = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export const getFullYear = (date: Date) => date.getFullYear();

export const getMonth = (date: Date) => date.getMonth() + 1;

export const getDate = (date: Date) => date.getDate();

export const getDay = (date: Date) => date.getDay();

const addZero = (data: number): string => {
    return (data > 9) ? String(data) : "0" + data;
}

export const getFormatDate = (date: Date) => {
    return `${getFullYear(date)}-${addZero(getMonth(date))}-${addZero(getDate(date))}`;
}

export const getDayString = (date: Date): string => {
    const day = date.getDay();
    return dayOfWeek[day];
}

export const getMonthString = (date: Date): string => {
    const monthNumber = getMonth(date) - 1;
    return months[monthNumber];
}

export const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

export const isToday = (someDate: Date, today: Date): boolean => {
    return someDate.getDate() === today.getDate() &&
        someDate.getMonth() === today.getMonth() &&
        someDate.getFullYear() === today.getFullYear()
}

export const isCurrentMonth = (someDate: Date): boolean => {
    const today = new Date()
    return someDate.getMonth() === today.getMonth() && someDate.getFullYear() === today.getFullYear()
}

export const getMounthDayObj = (date: Date, selectedDate: Date): (null | DateObj)[] => {
    const res = [];
    const days = getDaysInMonth(date);
    const numberFirstDayinMonth = (new Date(date.getFullYear(), date.getMonth(), 0)).getDay() + 1

    for (let i = 0; i < MAX_CEIL; i++) {
        if (i >= numberFirstDayinMonth && i < numberFirstDayinMonth + days) {
            res.push({
                day: i - numberFirstDayinMonth + 1,
                dayWeek: new Date(date.getFullYear(), date.getMonth(), i - numberFirstDayinMonth + 1).getDay(),
                isCurrent: isToday(new Date(date.getFullYear(), date.getMonth(), i - numberFirstDayinMonth + 1), selectedDate),
                isCurrentMonth: isCurrentMonth(new Date(date.getFullYear(), date.getMonth(), i - numberFirstDayinMonth + 1)),
                month: date.getMonth(),
                year: date.getFullYear()
            } as DateObj);
            continue;
        }

        res.push(null)
    }
    return res;
}
