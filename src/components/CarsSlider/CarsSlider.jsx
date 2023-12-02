import React from 'react'
import './CarsSlider.scss'
import CarItem from '../CarItem/CarItem';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import useFetch from '../../hooks/useFetch';
export default function CarsSlider() {
  const { car: cars, loading, error } = useFetch(`/cars?populate=*`);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },

    ]
    }
  return (
    <div className="slider">
      <div className="container">
      {error ? (
                "Something went wrong!"
            ) : loading ? (
                "Loading"
            ) : (
        <div className="slide-content">
          <Slider {...settings}>
          {cars && cars.map((car) => (
                <div key={car.id}>
                  <CarItem
                    id={car.id}
                    brand={car?.attributes?.brands?.data[0]?.attributes?.name}
                    model={car.attributes.model}
                    image={car?.attributes?.image &&
                      process.env.REACT_APP_UPLOAD_URL + car.attributes.image.data.attributes.url}
                    fuel={car.attributes.fuel}
                    seats={car.attributes.seats}
                    transmission={car.attributes.transmission}
                    engine={car.attributes.engine}
                    consumption={car.attributes.consumption}
                    dispersal={car.attributes.dispersal}
                    pricePerDay={car.attributes.pricePerDay}
                    photos={car.attributes.photos}
                    />
                </div>
              ))}
          </Slider>
        </div>
            )}
      </div>
    </div>
    );

}