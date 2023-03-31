import { DateObj } from "./types";

const MAX_CEIL = 42;

export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const dayOfWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

export const dayOfWeekShort = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export const getFullYear = (date: Date) => date.getFullYear();

export const getMonth = (date: Date) => date.getMonth() + 1;

export const getDate = (date: Date) => date.getDate();

export const getDay = (date: Date) => date.getDay();


export const getFormatDate = (date: Date) => {
    return `${getFullYear(date)}-${getMonth(date)}-${getDate(date)}`;
}

export const getDayString = (date: Date): string => {
    const day = date.getDay() - 1;
    return dayOfWeek[day];
}

export const getMonthString = (date: Date): string => {
    const monthNumber = getMonth(date) - 1;
    return months[monthNumber];
}

export const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

export const isToday = (someDate: Date) => {
    const today = new Date()
    return someDate.getDate() === today.getDate() &&
        someDate.getMonth() === today.getMonth() &&
        someDate.getFullYear() === today.getFullYear()
}

export const getMounthDayObj = (date: Date): (null | DateObj)[] => {
    const res = [];
    const days = getDaysInMonth(date);
    const firstDayMonthIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const prevWeekDays = 6 - firstDayMonthIndex;

    for (let i = 0; i < MAX_CEIL; i++) {
        if (i > prevWeekDays && i <= (prevWeekDays + days)) {
            res.push({
                day: i - prevWeekDays,
                dayWeek: new Date(date.getFullYear(), date.getMonth(), i).getDay(),
                month: getMonth(date),
                year: date.getFullYear(),
                isCurrent: isToday(new Date(date.getFullYear(), date.getMonth(), i - prevWeekDays)),
                isCurrentMonth: true
            } as DateObj)
            continue;
        }

        res.push(null)
    }

    return res;
}
