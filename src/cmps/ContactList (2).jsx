import { ContactPreview } from './ContactPreview'

export function ContactList({ contacts, onSelectContact, onRemoveContact}) {
  return (
    <ul className='contact-list'>
      {contacts.map((contact) => (
        <ContactPreview
          key={contact._id}
          contact={contact}
          onSelectContact={onSelectContact}
          onRemoveContact={onRemoveContact}
        />
      ))}
    </ul>
  )
}

