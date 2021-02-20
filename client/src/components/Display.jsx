import React from 'react';
import DisplayEntry from './DisplayEntry';

const Display = (props) => {
  return (
    <ul>
      {props.list.map(item => {
        return <DisplayEntry item={item} key={item.id}/>
      })}
    </ul>
  )
};

export default Display;
