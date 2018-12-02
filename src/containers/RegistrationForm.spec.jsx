import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import ConnectedRegistrationForm, { RegistrationForm } from './RegistrationForm'

const mockStore = configureStore()

describe('registration form', () => {
  it('should render without crashing.', () => {
    const wrapper = shallow(
      <RegistrationForm currentStep={0} />
    )

    expect(wrapper).toBeDefined()
  })

  it('should render correctly.', () => {
    const wrapper = shallow(<RegistrationForm currentStep={0} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should connect to the store without crashing.', () => {
    const store = mockStore({
      form: { step: 0 }
    })

    const container = shallow(<ConnectedRegistrationForm store={store} />).dive()

    expect(container).toBeDefined()
  })
})
