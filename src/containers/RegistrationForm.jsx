import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class RegistrationForm extends Component {
  static propTypes = {

  }

  render () {
    return (
      <div>
        The Registration Form!
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm)
