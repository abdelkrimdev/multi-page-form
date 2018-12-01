import { formConstants } from '../constants/form.constants'
import { form } from './form.reducer'

describe('form reducer', () => {
  it('should have initial state.', () => {
    const action = { type: 'DUMMY_ACTION' }

    expect(form(undefined, action)).toMatchSnapshot()
  })

  it('should return the current state after receiving a dummy action.', () => {
    const state = { data: 'current state' }
    const action = { type: 'DUMMY_ACTION' }

    expect(form(state, action)).toMatchSnapshot()
  })

  it('should handle start registration action.', () => {
    const action = { type: formConstants.START_REGISTRATION }

    expect(form({ }, action).step).toEqual(1)
  })

  it('should handle next step action.', () => {
    const state = { step: 1 }
    const action = {
      type: formConstants.NEXT_STEP
    }

    expect(form(state, action).step).toEqual(state.step + 1)
  })

  it('should handle previous step action.', () => {
    const state = { step: 2 }
    const action = {
      type: formConstants.PREV_STEP
    }

    expect(form(state, action).step).toEqual(state.step - 1)
  })

  it('should handle update form action.', () => {
    const state = {
      step: 2,
      name: 'Clark'
    }
    const action = {
      type: formConstants.UPDATE_FORM,
      payload: {
        key: 'address',
        value: 'Krypton'
      }
    }

    expect(form(state, action)).toMatchSnapshot()
  })
})
