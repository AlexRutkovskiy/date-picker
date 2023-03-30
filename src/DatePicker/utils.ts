export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const dayOfWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];


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
    return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
}