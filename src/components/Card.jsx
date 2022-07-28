import React from 'react'
import Classes from '../styles/Card.module.css'

const Card = (props) => {
  return (
    <div className={Classes.item}>
        <div className={Classes.icon}>
          <img src={props.path} alt="icon"/>
        </div>
        
        <div className={Classes.content}>
          <div className={Classes.title}>
            <span className={Classes.total}>{props.total}</span>
            <span className={Classes.today}> {props.today > 0 ? `(+${props.today})` : ""}</span>
          </div>
          <div className={Classes.text}>{props.name}</div>
        </div>
    </div>
  )
}

export default Card