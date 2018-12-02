import { formConstants } from '../constants/form.constants'

export const form = (state = { step: 0 }, action) => {
  switch (action.type) {
    case formConstants.NEXT_STEP:
      return {
        ...state,
        step: state.step + 1
      }
    case formConstants.PREV_STEP:
      return {
        ...state,
        step: state.step - 1
      }
    case formConstants.UPDATE_FORM:
      return {
        ...state,
        [action.payload.key]: action.payload.value
      }
    default:
      return state
  }
}
