import React from 'react'
import PropTypes from 'prop-types'
import { Input, Icon } from 'antd'

const PhoneNumber = ({ onChange }) => {
  return (
    <Input
      name='phoneNumber'
      placeholder='001-541-754-3010'
      prefix={<Icon type='phone' style={{ color: 'rgba(0,0,0,.25)' }} />}
      onChange={onChange}
      size='large'
    />
  )
}

PhoneNumber.propTypes = {
  onChange: PropTypes.func
}

export default PhoneNumber
