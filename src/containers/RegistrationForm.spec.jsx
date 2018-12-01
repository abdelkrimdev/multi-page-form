import React from 'react'
import { shallow } from 'enzyme'

import { RegistrationForm } from './RegistrationForm'

describe('main registration form', () => {
  it('should render without crashing.', () => {
    const wrapper = shallow(
      <RegistrationForm />
    )

    expect(wrapper).toBeDefined()
  })
})
