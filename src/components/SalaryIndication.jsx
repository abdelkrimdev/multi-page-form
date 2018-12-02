import React from 'react'
import PropTypes from 'prop-types'
import { Radio } from 'antd'

const SalaryIndication = ({ onChange }) => {
  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  }

  return (
    <Radio.Group name='salaryIndication' onChange={onChange}>
      <Radio style={radioStyle} value='0 - 1000'>0 - 1000</Radio>
      <Radio style={radioStyle} value='1.000 - 2.000'>1.000 - 2.000</Radio>
      <Radio style={radioStyle} value='2.000 - 3.000'>2.000 - 3.000</Radio>
      <Radio style={radioStyle} value='3.000 - 4.000'>3.000 - 4.000</Radio>
      <Radio style={radioStyle} value='Mehr als 4.000'>Mehr als 4.000</Radio>
    </Radio.Group>
  )
}

SalaryIndication.propTypes = {

}

export default SalaryIndication
