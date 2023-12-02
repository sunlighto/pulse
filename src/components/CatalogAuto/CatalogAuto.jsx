import React from 'react'
import './CatalogAuto.scss'
import CategoryList from '../CategoryList/CategoryList';
import catalogBanner from '../../dist/image/banner__car.png'
export default function CatalogAuto() {

  return (
    <div className='catalog__wrap'>
      <div className="container">
        <div className="catalog__banner">
          <h2 className="catalog__banner-title">Прокат авто по Тернополі</h2>
          <div className="catalog__image-wrap">
            <img className='catalog__image' src={catalogBanner} alt="car icon" />
          </div>
        </div>
      </div>
        <div className="catalog">
            <h3 className="catalog__title">
                Каталог автомобілів
            </h3>
            <div className='catalog__category'>
                <CategoryList />
            </div>
        </div>
    </div>
  )
}
