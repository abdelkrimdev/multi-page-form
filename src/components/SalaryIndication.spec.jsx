import React from 'react'
import { shallow } from 'enzyme'

import SalaryIndication from './SalaryIndication'

describe('salary indication component', () => {
  it('should render without crashing.', () => {
    const wrapper = shallow(<SalaryIndication />)

    expect(wrapper).toBeDefined()
  })

  it('should render correctly.', () => {
    const wrapper = shallow(<SalaryIndication />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should set the onChange property.', () => {
    const handleChange = jest.fn()
    const wrapper = shallow(<SalaryIndication onChange={handleChange} />)
    
    wrapper.prop('onChange')()

    expect(handleChange).toBeCalled()
  })
})
