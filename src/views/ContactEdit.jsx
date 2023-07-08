import { Component, createRef } from 'react'
import { contactService } from '../services/contact.service'

export class ContactEdit extends Component {
  state = {
    contact: null,
  }

  // inputRef = createRef()

  async componentDidMount() {
    const contactId = this.props.match.params.id
    const contact = contactId
      ? await contactService.getContactById(contactId)
      : contactService.getEmptyContact()
    this.setState({ contact }, () => {
      // this.inputRef.current.focus()
    })
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.value
    this.setState((prevState) => ({
      contact: { ...prevState.contact, [field]: value },
    }))
  }

  onSaveContact = async (ev) => {
    ev.preventDefault()
    await contactService.saveContact({ ...this.state.contact })
    this.props.history.push('/Contacts')
  }

  inputRefFunc = (elInput) => {
    elInput && elInput.focus()
  }

  render() {
    const { contact } = this.state
    if (!contact) return <div>Loading...</div>

    return (
      <section className='contact-edit'>
        
        <img
         src='https://cdn-ghekn.nitrocdn.com/YUvChxRvcTprTfRRMCsflKVCpVauhGnj/assets/images/optimized/rev-9d5dde8/www.pixelettetech.com/wp-content/uploads/2023/01/Crypto-exchange-illustration-01-01-2048x2048.png'
          alt=''
          />

        <form onSubmit={this.onSaveContact}>
          <h1>{contact._id ? 'Edit' : 'Add'} Contact</h1>
          <label htmlFor='name'>Name</label>
          <input
            ref={this.inputRefFunc}
            value={contact.name}
            onChange={this.handleChange}
            type='text'
            name='name'
            id='name'
          />
          <label htmlFor='email'>Email</label>
          <input
            value={contact.email}
            onChange={this.handleChange}
            type='email'
            name='email'
            id='email'
          />
          <label htmlFor='phone'>Phone</label>
          <input
            value={contact.phone}
            onChange={this.handleChange}
            type='text'
            name='phone'
            id='phone'
          />
          <button className='btn'>Save</button>
        </form>
      </section>
    )
  }
}
