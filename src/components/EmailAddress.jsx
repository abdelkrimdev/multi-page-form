import React from 'react'
import PropTypes from 'prop-types'
import { Input, Icon } from 'antd'

const EmailAddress = ({ onChange }) => {
  return (
    <Input
      type='email'
      name='emailAddress'
      placeholder='peter.parker@marvel.co'
      prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />}
      onChange={onChange}
      size='large'
    />
  )
}

EmailAddress.propTypes = {
  onChange: PropTypes.func
}

export default EmailAddress
