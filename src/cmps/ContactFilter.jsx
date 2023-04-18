import React, { Component } from 'react'

export class ContactFilter extends Component {
  state = {
    filterBy: null,
  }

  componentDidMount() {
    this.setState({ filterBy: { ...this.props.filterBy } })
  }

  handleChange = ({ target }) => {
    const { name, value } = target
    this.setState(
      ({ filterBy }) => ({ filterBy: { ...filterBy, [name]: value } }),
      () => this.props.onChangeFilter(this.state.filterBy)
    )
  }

  render() {
    const { filterBy } = this.state
    if (!filterBy) return <div>Loading...</div>
    const fields = [
      { name: 'name', label: 'Name' },
      { name: 'email', label: 'Email' },
      { name: 'phone', label: 'Phone' },
    ]
    return (
      <form className='contact-filter'>
        <h3>Search Contacts</h3>
        {fields.map((field) => (
          <section key={field.name}>
            <input
              onChange={this.handleChange}
              value={filterBy[field.name]}
              type='search'
              name={field.name}
              id={field.name}
              placeholder={`Search by ${field.name}`}
            />
          </section>
        ))}
      </form>
    )
  }
}
