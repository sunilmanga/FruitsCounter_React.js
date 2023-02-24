import {Component} from 'react'

class FruitsCounter extends Component {
  state = {count: 0, c: 0}

  mang = () => {
    this.setState(prev => {
      const {count} = this.state
      return {count: prev.count + 1}
    })
  }

  ban = () => {
    this.setState(prev => {
      const {c} = this.state
      return {c: prev.c + 1}
    })
  }

  render() {
    const {c} = this.state

    const {count} = this.state
    return (
      <div>
        <div>
          <h1>
            Bob ate {count} mangoes {c} bananas
          </h1>
          <div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button onClick={this.mang}>Eat Mango</button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
              />
              <button onClick={this.ban}>Eat Banana</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
