import React from 'react'
import BannerCar from '../../dist/image/banner__car.png'
import './Banner.scss'
export default function Banner() {
  return (
    <div className="banner__wrap">
        <div className="container">
            <div className="banner">
                <div className="benner__info">
                    <h2 className="banner__title">КАРШЕРИНГ В ТЕРНОПОЛІ</h2>
                    <p className="banner__text">Похвилинна оренда легкових автомобілів, електромобілів та мікроавтобусів</p>
                    <button className="btn banner__btn">Арендувати</button>
                </div>
                <div className="banner__image-wrap">
                    <img className="banner__image" src={BannerCar} alt="Car" />
                </div>
            </div>
        </div>
    </div>
  )
}
