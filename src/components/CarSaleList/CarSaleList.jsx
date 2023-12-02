import React, { useState } from 'react'
import { Cars } from '../../dist/data/CarsDataSale';
import CarItemSaleSale from '../CarItemSale/CarItemSale.jsx';
import './CarSaleList.scss'
export default function CarSaleList() {
    const [showMore, setShowMore] = useState(false);
  return (
    <div className='carSaleList__wrap'>
        <div className="container">
            <div className='carSaleList'>
                <div className="carSaleList__items">
                    {Cars.slice(0, showMore ? Cars.length : 3).map((car) => (
                    <CarItemSaleSale key={car.id} id={car.id} brand={car.brand} model={car.model}  icon={car.icon} fuel={car.fuel} seats={car.seats} transmission={car.transmission} 
                    engine={car.engine} consumption={car.consumption} dispersal={car.dispersal} pricePerDay={car.pricePerDay} image1={car.image1} image2={car.image2} image3={car.image3} image4={car.image4}/> 
                    ))}
                </div>
                <div className='carSaleList__showMore' onClick={() => setShowMore(!showMore)}>
                    {showMore ? 'Приховати \u2B9D' : 'Показати більше \u2B9F'}
                </div>
            </div>
        </div>
    </div>
  )
}
