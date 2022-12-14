// Write your code here
import {Component} from 'react'
import './index.css'

const HEADS_IMAGE_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAILS_IMAGE_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossImageDisplay: HEADS_IMAGE_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let TossImage = ''
    let updateHeadsCount = headsCount
    let UpdateTailsCount = tailsCount

    if (tossResult === 0) {
      TossImage = HEADS_IMAGE_URL
      updateHeadsCount += 1
    } else {
      TossImage = TAILS_IMAGE_URL
      UpdateTailsCount += 1
    }

    this.setState({
      tossImageDisplay: TossImage,
      headsCount: updateHeadsCount,
      tailsCount: UpdateTailsCount,
    })
  }

  render() {
    const {headsCount, tailsCount, tossImageDisplay} = this.state
    const totalCount = tailsCount + headsCount

    return (
      <div className="main-container">
        <div className="toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img
            src={tossImageDisplay}
            className="toss-image"
            alt="toss result"
          />
          <button
            className="toss-button"
            type="button"
            onClick={this.onTossCoin}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
