import React from 'react'
import "./Newscard.css"

function NewsCard(props) {
  const toDateString=(date)=>{
    let str=date.slice(0,8);
    return str.slice(6,8)+"/"+str.slice(4,6)+"/"+str.slice(0,4);
  }

  const titleFunc=(title)=>{
     let arr=title.split(" ");
     return arr.slice(0,10).join(" ");
  }

  return (
    <div className='newscard'>
        <div className='imgpart'>
        <img src={props.imgurl?props.imgurl:"https://www.benzinga.com/next-assets/images/schema-image-default.png"} alt="" />
        </div>
        <div className='content-part'>
           <h5 className='title'>{titleFunc(props.title)}</h5>
           <p>
            {props.description.slice(0,200)}
            <a href={props.readmore} rel="noreferrer" target='_blank'className='readmore'> Read more</a>
           </p>
           <div>
            <div className='date'>Published on: {toDateString(props.date)}</div>
            <div className='authors'>Author- {props.authors}</div>
           </div>
        </div>
    </div>
  )
}

export default NewsCard