export default function (source) {
  let invalid = false
  try {
    JSON.parse(source)
    invalid = true
  }
  catch (e) {
    console.log('invalid JSON')
  }
  return invalid
}
