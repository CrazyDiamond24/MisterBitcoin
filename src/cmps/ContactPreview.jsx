import React from 'react'
import { Link } from 'react-router-dom'

export function ContactPreview({ contact, onSelectContact, onRemoveContact }) {
  const contactAvatar = {
    backgroundImage: `url(${contact.avatarUrl})`,
  }

  const handleContactClick = () => {
    onSelectContact(contact._id)
  }

  const handleRemoveClick = (event) => {
    event.stopPropagation()
    onRemoveContact(contact._id)
  }

  return (
    <li className='contact-preview' onClick={handleContactClick}>
      <div className='contact-preview-avatar' style={contactAvatar}></div>
      <section className='contact-preview-info'>
        <h2 className='contact-preview-name'>{contact.name}</h2>
        <Link className='btn-edit' to={`/contact/edit/${contact._id}`} >Edit</Link>
        <button className='btn-remove' onClick={handleRemoveClick}>
          Remove
        </button>
      </section>
    </li>
  )
}

