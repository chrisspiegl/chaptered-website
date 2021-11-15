// https://date-fns.org/docs/format
import { format } from 'date-fns'

export function dateFormat(date) {
  return format(date, 'yyyy-MM-dd HH:mm:ss')
}
