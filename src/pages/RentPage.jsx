import React, { useEffect } from 'react'
import Rent from './../components/Rent/Rent';

export default function RentPage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Перемістити сторінку вверх при виклику компонента
  }, []);
  return (
    <>
    <Rent />
    </>
  )
}
