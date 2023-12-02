import React from 'react'
import './CarSaleQuestions.scss'
import { questionsDataSale } from '../../dist/data/questionsDataSale.js'
import QuestionsItem from '../QuestionsItem/QuestionsItem'
export default function CarSaleQuestions() {
  return (
        <div className='questions__wrap'>
            <div className="container">
                <div className="questions">
                    <h3 className="questions__title carSaleQuestions__title">Часті запитання</h3>
                    <p className='carSaleQuestions__subtitle'>Зібрали всі популярні запитання та відповіді на них в одному місці. Але якщо у вас залишилися питання - зверніться до служби підтримки, оператор із задоволенням відповість на запитання.</p>
                    <div className="questions__items">
                        {questionsDataSale.map(({ title, content, id }) => (
                            <QuestionsItem id={id} title={title} content={content} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
  )
}
