import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './Components/ProductOverview/Overview.jsx';
import QnaIndex from './Components/QuestionsAndAnswers/QnaIndex.jsx';
import RInC from '/client/src/Components/RelatedItemsAndComparison/RInCIndex.jsx';

var App = () => {



  return(
    <div>
      <Overview />
      <br/>
      <RInC/>
      <br/>
      <QnaIndex/>
      <br/>
      RatingsAndReviews
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))