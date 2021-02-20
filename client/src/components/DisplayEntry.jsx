import React from 'react';

const style = {
  'width': '400px',
  'border': '10px solid gray',
  'padding': '50px',
  'margin': '20px',
  'float': 'left',
  'overflow': 'hidden',
}

const DisplayEntry = (props) => {
  return (
    <div style={style}>
      {props.item.name}
      <br/>
      <img src={props.item.image_url} width="300" height="200"/>
      <br/>
      Address: {props.item.location.display_address[0] + ', ' + props.item.location.display_address[1]}
      <br/>
      Rating: {props.item.rating}
      <br/>
      Review count: {props.item.review_count}
      <br/>
      <a href={props.item.url} >Visit the business on Yelp!</a>
      <br/>
      Score: {props.item.score}
    </div>
  )
}

export default DisplayEntry;