import dayjs from 'dayjs'

export const formatDateMMDDYY = (date: Date | string) => {
    return dayjs(date).format('MM/DD/YY')
}
