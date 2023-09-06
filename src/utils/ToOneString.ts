const toOneString = (array: string[] | undefined) => {
  if (array === undefined) return ''
  let response: string = array[0]
  for (let i = 1; i < array.length; i++) {
    response += ', ' + array[i]
  }
  return response
}

export default toOneString
