import React from 'react';
import Search from './Search';
import Display from './Display';

import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: [],
    }

    this.getList = this.getList.bind(this);
  }

  getList(searchedTerm) {
    const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=parking lot&location=${searchedTerm}`;
    const API_KEY = 'mi5qSSqdhmrNXBjLq5MBMwuqcS0q8aE4u52fwqrG8CkrBjjksgdV8ZblHdh4ThtDqQVFapfOwrCqadcTH4sJIMhQgEcWpc0bK_9ms_rJ1H-xMT1Amp4tmH_PhAg3X3Yx';

    axios.get(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      }
    })
      .then(res => {
        const list = res.data.businesses;
        list.map(item => {
          item.score = Number(((item.review_count * item.rating) / (item.review_count + 1)).toFixed(2));
        })
        return list;
      })
      .then(list => {
        list.sort((a, b) => a.score - b.score);
        this.setState({display: list});
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>AirGarage Coding Challenge</h1>
        <Search search={this.getList} />
        <Display list={this.state.display} />
      </div>
    )
  }
}

export default App;
