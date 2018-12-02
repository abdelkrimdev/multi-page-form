import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export class SummaryPage extends Component {
  static propTypes = {
    form: PropTypes.object
  }

  render () {
    const { step, fullName, emailAddress, phoneNumber, salaryIndication } = this.props.form

    return (
      <React.Fragment>
        { step === 0
          ? <div className='not-registered'>
            Please click <Link to='/registration'>here</Link> to register yourself.
          </div>
          : <React.Fragment>
            <div className='summary-title'>
              Confirm your Details
            </div>
            <div className='summary-content'>
              { fullName &&
                <div>
                  <span className='key-item'>Full Name:</span>
                  <span className='value-item'> {fullName}</span>
                </div>
              }
              { emailAddress &&
                <div>
                  <span className='key-item'>Email Address:</span>
                  <span className='value-item'> {emailAddress}</span>
                </div>
              }
              { phoneNumber &&
                <div>
                  <span className='key-item'>Phone Number:</span>
                  <span className='value-item'> {phoneNumber}</span>
                </div>
              }
              { salaryIndication &&
                <div>
                  <span className='key-item'>Salary Indication:</span>
                  <span className='value-item'> {salaryIndication}</span>
                </div>
              }
            </div>
          </React.Fragment>
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return { form: state.form }
}

export default connect(mapStateToProps)(SummaryPage)
