// Write your code here

import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscriber: false}

  onSubscribe = () => {
    this.setState(prevState => ({
      isSubscriber: !prevState.isSubscriber,
    }))
  }

  render() {
    const {isSubscriber} = this.state
    console.log(isSubscriber)

    return (
      <div className="app-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button
          type="button"
          className="subscribe-button"
          onClick={this.onSubscribe}
        >
          {isSubscriber ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>
    )
  }
}

export default Welcome
