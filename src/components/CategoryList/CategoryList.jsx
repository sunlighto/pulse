import React, { useState } from 'react';
import CarItem from '../CarItem/CarItem';
import './CategoryList.scss';
import useFetch from '../../hooks/useFetch';

export default function CategoryList() {
  
  const { car: cars, loading, error } = useFetch(`/cars?populate=*`);
  const { car: categories } = useFetch(`/categories?populate=*`);

  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryClick = (categoryId) => {
    const selectedCategoryObject = categories.find(category => category.id.toString() === categoryId);
    const categoryName = selectedCategoryObject?.attributes?.name || 'all';
    setSelectedCategory(categoryName);
  };
  

  // Фільтруємо автомобілі за вибраною категорією
  const filteredCars = selectedCategory === 'all'
  ? cars
  : cars.filter(car => {
    console.log(car?.attributes)
      const carCategoryName= car?.attributes?.categories?.data[0]?.attributes.name;
      return carCategoryName === selectedCategory;
    });
  return (
    <div className='category'>
      <div className='category__list'>
        <button
          className={`category__list-item ${selectedCategory === 'all' ? 'selected' : ''}`}
          onClick={() => handleCategoryClick('all')}
        >
          Усі
        </button>
        {categories && categories.map((category) => (
          <div
            key={category.id}
            className={`category__list-item ${selectedCategory === category.id.toString() ? 'selected' : ''}`}
            onClick={() => handleCategoryClick(category.id.toString())}
          >
            {category.attributes && category.attributes.name}
          </div>
        ))}
      </div>
      {error ? (
      "Something went wrong!"
      ) : loading ? (
            "Loading"
        ) : (
      <div className='category__items'>
        {filteredCars && filteredCars.map((car) => (
          <div key={car.id}>
            <CarItem
              id={car.id}
              brand={car?.attributes?.brands?.data[0]?.attributes?.name}
              model={car.attributes?.model}
              image={car?.attributes?.image && process.env.REACT_APP_UPLOAD_URL + car.attributes.image.data.attributes.url}
              fuel={car.attributes?.fuel}
              seats={car.attributes?.seats}
              transmission={car.attributes?.transmission}
              engine={car.attributes?.engine}
              consumption={car.attributes?.consumption}
              dispersal={car.attributes?.dispersal}
              pricePerDay={car.attributes?.pricePerDay}
              photos={car.attributes?.photos}
            />
          </div>
        ))}
      </div>
      )}
    </div>
  );
}
