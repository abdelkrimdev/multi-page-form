import React from 'react'
import { shallow } from 'enzyme'

import FullName from './FullName'

describe('full name component', () => {
  it('should render without crashing.', () => {
    const wrapper = shallow(<FullName />)

    expect(wrapper).toBeDefined()
  })

  it('should render correctly.', () => {
    const wrapper = shallow(<FullName />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should set the onChange property.', () => {
    const handleChange = jest.fn()
    const wrapper = shallow(<FullName onChange={handleChange} />)

    wrapper.prop('onChange')()

    expect(handleChange).toBeCalled()
  })
})
