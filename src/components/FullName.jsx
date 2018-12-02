import React from 'react'
import PropTypes from 'prop-types'
import { Input, Icon } from 'antd'

const FullName = ({ onChange }) => {
  return (
    <Input
      name='fullName'
      placeholder='Peter Parker'
      prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
      onChange={onChange}
      size='large'
    />
  )
}

FullName.propTypes = {
  onChange: PropTypes.func
}

export default FullName
