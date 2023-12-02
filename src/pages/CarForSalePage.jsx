import React, { useEffect } from 'react'
import CarSale from '../components/CarSale/CarSale';
import CarSaleList from '../components/CarSaleList/CarSaleList';
import CarSaleService from '../components/CarSaleService/CarSaleService';
import CarSaleQuestions from '../components/CarSaleQuestions/CarSaleQuestions';

export default function CarForSale() {
  useEffect(() => {
    window.scrollTo(0, 0); // Перемістити сторінку вверх при виклику компонента
  }, []);
  return (
    <div>
      <CarSale />
      <CarSaleList />
      <CarSaleService />
      <CarSaleQuestions />
    </div>
  )
}
