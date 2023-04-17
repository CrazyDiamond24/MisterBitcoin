import { Component } from 'react'
import { userService } from '../services/user.service'

export class SignupPage extends Component {
  state = {
    name: '',
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.value
    this.setState((prevState) => ({ ...prevState, [field]: value }))
  }

  onSignup = async (ev) => {
    ev.preventDefault()
    if (this.state.name === '') return
    userService.signup(this.state.name)
    this.props.history.push('/')
  }

  inputRefFunc = (elInput) => {
    elInput && elInput.focus()
  }

  render() {
    const { name } = this.state

    return (
      <section className='signup-page'>
        <img
          src='https://www.cryptorecruit.com/media/qyllkh4j/banimg.png'
          alt=''
        />

        <form onSubmit={this.onSignup}>
          <h3>Signup to get started with MisterBitcoin</h3>
          <h2>Please enter your name</h2>
          <input
            ref={this.inputRef}
            type='text'
            value={name}
            onChange={this.handleChange}
            name='name'
            placeholder='Enter your name'
            className='form-input'
          />
          <button type='submit' className='btn'>
            Sign up
          </button>
        </form>
      </section>
    )
  }
}
