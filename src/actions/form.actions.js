import { formConstants } from '../constants/form.constants'

export const formActions = {
  startRegitration: () => {
    return { type: formConstants.START_REGISTRATION }
  },
  nextStep: () => {
    return { type: formConstants.NEXT_STEP }
  },
  prevStep: () => {
    return { type: formConstants.PREV_STEP }
  },
  updateForm: (input) => {
    return {
      type: formConstants.UPDATE_FORM,
      payload: input
    }
  }
}
