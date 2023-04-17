import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ReactComponent as MoneyBag } from '../assets/imgs/money-bag.svg'
import { ReactComponent as Bitcoin } from '../assets/imgs/bitcoin.svg'
import { loadUser } from '../store/actions/userActions'
import { bitcoinService } from '../services/bitcoin.service'
import { MovesList } from '../cmps/MovesList'

class Home extends Component {
  state = {
    btcValue: null,
    loading: true,
  }

  async componentDidMount() {
    await this.props.loadUser()
    if (this.props.user) {
      this.setCoins()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.user && prevProps.user !== this.props.user) {
      this.setCoins()
    }
  }

  onLogout() {
    console.log(this.props)
    this.props.history.push('/signup')
  }

  setCoins = async () => {
    const coins = await bitcoinService.getRate(this.props.user.coins)
    this.setState({ btcValue: coins, loading: false })
  }

  get movesList() {
    const { user } = this.props
    return user && user.moves ? user.moves.slice(0, 3) : []
  }

  render() {
    const { user } = this.props
    const { btcValue } = this.state

    return (
      <div className='home'>
        <div className='user-info-container'>

          <div className='user-info'>
            <h1>Hello, {user ? user.name : 'Loading...'}!</h1>
            <div className='value-container'>
              <h3 className='coins'>
                <MoneyBag className='money-bag' />
                <span>Coins: {user ? user.coins : 'Loading...'}</span>
              </h3>
              <h3 className='btc'>
                <Bitcoin className='bitcoin-icon' />
                BTC: {btcValue !== null ? btcValue : '(Getting Number...)'}
              </h3>
            </div>

          </div>
          <MovesList title={'Recent transfers:'} movesList={this.movesList} />
        </div>
        <button className='btn logout-button' onClick={() => this.onLogout()}>
          Logout
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userModule.loggedInUser,
  }
}

const mapDispatchToProps = {
  loadUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
