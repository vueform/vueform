/**
 * Convert Format Token Function
 * 
 * The goal is to be able to convert date format strings between different token standards. 
 * 
 * Example: year-month-day format in PHP looks like this: "Y-m-d"
 *          when converted to eg. moment.js format is should be "YYYY-MM-DDD".
 * 
 * Important: non-token characters should be escaped with backslash \ except for: ,.:;'-_\/
 * when converting to an other token standard to prevent unintented token definition.
 * 
 * Test cases:
 * convertFormatToken('Y-m-d', 'flatpickr', 'moment') -> 'YYYY-MM-DD'
 * convertFormatToken('Date: Y-m-d', 'flatpickr', 'moment') -> '\D\a\t\e: YYYY-MM-DD'
 * convertFormatToken('Y-m-dTH:i:S', 'flatpickr', 'php') -> 'YYYY-MM-DD\THH:mm:ss'
 * convertFormatToken('J, F Y', 'flatpickr', 'php') -> 'jS, F Y'
 * convertFormatToken('jS, F Y', 'php', 'flatpickr') -> 'J, F Y'
 * convertFormatToken('Y-m-dTH:i:s', 'php', 'flatpickr') -> 'Y-m-d\TH:i:S'
 * convertFormatToken('Y-m-d\\TH:i:s', 'php', 'moment') -> 'YYYY-MM-DD\\\THH:mm:ss'
 * convertFormatToken("jS, F 'y", 'php', 'moment') -> "Do, MMMM 'YY"
 * convertFormatToken('YYYY-MM-DDTHH:mm:ss', 'moment', 'flatpickr') -> 'Y-m-d\TH:i:S'
 * convertFormatToken('YYYY-MM-DDTHH:mm:ss', 'moment', 'php') -> 'Y-m-d\TH:i:s'
 * 
 * Please add test cases that you see fit.
 */

import _ from 'lodash'

const unescapedSymbols = [',', '.', ':', ';', '\'', '-', '_', '\\', '/']

const tokens = {
  flatpickr: [
    'd', // Day of the month, 2 digits with leading zeros - 01 to 31
    'D', // A textual representation of a day - Mon through Sun
    'l', // A full textual representation of the day of the week - Sunday through Saturday
    'j', // Day of the month without leading zeros - 1 to 31
    'J', // Day of the month without leading zeros and ordinal suffix - 1st, 2nd, to 31st
    'w', // Numeric representation of the day of the week - 0 (for Sunday) through 6 (for Saturday)
    'W', // Numeric representation of the week - 1 (first week of the year) through 52 (last week of the year)
    'F', // A full textual representation of a month - January through December
    'm', // Numeric representation of a month, with leading zero - 01 through 12
    'n', // Numeric representation of a month, without leading zeros - 1 through 12
    'M', // A short textual representation of a month - Jan through Dec
    'U', // The number of seconds since the Unix Epoch - 1413704993
    'y', // A two digit representation of a year - 99 or 03
    'Y', // A full numeric representation of a year, 4 digits - 1999 or 2003
    'H', // Hours (24 hours) - 00 to 23
    'h', // Hours - 1 to 12
    'G', // Hours, 2 digits with leading zeros - 01 to 12
    'i', // Minutes - 00 to 59
    'S', // Seconds, 2 digits - 00 to 59
    'K', // AM/PM - AM or PM
  ],
  php: [
    'd', // Day of the month, 2 digits with leading zeros - 01 to 31
    'D', // A textual representation of a day - Mon through Sun
    'l', // A full textual representation of the day of the week - Sunday through Saturday
    'j', // Day of the month without leading zeros - 1 to 31
    'jS', // Day of the month without leading zeros and ordinal suffix - 1st, 2nd, to 31st
    'w', // Numeric representation of the day of the week - 0 (for Sunday) through 6 (for Saturday)
    'W', // Numeric representation of the week - 1 (first week of the year) through 52 (last week of the year)
    'F', // A full textual representation of a month - January through December
    'm', // Numeric representation of a month, with leading zero - 01 through 12
    'n', // Numeric representation of a month, without leading zeros - 1 through 12
    'M', // A short textual representation of a month - Jan through Dec
    'U', // The number of seconds since the Unix Epoch - 1413704993
    'y', // A two digit representation of a year - 99 or 03
    'Y', // A full numeric representation of a year, 4 digits - 1999 or 2003
    'H', // Hours (24 hours) - 00 to 23
    'g', // Hours - 1 to 12
    'h', // Hours, 2 digits with leading zeros - 01 to 12
    'i', // Minutes - 00 to 59
    's', // Seconds, 2 digits - 00 to 59
    'A', // AM/PM - AM or PM
  ],
  moment: [
    'DD', // Day of the month, 2 digits with leading zeros - 01 to 31
    'ddd', // A textual representation of a day - Mon through Sun
    'dddd', // A full textual representation of the day of the week - Sunday through Saturday
    'D', // Day of the month without leading zeros - 1 to 31
    'Do', // Day of the month without leading zeros and ordinal suffix - 1st, 2nd, to 31st
    'e', // Numeric representation of the day of the week - 0 (for Sunday) through 6 (for Saturday)
    'W', // Numeric representation of the week - 1 (first week of the year) through 52 (last week of the year)
    'MMMM', // A full textual representation of a month - January through December
    'MM', // Numeric representation of a month, with leading zero - 01 through 12
    'M', // Numeric representation of a month, without leading zeros - 1 through 12
    'MMM', // A short textual representation of a month - Jan through Dec
    'X', // The number of seconds since the Unix Epoch - 1413704993
    'YY', // A two digit representation of a year - 99 or 03
    'YYYY', // A full numeric representation of a year, 4 digits - 1999 or 2003
    'HH', // Hours (24 hours) - 00 to 23
    'h', // Hours - 1 to 12
    'hh', // Hours, 2 digits with leading zeros - 01 to 12
    'mm', // Minutes - 00 to 59
    'ss', // Seconds, 2 digits - 00 to 59
    'A', // AM/PM - AM or PM
  ]
}

export default function(str, from, to){
  let tokensFound = []

  _.each(tokens[from], (token, key) => {
    let matches = str.match(new RegExp(`(${token})+`, 'g'))

    if (matches && matches.length == 1) {
      tokensFound.push({
        token: token,
        key: key
      })
    }
  })

  _.each(tokensFound, ({token, key}) => {
    str = str.replace(new RegExp(`(${token})`, 'g'), tokens[to][key])
  })

  return str
}