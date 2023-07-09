export const contactService = {
  getContacts,
  getContactById,
  deleteContact,
  saveContact,
  getEmptyContact,
}

const contacts = [
  {
    _id: '5a56640269f443a5d64b32ca',
    name: 'Ochoa Hyde',
    email: 'ochoahyde@renovize.com',
    phone: '+1 (968) 593-3824',
    keyword: 'blond',
    avatarUrl: '',
  },
  {
    _id: '5a5664025f6ae9aa24a99fde',
    name: 'Hallie Mclean',
    email: 'halliemclean@renovize.com',
    phone: '+1 (948) 464-2888',
    keyword: 'melanin',
    avatarUrl: '',
  },
  {
    _id: '5a56640252d6acddd183d319',
    name: 'Parsons Norris',
    email: 'parsonsnorris@renovize.com',
    phone: '+1 (958) 502-3495',
    keyword: 'businessman',
    avatarUrl: '',
  },
  {
    _id: '5a566402ed1cf349f0b47b4d',
    name: 'Rachel Lowe',
    email: 'rachellowe@renovize.com',
    phone: '+1 (911) 475-2312',
    keyword: 'profile',
    avatarUrl: '',
  },
  {
    _id: '5a566402abce24c6bfe4699d',
    name: 'Dominique Soto',
    email: 'dominiquesoto@renovize.com',
    phone: '+1 (807) 551-3258',
    keyword: 'brunette',
    avatarUrl: '',
  },
  {
    _id: '5a566402a6499c1d4da9220a',
    name: 'Shana Pope',
    email: 'shanapope@renovize.com',
    phone: '+1 (970) 527-3082',
    keyword: 'sophisticated',
    avatarUrl: '',
  },
  {
    _id: '5a566402f90ae30e97f990db',
    name: 'Faulkner Flores',
    email: 'faulknerflores@renovize.com',
    phone: '+1 (952) 501-2678',
    keyword: 'bearded',
    avatarUrl: '',
  },
  {
    _id: '5a5664027bae84ef280ffbdf',
    name: 'Holder Bean',
    email: 'holderbean@renovize.com',
    phone: '+1 (989) 503-2663',
    keyword: 'human',
    avatarUrl: '',
  },
  {
    _id: '5a566402e3b846c5f6aec652',
    name: 'Rosanne Shelton',
    email: 'rosanneshelton@renovize.com',
    phone: '+1 (968) 454-3851',
    keyword: 'girl',
    avatarUrl: '',
  },
  {
    _id: '5a56640272c7dcdf59c3d411',
    name: 'Pamela Nolan',
    email: 'pamelanolan@renovize.com',
    phone: '+1 (986) 545-2166',
    keyword: 'woman',
    avatarUrl: '',
  },
  {
    _id: '5a5664029a8dd82a6178b15f',
    name: 'Roy Cantu',
    email: 'roycantu@renovize.com',
    phone: '+1 (929) 571-2295',
    keyword: 'male',
    avatarUrl: '',
  },
  {
    _id: '5a5664028c096d08eeb13a8a',
    name: 'Ollie Christian',
    email: 'olliechristian@renovize.com',
    phone: '+1 (977) 419-3550',
    keyword: 'teenager',
    avatarUrl: '',
  },
  {
    _id: '5a5664026c53582bb9ebe9d1',
    name: 'Nguyen Walls',
    email: 'nguyenwalls@renovize.com',
    phone: '+1 (963) 471-3181',
    keyword: 'philipina',
    avatarUrl: '',
  },
  {
    _id: '5a56640298ab77236845b82b',

    name: 'Glenna Santana',
    email: 'glennasantana@renovize.com',
    phone: '+1 (860) 467-2376',
    keyword: 'beautiful',
    avatarUrl: '',
  },
  {
    _id: '5a56640208fba3e8ecb97305',
    name: 'Malone Clark',
    email: 'maloneclark@renovize.com',
    phone: '+1 (818) 565-2557',
    keyword: 'gangster',
    avatarUrl: '',
  },
  {
    _id: '5a566402abb3146207bc4ec5',
    name: 'Floyd Rutledge',
    email: 'floydrutledge@renovize.com',
    phone: '+1 (807) 597-3629',
    keyword: 'guy',
    avatarUrl: '',
  },
  {
    _id: '5a56640298500fead8cb1ee5',
    name: 'Grace James',
    email: 'gracejames@renovize.com',
    phone: '+1 (959) 525-2529',
    keyword: 'beauty',
    avatarUrl: '',
  },
  {
    _id: '5a56640243427b8f8445231e',
    name: 'Tanner Gates',
    email: 'tannergates@renovize.com',
    phone: '+1 (978) 591-2291',
    keyword: 'beard',
    avatarUrl: '',
  },
  {
    _id: '5a5664025c3abdad6f5e098c',
    name: 'Lilly Conner',
    email: 'lillyconner@renovize.com',
    phone: '+1 (842) 587-3812',
    keyword: 'hair',
    avatarUrl: '',
  },
]

function getContactAvatarUrl(keyword) {
  return `https://source.unsplash.com/300x300/?portrait&${keyword}`
}

contacts.forEach((contact) => {
  const avatarUrl = getContactAvatarUrl(contact.keyword)
  contact.avatarUrl = avatarUrl
})
function sort(arr) {
  return arr.sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
  )
}

function getContacts(filterBy = null) {
  return new Promise((resolve, reject) => {
    var contactsToReturn = contacts
    if (filterBy) {
      contactsToReturn = filter(filterBy)
    }
    resolve(sort(contactsToReturn))
  })
}

function getContactById(id) {
  return new Promise((resolve, reject) => {
    const contact = contacts.find((contact) => contact._id === id)
    contact ? resolve(contact) : reject(`Contact id ${id} not found!`)
  })
}

function deleteContact(id) {
  return new Promise((resolve, reject) => {
    const index = contacts.findIndex((contact) => contact._id === id)
    if (index !== -1) {
      contacts.splice(index, 1)
    }

    resolve(contacts)
  })
}

function _updateContact(contact) {
  return new Promise((resolve, reject) => {
    const index = contacts.findIndex((c) => contact._id === c._id)
    if (index !== -1) {
      contacts[index] = contact
    }
    resolve(contact)
  })
}

function _addContact(contact) {
  return new Promise((resolve, reject) => {
    contact._id = _makeId()
    contact.avatarUrl = `https://source.unsplash.com/300x300/?portrait&person`
    contacts.push(contact)
    resolve(contact)
  })
}

function saveContact(contact) {
  return contact._id ? _updateContact(contact) : _addContact(contact)
}

function getEmptyContact() {
  return {
    name: '',
    email: '',
    phone: '',
  }
}

function filter(filterBy) {
  const keys = Object.keys(filterBy)
  if (keys.every((field) => !filterBy[field])) return contacts
  return contacts.filter((contact) => {
    return keys.some((field) => {
      const filterValue = filterBy[field]
      const fieldValue = contact[field]
      if (!filterValue || !fieldValue) return false
      const regex = new RegExp(filterValue.toString().toLocaleLowerCase(), 'i')
      return regex.test(fieldValue.toString())
    })
  })
}

function _makeId(length = 10) {
  var txt = ''
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}