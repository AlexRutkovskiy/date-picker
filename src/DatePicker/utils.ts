export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const dayOfWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

export const getFullYear = (date: Date) => {
    return date.getFullYear();
}

export const getMonth = (date: Date) => {
    return date.getMonth() + 1;
}

export const getDate = (date: Date) => {
    return date.getDate();
}

export const getDay = (date: Date) => {
    return date.getDay();
}

export const getFormatDate = (date: Date) => {
    return `${getFullYear(date)}-${getMonth(date)}-${getDate(date)}`;
}