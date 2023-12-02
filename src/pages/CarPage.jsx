import React, { useEffect } from 'react'
import SingleCar from './../components/SingleCar/SingleCar';
import CarsSlider from './../components/CarsSlider/CarsSlider';
import Map from '../components/Map/Map';

export default function CarPage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Перемістити сторінку вверх при виклику компонента
  }, []);
  return (
    <>
      <SingleCar />
      <CarsSlider />
      <Map />
    </>
  )
}
