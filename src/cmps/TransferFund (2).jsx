import { Component } from 'react'
import UserMessage from './UserMessage';

export class TransferFund extends Component {
  state = {
    amount: 0,
    showMessage: false,
  }
  

  handleChange = ({ target }) => {
    const field = target.name
    const value = +target.value || ''
    this.setState(prevState => ({ ...prevState, [field]: value }))
  }

  onTransfer = async (ev) => {
    ev.preventDefault();
    const { contact, maxCoins, onTransferCoins } = this.props;
    const { amount } = this.state;
  
    if (maxCoins < amount || amount === 0) return;
    onTransferCoins(contact, amount);
    this.setState({ amount: 0, showMessage: true });
    setTimeout(() => this.setState({ showMessage: false }), 3000);
  }
  

  inputRefFunc = (elInput) => {
    elInput && elInput.focus()
  }

  render() {
    const { contact } = this.props
    const { amount } = this.state

    return (
      <article className="transfer-fund">
        <h1>Transfer coins to {contact.name}:</h1>
        <form className="flex align-center" onSubmit={this.onTransfer}>
          <p>Amount: </p>
          <input ref={this.inputRefFunc} type="number" value={amount} onChange={this.handleChange} name="amount" />
          <button className='btn'>Transfer</button>
        {this.state.showMessage && (
          <UserMessage message="Funds transferred successfully" />
        )}
        </form>
      </article>
    )
  }
}
