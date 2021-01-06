import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import Sd from './Sd';

function Card(props){
  return (
    <>
  <div className="cards">
    <div className="card">
      <img src={props.imgsrc}
      alt="myPic"
        width="400" height="380" />
        <div className="divir" >{props.title}</div>
        <div className="divir"><h3>{props.sname}</h3></div>
        <a href={props.review} target="_blank">
        <div className="divi"><button>READ REVIEWS NOW !</button></div>
        </a>

        <a href={props.link} target="_blank">
        <div className="divi" ><button>WATCH NOW !</button></div>
        </a>
        
    </div>

  </div></>
  );
}

function netcd(d) {
 return (
 <Card
 key={d.id}
  imgsrc={d.imgsrc}
  title={d.title}
  sname={d.sname}
  review={d.review}
  link={d.link}

  />
);

}


ReactDOM.render(
  <>
  
<div className="heading_style">BEST IMDB RATED MOVIES & BEST NETFLIX SERIES</div>
{Sd.map(netcd)}
  </>
  ,
  document.getElementById('root')
);

