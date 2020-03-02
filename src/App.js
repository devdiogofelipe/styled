import React, { Component } from 'react';
import { Title, TitleSmall } from "./styles";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Title fontSize={20}>
          Hello World
          <span>Texto menor</span>
        </Title>

        <TitleSmall></TitleSmall>
      </div>
    )
  }
}

export default App;
