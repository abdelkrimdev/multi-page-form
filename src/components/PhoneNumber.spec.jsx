import React from 'react'
import { shallow } from 'enzyme'

import PhoneNumber from './PhoneNumber'

describe('phone number component', () => {
  it('should render without crashing.', () => {
    const wrapper = shallow(<PhoneNumber />)

    expect(wrapper).toBeDefined()
  })

  it('should render correctly.', () => {
    const wrapper = shallow(<PhoneNumber />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should set the onChange property.', () => {
    const handleChange = jest.fn()
    const wrapper = shallow(<PhoneNumber onChange={handleChange} />)

    wrapper.prop('onChange')()

    expect(handleChange).toBeCalled()
  })
})
