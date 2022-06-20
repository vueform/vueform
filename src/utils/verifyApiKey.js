export default function verifyApiKey (license) {
  var score = 0
  var check_digit = license[0]
  var check_digit_count = 0
  var chunks = license.split('-')

  chunks.forEach(chunk => {
    if (chunk.length != 4) {
      return false
    }

    chunk.split('').forEach(char => {
      if (char == check_digit) {
        check_digit_count++
      }

      score += char.codePointAt(0)
    })
  })
  
  if (score == 1492 && check_digit_count == 3) {
    return true
  }

  return false
}