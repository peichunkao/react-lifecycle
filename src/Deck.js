import React, { Component, createContext } from "react";
import axios from "axios";
import Card from "./Card"
import './Deck.css'

const API_BASE_URL = "https://deckofcardsapi.com/api/deck/";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: null,
      drawn: []
    };
    this.getCard = this.getCard.bind(this);
  }

  async componentDidMount() {
    let deckUrl = `${API_BASE_URL}/new/shuffle/`;
    let response = await axios.get(deckUrl);
    let deckId = response.data.deck_id;
    this.setState({ deck: deckId });
  }

  async getCard() {
    let id = this.state.deck;
    let cardUrl = `${API_BASE_URL}/${id}/draw/?count=1`;
    try {
      let response = await axios.get(cardUrl);
      if (!response.data.success) {
        throw new Error("No card remaining!");
      } else {
        let card = response.data.cards[0];
        this.setState(st => ({
          drawn: [
            ...st.drawn,
            {
              id: card.code,
              image: card.image,
              name: `${card.suit} ${card.value}`
            }
          ]
        }));
        // console.log(this.state);
      }
    } catch (err) {
      alert(err);
    }
  }

  render() {
    const cards = this.state.drawn.map(item =>
      <Card key={item.id} name={item.name} image={item.image}/>
    )

    return (
      <div className="Deck">
        <h1 className="Deck-title">♦ Card Dealer ♦</h1>
        <h2 className='Deck-title subtitle'>
          ♦ A little demo made with React ♦
        </h2>
        <button className='Deck-btn' onClick={this.getCard}>Get Card!</button>
        <div className="Deck-cardarea">{cards}</div>
      </div>
    );
  }
}

export default Deck;
