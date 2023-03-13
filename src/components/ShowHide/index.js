// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    firstName: false,

    lastName: false,
  }

  onFirstNameBtn = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onLastNameBtn = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="bg-container">
        <h1>Show/Hide</h1>
        <div className="card-container">
          <div>
            <button type="button" onClick={this.onFirstNameBtn}>
              Show/Hide Firstname
            </button>
            {firstName && <p className="name">Joe</p>}
          </div>

          <div>
            <button type="button" onClick={this.onLastNameBtn}>
              Show/Hide Lastname
            </button>
            {lastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
