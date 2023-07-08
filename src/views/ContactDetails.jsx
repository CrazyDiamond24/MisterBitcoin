import { Component } from 'react'
import { contactService } from '../services/contact.service'
import { userService } from '../services/user.service'
import { Link } from 'react-router-dom'
import { MovesList } from '../cmps/MovesList'
import { TransferFund } from '../cmps/TransferFund'

export class ContactDetails extends Component {
  state = {
    contact: null,
    movesList: [],
    currUser: null,
  }

  async componentDidMount() {
    await this.loadContact()
    await this.loadUser()
  }

  async loadUser() {
    const user = userService.getUser()
    this.setState({ currUser: user })
  }
  loadContact = async () => {
    try {
      const contact = await contactService.getContactById(this.props.contactId)
      this.setState({ contact })
    } catch (error) {
      console.error('error:', error)
    }
  }

  get movesList() {
    const { currUser } = this.state;
    return currUser && currUser.moves ? currUser.moves.slice(0, 3) : [];
  }
  

  onTransferCoins = (contact, amount) => {
    const user = userService.addMove(contact, amount)
  }

  render() {
    const { contact, currUser, movesList } = this.state
    if (!contact) return <div>Loading...</div>
    const coins = currUser ? currUser.coins : 0
    return (
      <>
      if (!this.contact) return <div>Loading...</div>
      console.log('contact' , contact)
        <section className='contact-details'>
          <img
            className='contact-avatar'
            src={`${contact.avatarUrl}`}
            alt={contact.name}
          />
          <div className='contact-info-details'>
            <h3 className='contact-name'>Name: {contact.name}</h3>
            <h3 className='contact-email'>Email: {contact.email}</h3>
            <h3 className='contact-phone'>Phone: {contact.phone}</h3>
            <button className='btn-back' onClick={this.props.onBack}>
              Back
            </button>
          </div>
        </section>
        <TransferFund
          contact={contact}
          maxCoins={coins}
          onTransferCoins={this.onTransferCoins}
        />
        <MovesList title={'Recent transfers:'} movesList={this.movesList} />
      </>
    )
  }
}
