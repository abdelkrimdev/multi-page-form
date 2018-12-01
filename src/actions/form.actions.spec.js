import configureStore from 'redux-mock-store'

import { formActions } from './form.actions'

const mockStore = configureStore()

describe('form actions', () => {
  it('should create start registration action.', () => {
    const store = mockStore()

    store.dispatch(formActions.startRegitration())

    expect(store.getActions()).toMatchSnapshot()
  })
  
  it('should create next step action.', () => {
    const store = mockStore()

    store.dispatch(formActions.nextStep())

    expect(store.getActions()).toMatchSnapshot()
  })

  it('should create previous step action.', () => {
    const store = mockStore()

    store.dispatch(formActions.prevStep())

    expect(store.getActions()).toMatchSnapshot()
  })

  it('should create update form action.', () => {
    const store = mockStore()
    const input = {
        key: 'name',
        value: 'Bruce'
    }

    store.dispatch(formActions.updateForm(input))

    expect(store.getActions()).toMatchSnapshot()
  })
})
