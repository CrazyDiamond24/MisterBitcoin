import { Component } from 'react'
import { contactService } from '../services/contact.service'
import { ContactList } from '../cmps/ContactList'
import { ContactDetails } from './ContactDetails'
import { ContactFilter } from '../cmps/ContactFilter'
import { Link } from 'react-router-dom'

export class ContactIndex extends Component {

    state = {
        constacts: null,
        selectedContactId: null,
        filterBy: {
            name: '',
            email: '',
            phone: '',
        }
    }

    componentDidMount() {
        this.loadContacts()
    }

    loadContacts = async () => {
        try {
            const contacts = await contactService.getContacts(this.state.filterBy)
            this.setState({ contacts })
        } catch (err) {
            console.error('err:', err)
        }
    }

    onRemoveContact = async (contactId) => {
        try {
            await contactService.deleteContact(contactId)
            this.setState(({ contacts }) => ({
                contacts: contacts.filter(contact => contact._id !== contactId)
            }))
        } catch (err) {
            console.error('error:', err)
        }
    }

    onSelectContact = (contactId) => {
        this.setState({ selectedContactId: contactId })
    }


    onChangeFilter = (filterBy) => {
        this.setState({ filterBy: { ...filterBy } }, this.loadContacts)
    }

    render() {
        const { contacts, selectedContactId, filterBy } = this.state
        if (!contacts) return <div>Loading...</div>
        return (
            <section className='contact-index'>
                <Link className='add-btn' to="/contact/edit">Add Contact</Link>
                {selectedContactId ?
                    <ContactDetails contactId={selectedContactId} onBack={(() => this.onSelectContact(null))} /> :
                    <>
                        <ContactFilter filterBy={filterBy} onChangeFilter={this.onChangeFilter} />
                        <ContactList onRemoveContact={this.onRemoveContact} contacts={contacts} onSelectContact={this.onSelectContact} />
                    </>
                }
            </section>
        )
    }
}
