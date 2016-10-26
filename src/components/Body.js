// src/components/Body.js
/*
  external imports
*/

import React, { Component } from 'react';
import Preview from './Preview';

/*
  internal imports
*/

// ...

/*
  component definition
*/

class Body extends Component {
  render() {
    return (
      <div>
        <div className="moon" />
        <div className="stars" />
        <div className="intro">
          <h4>--Hello</h4>
          <h1>I'm Alessio Pragliola</h1>
          <h2>a web developer</h2>
          <h3>Here's a selection of some recent work</h3>
        </div>
        <div className="plantWrapper">
          <Preview wrap="firstItem" inside="work workOne" imgUrl="./_images/recipes.png" imgClass="recipe-img" title="Recipe Box" desc="This project is part of the React curriculum at FreeCodeCamp, users can create new recipes and edit or delete existing ones. It uses local storage to keep changes in the client's cache." pen="http://codepen.io/TheSeTh/full/YGywjg/" />
          <Preview wrap="secondItem" inside="work workTwo" imgUrl="./_images/calc.png" imgClass="calc-img" title="Javascript Calculator" desc="Simple online calculator made with Javascript/Jquery, users can utilize elementary operands such as plus, minus and more advanced ones like logarithms and squaring." pen="http://codepen.io/TheSeTh/full/LNyjyw/" />
          <Preview wrap="thirdItem" inside="work workThree" imgUrl="./_images/simon.png" imgClass="simon-img" title="Simon Game" desc="Simon created by Ralph Baer made with Javascript/Jquery, the game has four different colored buttons where each plays a unique note and users have to repeat an increasingly long string of tones." pen="http://codepen.io/TheSeTh/full/qZLaxV/" />
          <Preview wrap="fourthItem" inside="work workFour" imgUrl="./_images/tictac.png" imgClass="tictac-img" title="Tic Tac Toe" desc="The famous paper and pencil game implemented in Javascript/Jquery." pen="http://codepen.io/TheSeTh/full/WwzKjR/" />
        </div>
        <div className="roots">
        </div>        
      </div>
    );
  }
};

export default Body;