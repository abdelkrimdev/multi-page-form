import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Steps, Button } from 'antd'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import FullName from '../components/FullName'
import EmailAddress from '../components/EmailAddress'
import PhoneNumber from '../components/PhoneNumber'
import SalaryIndication from '../components/SalaryIndication'

import { formActions } from '../actions/form.actions'

export class RegistrationForm extends Component {
  static propTypes = {
    currentStep: PropTypes.number,
    nextStep: PropTypes.func,
    prevStep: PropTypes.func,
    updateForm: PropTypes.func
  }

  nextStep = () => {
    this.props.nextStep()
  }

  prevStep = () => {
    this.props.prevStep()
  }

  updateForm = event => {
    this.props.updateForm({
      key: event.target.name,
      value: event.target.value
    })
  }

  render () {
    const registrationSteps = [
      {
        id: 1,
        title: 'Full Name',
        content: <FullName onChange={this.updateForm} />
      },
      {
        id: 2,
        title: 'Email Address',
        content: <EmailAddress onChange={this.updateForm} />
      },
      {
        id: 3,
        title: 'Phone Number',
        content: <PhoneNumber onChange={this.updateForm} />
      },
      {
        id: 4,
        title: 'Salary Indication',
        content: <SalaryIndication onChange={this.updateForm} />
      }
    ]
    const { currentStep } = this.props

    return (
      <React.Fragment>
        <Steps current={currentStep}>
          {registrationSteps.map(item => <Steps.Step key={item.id} title={item.title} />)}
        </Steps>
        <div className='steps-content'>
          {registrationSteps[currentStep].content}
        </div>
        <div className='steps-action'>
          {
            currentStep < registrationSteps.length - 1 &&
            <Button type='primary' onClick={this.nextStep}>Next</Button>
          }
          {
            currentStep === registrationSteps.length - 1 &&
            <Link className='ant-btn ant-btn-primary' to='/summary'>Done</Link>
          }
          {
            currentStep > 0 &&
            <Button style={{ marginLeft: 8 }} onClick={this.prevStep}>Previous</Button>
          }
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return { currentStep: state.form.step }
}

const mapDispatchToProps = (dispatch) => {
  return {
    nextStep: () => dispatch(formActions.nextStep()),
    prevStep: () => dispatch(formActions.prevStep()),
    updateForm: (input) => dispatch(formActions.updateForm(input))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm)
