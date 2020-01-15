import React, { Component, createContext } from "react";
import axios from "axios";
import './JokeList.css'

const API_URL = "https://icanhazdadjoke.com/";

class JokeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokiList: []
    };
    //this.getCard = this.getCard.bind(this);
  }

  async componentDidMount() {
    let response = await axios.get(API_URL, {headers: {Accept: "application/json"}});
    console.log(response.data.joke)
    // let deckId = response.data.deck_id;
    // this.setState({ deck: deckId });
  }

  async getJoke() {
  }

  render() {
    // const cards = this.state.drawn.map(item =>
    //   <Card key={item.id} name={item.name} image={item.image}/>
    // )

    return (
      <div className="">
      </div>
    );
  }
}

export default JokeList;
