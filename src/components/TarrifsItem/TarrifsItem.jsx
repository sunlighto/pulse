import React, { useState, useRef } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './TarrifsItem.scss'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

export default function TarrifsItem({car}) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const settings = {
        infinite: true,
        lazyLoad: true,
        draggable: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false, 
        arrows: false,
      };
      const sliderRef = useRef(null);

      const nextSlide = () => {
        sliderRef.current.slickNext();
        setCurrentSlide((prevSlide) => (prevSlide === car.length - 1 ? 0 : prevSlide + 1));
      };
    
      const prevSlide = () => {
        sliderRef.current.slickPrev();
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? car.length - 1 : prevSlide - 1));
      };
  return (
    <div className='tarrifsItem'>
        <h3 className="tarrifsItem__title">
        {car[currentSlide]?.attributes?.brand} {car[currentSlide]?.attributes?.model} {car[currentSlide]?.attributes?.year}
        </h3>
        <div className="tarrifsItem__slider">
            <div className='slick-prev' onClick={prevSlide}></div>
            <Slider ref={sliderRef} {...settings}>
                <img className='slider__img' 
                src={ car[currentSlide]?.attributes?.image &&
                process.env.REACT_APP_UPLOAD_URL + car[currentSlide].attributes.image.data.attributes.url} alt='CarImage'></img>
            </Slider>
            <div className='slick-next' onClick={nextSlide}></div>
        </div>

        <div className="tarrifsItem__content">
            <div className="tarrifsItem__item">
                <div className="tarrifsItem__content-title">Тариф Хвилинний</div>
                <span className="tarrifsItem__price">{car[currentSlide]?.attributes.pricePerMin}₴/хв</span>
                <p className="tarrifsItem__text">
                    Цей тариф ідеально підходить для коротких поїздок та візитів. Ви платите лише за фактичний час користування автомобілем, що дозволяє максимально ефективно розпоряджатись часом та коштами.
                </p>
                <ul className="tarrifsItem__info">
                    <div className="tarrifsItem__info-item">
                        <div className="tarrifsItem__item-text">Включений пробіг</div>
                        <div className="tarrifsItem__item-numbers">0 км</div>
                    </div>
                    <div className="tarrifsItem__info-item">
                        <div className="tarrifsItem__item-text">Бронювання</div>
                        <div className="tarrifsItem__item-numbers">0₴/20хв</div>
                    </div>
                    <div className="tarrifsItem__info-item">
                        <div className="tarrifsItem__item-text">Очікування</div>
                        <div className="tarrifsItem__item-numbers">1 ₴</div>
                    </div>
                </ul>
                <Link to={`/rent/${car[currentSlide]?.id}`} className="btn tarrifsItem__item-btn">Забронювати</Link>
            </div>
            <div className="tarrifsItem__item">
                <div className="tarrifsItem__content-title">Тариф Годинний</div>
                <span className="tarrifsItem__price">{car[currentSlide]?.attributes.pricePerHour}₴/год</span>
                <p className="tarrifsItem__text">
                    Для тих, хто планує триваліші поїздки або потребує автомобіль на певний період, тариф  цей тариф стає найкращим вибором. Ви можете брати автомобіль на годину або більше за фіксовану ціну, що дозволяє гнучко планувати свій маршрут.
                </p>
                <ul className="tarrifsItem__info">
                    <div className="tarrifsItem__info-item">
                        <div className="tarrifsItem__item-text">Включений пробіг</div>
                        <div className="tarrifsItem__item-numbers">10 км</div>
                    </div>
                    <div className="tarrifsItem__info-item">
                        <div className="tarrifsItem__item-text">Бронювання</div>
                        <div className="tarrifsItem__item-numbers">0₴/20хв</div>
                    </div>
                    <div className="tarrifsItem__info-item">
                        <div className="tarrifsItem__item-text">Очікування</div>
                        <div className="tarrifsItem__item-numbers">0.5 ₴</div>
                    </div>
                </ul>
                <Link to={`/rent/${car[currentSlide]?.id}`} className="btn tarrifsItem__item-btn">Забронювати</Link>
            </div>
            <div className="tarrifsItem__item">
                <div className="tarrifsItem__content-title">Тариф Денний</div>
                <span className="tarrifsItem__price">{car[currentSlide]?.attributes.pricePerDay}₴/доба</span>
                <p className="tarrifsItem__text">
                    Плануєте весь день подорожувати містом або здійснити виїзд за місто? Тариф надає можливість вам користуватись автомобілем протягом цілого дня за вигідною ціною. 
                </p>
                <ul className="tarrifsItem__info">
                    <div className="tarrifsItem__info-item">
                        <div className="tarrifsItem__item-text">Включений пробіг</div>
                        <div className="tarrifsItem__item-numbers">100 км</div>
                    </div>
                    <div className="tarrifsItem__info-item">
                        <div className="tarrifsItem__item-text">Бронювання</div>
                        <div className="tarrifsItem__item-numbers">0₴/20хв</div>
                    </div>
                    <div className="tarrifsItem__info-item">
                        <div className="tarrifsItem__item-text">Очікування</div>
                        <div className="tarrifsItem__item-numbers">0 ₴</div>
                    </div>
                </ul>
                <Link to={`/rent/${car[currentSlide]?.id}`} className="btn tarrifsItem__item-btn">Забронювати</Link>
            </div>
        </div>
    </div>
  )
}
