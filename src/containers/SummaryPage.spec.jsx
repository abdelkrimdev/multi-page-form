import React from 'react'
import { shallow } from 'enzyme'

import { SummaryPage } from './SummaryPage'

describe('summary page', () => {
  it('should render without crashing.', () => {
    const wrapper = shallow(
      <SummaryPage />
    )

    expect(wrapper).toBeDefined()
  })
})
