import React from 'react'
import { shallow } from 'enzyme'

import EmailAddress from './EmailAddress'

describe('email address component', () => {
  it('should render without crashing.', () => {
    const wrapper = shallow(<EmailAddress />)

    expect(wrapper).toBeDefined()
  })

  it('should render correctly.', () => {
    const wrapper = shallow(<EmailAddress />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should set the onChange property.', () => {
    const handleChange = jest.fn()
    const wrapper = shallow(<EmailAddress onChange={handleChange} />)
    
    wrapper.prop('onChange')()

    expect(handleChange).toBeCalled()
  })
})
