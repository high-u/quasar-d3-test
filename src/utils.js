export default function isJson (source) {
  let invalid = false
  try {
    JSON.parse(source)
    invalid = true
  }
  catch (e) {
  }
  return invalid
}
