import React, { useState } from 'react';
import './CarItem.scss'
import styles1 from './slider1.module.scss'; 
import FuelIcon from "../../dist/image/icons/CarItem/Fuel.svg"
import SeatsIcon from "../../dist/image/icons/CarItem/seats.svg"
import TransmissionsIcon from "../../dist/image/icons/CarItem/transmision.svg"
import EngineIcon from "../../dist/image/icons/CarItem/engine.svg"
import ConsumptionIcon from "../../dist/image/icons/CarItem/consumption.svg"
import DispersalIcon from "../../dist/image/icons/CarItem/dispersal.svg"
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Slider from 'react-slick';


export default function CarItem(car) {
  Modal.setAppElement('#root');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }
  const settings = {
    customPaging: function(i) {
      return (
        <div className={styles1.sliderSmall}>
        {car.photos?.data?.[i] && (
                <img
                  className={styles1.sliderSmallImage}
                  src={process.env.REACT_APP_UPLOAD_URL + car.photos.data[i].attributes.url}
                  alt={`${i + 1}`}
                />
              )}
        </div>
      );
    },
    infinite: true,
    dotsClass: "slick-dots slick-thumb",
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1100,
            settings: {

                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 780,
            settings: {

                initialSlide: 1,
            },
        },
    ],
};
const preventDefault = (e) => {
  e.preventDefault(); // Відміна дії за замовчуванням
  // Тут ви можете виконати свої власні дії, які не пов'язані з переходом на нову сторінку
};
    return (
    <Link to={`/car/${car.id}`} className='carItem__wrap'>
        <div className='carItem'>
        <h1 className="carItem__title">{car.brand} {car.model}</h1>
        <img className="carItem__image" src={car.image} alt='CarIcon'></img>
        <div className="carItem__info">
            <div className="carItem__info-item">
                <img className='carItem__info-img' src={FuelIcon} alt="FuelIcon" />
                <p className='carItem__info-text'>{car.fuel[0]}</p>
            </div>
            <div className="carItem__info-item">
                <img className='carItem__info-img' src={SeatsIcon} alt="SeatsIcon" />
                <p className='carItem__info-text'>{car.seats}</p>
            </div>
            <div className="carItem__info-item">
                <img className='carItem__info-img' src={TransmissionsIcon} alt="TransmissionsIcon" />
                <p className='carItem__info-text'>{car.transmission[0]}</p>
            </div>
            <div className="carItem__info-item">
                <img className='carItem__info-img' src={EngineIcon} alt="EngineIcon" />
                <p className='carItem__info-text'>{car.engine}</p>
            </div>
            <div className="carItem__info-item">
                <img className='carItem__info-img' src={ConsumptionIcon} alt="ConsumptionIcon" />
                <p className='carItem__info-text'>{car.consumption}</p>
            </div>
            <div className="carItem__info-item">
                <img className='carItem__info-img' src={DispersalIcon} alt="DispersalIcon" />
                <p className='carItem__info-text'>{car.dispersal}</p>
            </div>
        </div>
        <p className="carItem__price">{car.pricePerDay} ₴  за 1 добу</p>
        <div onClick={preventDefault}>
        <div className="carItem__buttons">
            <button to="" className="secondBtn carItem__btn-photo" onClick={openModal}>Живі фото</button>

            <Modal
                isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                contentLabel="Модальне вікно"
                className="react-modal-content" 
            >
                  <div className={styles1.sliderWrap}>
              <Slider {...settings}>
                {car.photos?.data?.map((photo, index) => (
                  <div key={index} className={styles1.slide}>
                    <img
                      className={styles1.sliderImage}
                      src={process.env.REACT_APP_UPLOAD_URL + photo.attributes.url}
                      alt={`CarImage${index + 1}`}
                    />
                  </div>
                ))}
              </Slider>
              </div>
              <svg className='modal__btn' onClick={closeModal}  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z" fillRule="#fff"></path>
              </svg> 
            </Modal>
          
            <Link to={`/rent/${car.id}`} className="btn carItem__btn-reserve">Забронювати</Link>
        </div>
        </div>
    </div>
    </Link>
  )
}
