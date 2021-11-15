import { isToday, formatDistance } from 'date-fns'

export function dateDistanceRelative(fromDate, toDate = new Date()) {
  return formatDistance(fromDate, toDate, { includeSeconds: true }) + (isToday(toDate) ? ' ago' : '')
}
