import { storageService } from "./storage.service"

const USER_KEY = 'loggedInUser'

function getUser() {
  let user = storageService.load(USER_KEY)
  if (user) return user
  else {
    user = {
      name: 'David Gilmour',
      coins: 100,
      moves: [
        {
          toId: 'c101',
          to: 'John Lennon',
          at: Date.now(),
          amount: 20
        },
        {
          toId: 'c102',
          to: 'Paul McCartney',
          at: Date.now(),
          amount: 30
        },
        {
          toId: 'c103',
          to: 'George Harrison',
          at: Date.now(),
          amount: 10
        }
      ]
    }
    user.coins -= (20 + 30 + 10); 
    storageService.save(USER_KEY, user)
    return user
  }
}


function signup(name) {
  const user = {
    name,
    coins: 100,
    moves: [],
  }
  storageService.save(USER_KEY, user)
}

function logout(){
  storageService.remove(USER_KEY)
}

function addMove(contact, amount) {
  const user = storageService.load(USER_KEY)
  const newMove = {
    toId: contact._id,
    to: contact.name,
    at: Date.now(),
    amount,
  }
  user.coins -= amount
  user.moves.unshift(newMove)
  storageService.save(USER_KEY, user)
  return user
}

export const userService = {
  getUser,
  signup,
  addMove,
  logout,
}
