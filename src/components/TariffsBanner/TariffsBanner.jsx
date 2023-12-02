import React from 'react'
import './TariffsBanner.scss'
export default function Tariffs() {
  return (
    <div className="tariffs__wrap">
        <div className="container">
            <div className="tariffs">
                <h2 className="tariffs__title">ТАРИФИ</h2>
                <div className="tariffs__items">
                    <div className="tariffs__item">
                        <h3 className="tariffs__item-title">Хвилинна оренда</h3>
                        <p className="tariffs__item-text">від 10 грн./хв</p>
                        <button className="btn tariffs__item-btn">Арендувати</button>
                    </div>
                    <div className="tariffs__item">
                        <h3 className="tariffs__item-title">Годинна оренда</h3>
                        <p className="tariffs__item-text">від 400грн./хв</p>
                        <button className="btn tariffs__item-btn">Арендувати</button>
                    </div>
                    <div className="tariffs__item">
                        <h3 className="tariffs__item-title">Денна оренда</h3>
                        <p className="tariffs__item-text">від 2000 грн./хв</p>
                        <button className="btn tariffs__item-btn">Арендувати</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
