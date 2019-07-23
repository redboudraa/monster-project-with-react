import React, { Component } from "react";
import Card from "./../card/Card.component";
import "./List.component.css";
export default class List extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      monsterfilter: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  render() {
    const { monsterfilter, monsters } = this.state;
    const filtredmonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(monsterfilter.toLowerCase())
    );

    return (
      <div className="box">
        <input
          type="search"
          placeholder="enter the monster name"
          onChange={e => this.setState({ monsterfilter: e.target.value })}
          className="input"
        />
        <div className="card-list">
          {filtredmonsters.map(element => {
            return (
              <Card
                key={element.id}
                id={element.id}
                name={element.name}
                email={element.email}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
