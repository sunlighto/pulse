import React, { useState } from 'react';
import ArrowIcon from '../../dist/image/icons/arrow-down.svg'
import './QuestionsItem.scss'
export default function QuestionsItem( question ) {
    const [isActive, setIsActive] = useState(false);
  return (
    <div className="questions__item" onClick={() => setIsActive(!isActive)}>
      <div className={`questions__item-title ${isActive ? 'questions__item-title-active' : ' '}`}>{question.title}
      <div>{isActive ? <img className='questions__arrowUp' src={ArrowIcon} alt="iconDown" />  :<img className='questions__arrowDown' src={ArrowIcon} alt="iconUp" />}</div>
      </div>
    {isActive && <div className="questions__item-content">{question.content}</div>}
  </div>
  )
}
