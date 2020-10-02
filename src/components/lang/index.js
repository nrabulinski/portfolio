import React from 'react';
import './lang.css';
import Progress from '../progress';

function Lang(props) {
  const { start, end } = props.colors ?? { start: '#b3e5fc', end: '#bbdefb' };
  return (
    <div className="lang">
      <p className="name">{props.name}</p>
      {/* <progress max="10" value={props.level}></progress> */}
      <Progress value={props.level} start={start} end={end} />
    </div>
  );
}

export default Lang;