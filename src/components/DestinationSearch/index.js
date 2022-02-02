// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchinput: ''}

  searchlist = event => {
    this.setState({
      searchinput: event.target.value,
    })
  }

  render() {
    const {searchinput} = this.state
    const {destinationsList} = this.props
    // console.log(destinationsList)
    const searchresult = destinationsList.filter(list =>
      list.name.toLowerCase().includes(searchinput.toLowerCase()),
    )
    return (
      <div className="container">
        <h1 className="heading">Destination Search</h1>
        <div className="inputcontainer">
          <input
            type="search"
            className="searchbox"
            placeholder="search"
            value={searchinput}
            onChange={this.searchlist}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="searchimg"
          />
        </div>
        <ul className="placesContainer">
          {searchresult.map(eachplace => (
            <DestinationItem details={eachplace} key={eachplace.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
