import React from 'react'
import NumbersCarImg from '../../dist/image/numberscar.png'
import './NumbersCar.scss'
export default function NumbersCar() {
  return (
    <div className="numbersCar__wrap">
        <div className="container">
            <div className="numbersCar">
                <div className="numbersCar__info">
                    <img className='numbersCar__info-img' src={NumbersCarImg} alt="numbers of cars" />
                    <span className='numbersCar__info-text'>Автомобілів</span>
                </div>
                <div className="numbersCar__text">
                Каршерінг Pulse почав працювати у Тернополі з 2023 року. Спочатку автопарку оператора було 6 транспортних засобів, але згодом планується значно збільшити цю цифру. Наразі у нас 24 машини. При цьому представлено кілька моделей, зокрема Reno, BMW, AUDI, KIA.
                </div>
            </div>
        </div>
    </div>
  )
}
