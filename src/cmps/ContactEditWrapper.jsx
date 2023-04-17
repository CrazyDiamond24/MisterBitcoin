import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ContactEdit } from '../views/ContactEdit'

const ContactEditWrapper = () => {
  const params = useParams()
  const navigate = useNavigate()

  return <ContactEdit match={{ params }} history={{ push: navigate }} />
}

export default ContactEditWrapper
