const initialState = {
  identification: {
    version: '0.0.1'
  }
}
const config = (state = initialState, {
  type,
  payload
}) => {
  switch (type) {
    case '':
      return
    default:
      return state
  }
}
export default config