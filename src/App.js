import React from 'react'

const URL = 'http://api.open-notify.org/astros.json'

export default class App extends React.Component {
  state = {
    people: []
  }

  componentDidMount() {
    fetch(URL)
      .then(r => r.json())
      .then(data => {
        this.setState({
          people: data.people
        })
      })
  }

  render() {
    const peopleList = this.state.people.map(p => <li key={p.name}>{`${p.name} - ${p.craft}`}</li>)
    return <ul>{peopleList}</ul>
  }
}