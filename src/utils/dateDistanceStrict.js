// https://date-fns.org/docs/formatDistance
import { formatDistanceStrict } from 'date-fns'

export function dateDistanceStrict(fromDate, toDate = Date.now()) {
  return formatDistanceStrict(fromDate, toDate, { addSuffix: true })
}
