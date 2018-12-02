import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import ConnectedSummaryPage, { SummaryPage } from './SummaryPage'

const mockStore = configureStore()

describe('summary page', () => {
  it('should render without crashing.', () => {
    const wrapper = shallow(
      <SummaryPage form={{ step: 0 }} />
    )

    expect(wrapper).toBeDefined()
  })

  it('should render correctly.', () => {
    const wrapper = shallow(<SummaryPage form={{ step: 0 }} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should connect to the store without crashing.', () => {
    const store = mockStore({
      form: { step: 0 }
    })

    const container = shallow(<ConnectedSummaryPage store={store} />).dive()

    expect(container).toBeDefined()
  })
})
