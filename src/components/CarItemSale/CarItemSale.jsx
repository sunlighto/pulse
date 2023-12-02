import React, { useState } from 'react'
import './CarItemSale.scss'
import styles1 from './slider1.module.scss'; 
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Slider from 'react-slick';

export default function CarItemSale(car) {
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
          <img className={styles1.sliderSmallImage} src={car[`image${i + 1}`]}
            alt={`${i + 1}`}/>
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
    <Link to={`/car/${car.id}`} className='сarItemSale__wrap'>
    <div className='carItem сarItemSale'>
    <h1 className="carItem__title">{car.brand} {car.model}</h1>
    <img className="carItem__image" src={car.icon} alt='CarIcon'></img>
    <div className="carItem__info сarItemSale__info">
        <div className="сarItemSale__info-item">
        <svg className='сarItemSale__info-image' width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.582 10.0354L16.1782 15.66H9.73703L3.33315 10.0354C3.04296 9.78019 2.57276 9.78019 2.2818 10.0354C1.992 10.29 1.992 10.703 2.2818 10.9582L8.91613 16.7849V21.775L2.2818 27.6014C1.992 27.8566 1.992 28.2689 2.2818 28.5242C2.42767 28.6523 2.61777 28.7153 2.80825 28.7153C2.99679 28.7153 3.18805 28.6523 3.33276 28.5242L9.46391 23.1388C9.52637 23.1537 9.59077 23.1643 9.65866 23.1643H16.3446C16.3869 23.1643 16.4276 23.1592 16.468 23.1534L22.582 28.5242C22.7267 28.6523 22.9168 28.7153 23.1066 28.7153C23.297 28.7153 23.4867 28.6523 23.6318 28.5242C23.9224 28.2689 23.9224 27.8563 23.6318 27.6014L17.0875 21.8534V16.7072L23.6318 10.9585C23.9224 10.7033 23.9224 10.2906 23.6318 10.0358C23.3428 9.78019 22.8715 9.78019 22.582 10.0354ZM10.402 16.9652H15.6028V21.8289C15.5982 21.8387 15.5962 21.8493 15.5924 21.8592H10.402V16.9652Z" fill="black"/>
            <path d="M25.2582 0H10.7885C10.4665 0 10.1794 0.18333 10.0813 0.453214L8.04491 6.03797L7.96926 6.05637L7.12896 3.1633C7.07853 2.99257 6.95206 2.84673 6.77903 2.75847C6.60484 2.67158 6.39768 2.64909 6.20526 2.69782L1.11536 3.96886C0.728569 4.06495 0.498903 4.41526 0.598994 4.75772L1.44007 7.65352L0.543906 7.87263C0.222295 7.95169 0 8.20794 0 8.50134V30.0157C0 30.3766 0.33286 30.6686 0.742923 30.6686H25.2579C25.6687 30.6686 26 30.3762 26 30.0157V0.651878C26.0008 0.292374 25.6691 0 25.2582 0ZM5.87782 4.13651L6.51523 6.32898L2.85531 7.2429L2.21752 5.04976L5.87782 4.13651ZM24.5153 29.3635H1.48662V8.99681L8.82935 7.20099C9.07026 7.14238 9.26075 6.98052 9.33678 6.77163L11.3308 1.30512H24.5149L24.5153 29.3635Z" fill="black"/>
            <path d="M10.9012 6.90524C11.0401 7.07596 11.2647 7.17785 11.5045 7.17785H22.6592C23.0689 7.17785 23.401 6.88616 23.401 6.52529V2.61027C23.401 2.24941 23.0689 1.95703 22.6592 1.95703H13.0132C12.6947 1.95703 12.4123 2.13559 12.3091 2.4007L10.8011 6.31572C10.7239 6.51473 10.7616 6.73452 10.9012 6.90524ZM13.5463 3.26283H21.9151V5.87239H12.5407L13.5463 3.26283Z" fill="black"/>
        </svg>
            <p className='сarItemSale__info-text'>{car.fuel}</p>
        </div>
        <div className="сarItemSale__info-item">
            <svg className='сarItemSale__info-image' width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.3125 18.5714V26H29L21.75 0H16.3125V5.57142H12.6875V0H7.25L0 26H12.6875V18.5714H16.3125ZM12.6875 9.28571H16.3125V14.8571H12.6875V9.28571Z" fill="black"/>
            </svg>
            <p className='сarItemSale__info-text'>4 090 км пробіг</p>
        </div>
        <div className="сarItemSale__info-item">
            <svg className='сarItemSale__info-image' width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M14.5 2.72727C7.94789 2.72727 2.63637 8.22195 2.63637 15C2.63637 21.778 7.94789 27.2727 14.5 27.2727C21.0521 27.2727 26.3637 21.778 26.3637 15C26.3637 8.22195 21.0521 2.72727 14.5 2.72727ZM0 15C0 6.71572 6.49187 0 14.5 0C22.5081 0 29 6.71572 29 15C29 23.2843 22.5081 30 14.5 30C6.49187 30 0 23.2843 0 15Z" fill="black"/>
                <path d="M17.0864 16.06L14.9069 9.5506C14.8423 9.35706 14.7745 9.13375 14.7034 8.88066C14.6324 8.62014 14.5646 8.34472 14.5 8.05442C14.3644 8.65735 14.2255 9.1598 14.0835 9.56177L11.9039 16.06H17.0864ZM21 22H19.5469C19.379 22 19.2434 21.9516 19.1401 21.8549C19.0368 21.758 18.9593 21.6352 18.9076 21.4863L17.6095 17.6232H11.3808L10.0827 21.4863C10.044 21.6203 9.96969 21.7395 9.85991 21.8438C9.75012 21.9479 9.61129 22 9.44337 22H8L13.5507 6H15.4493L21 22Z" fill="black"/>
            </svg>
            <p className='сarItemSale__info-text'>{car.transmission}</p>
        </div>
        <div className="сarItemSale__info-item">
            <svg className='сarItemSale__info-image' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.8405 13.0817H27.2978V17.61H25.2408V15.1572L19.7555 4.71697H13.3275V2.32703H17.0557V0H8.05648V2.32703H11.7847V4.71697H6.728L3.81398 10.2516H2.22838V13.8365H0.942776V9.24527H0V20.6918H0.942776V16.1006H2.22838V19.6855H3.81398L9.25638 30H25.2408V25.4717H27.2978V30H28.8405C29.4833 30 29.9975 29.2453 29.9975 28.3017V14.7799C30.0403 13.8994 29.526 13.0817 28.8405 13.0817Z" fill="#000"/>
            </svg>
            <p className='сarItemSale__info-text'>{car.engine}</p>
        </div>
        <div className="сarItemSale__info-item">
            <svg className='сarItemSale__info-image' width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.4904 3.82681L30 3.46804L28.7261 2.09279L28.2803 2.45154C27.5159 3.08937 26.9746 3.56771 26.656 3.88659C26.3376 4.20548 26.0084 4.62404 25.6689 5.14227C25.3291 5.6605 25.0743 6.21856 24.9044 6.81649C24.4794 8.25154 24.3096 10.1052 24.3949 12.3773C24.4374 14.3306 24.6709 15.8054 25.0956 16.802L25.2866 17.2804C26.1783 19.3533 26.6241 21.187 26.6241 22.7814C26.6241 25.6914 25.3716 27.1463 22.8663 27.1463C20.6157 27.1463 19.4056 25.7513 19.2357 22.9609C19.1931 22.1635 19.4267 20.7086 19.9363 18.5958C20.4036 16.7621 20.6796 15.3471 20.7643 14.3505C20.9764 12.6763 20.743 11.5003 20.0637 10.8227C19.4267 10.145 18.3014 9.80619 16.6879 9.80619H16.3057V1.31546C16.3057 0.956701 16.1783 0.647747 15.9236 0.388659C15.6689 0.129573 15.3503 0 14.9681 0H1.52866C1.1465 0 0.796179 0.129573 0.477707 0.388659C0.159236 0.647747 0 0.956701 0 1.31546V28.2227H16.3057V11.6598H16.6879C17.707 11.6598 18.344 11.7794 18.5987 12.0186C18.896 12.3374 18.9809 13.0351 18.8536 14.1113C18.7261 15.0681 18.4501 16.4234 18.0254 18.1773C17.4733 20.4495 17.2397 22.0838 17.3249 23.0804C17.4099 24.9539 17.9406 26.409 18.9171 27.4453C19.8939 28.4818 21.2101 29 22.8663 29C24.6497 29 26.0403 28.4519 27.0383 27.3557C28.0361 26.2595 28.535 24.7347 28.535 22.7814C28.535 20.9477 28.0467 18.8749 27.07 16.5629L26.879 16.0846C26.5817 15.367 26.4117 14.2309 26.3694 12.6763C27.2187 12.6364 27.7919 12.6165 28.0891 12.6165C28.811 12.6165 29.2569 12.2378 29.4267 11.4804C29.4693 11.2412 29.4799 11.0718 29.4586 10.9722C29.4374 10.8725 29.4161 10.6533 29.3949 10.3144C29.3737 9.97558 29.363 9.68659 29.363 9.44742V9.14846C29.363 7.87288 29.2676 6.94607 29.0764 6.36804C28.8853 5.79001 28.5776 5.32165 28.1529 4.96289C28.2803 4.8433 28.5031 4.65393 28.8217 4.39485C29.1401 4.13576 29.363 3.94639 29.4904 3.82681ZM14.3949 10.4639H1.97453V2.45154H14.3949V10.4639ZM26.242 10.8227C26.2846 9.5471 26.4543 8.37114 26.7516 7.29485C26.7516 7.21478 26.7729 7.07529 26.8153 6.87629C26.8577 6.67664 26.9001 6.53714 26.9427 6.45773C27.2824 6.73679 27.4523 7.6337 27.4523 9.14846V9.44742C27.4523 9.60689 27.4734 9.84607 27.5159 10.165C27.5584 10.4838 27.5796 10.7031 27.5796 10.8227H26.242Z" fill="black"/>
            </svg>
            <p className='сarItemSale__info-text'>{car.consumption}л на 100 км</p>
        </div>
        <div className="сarItemSale__info-item">
            <svg className='сarItemSale__info-image сarItemSale__image-dispersal' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect width="30" height="30" fill="url(#pattern0)"/>
                <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_899_1244" transform="scale(0.02)"/>
                </pattern>
                <image id="image0_899_1244" width="50" height="50" xlinkHref="data:image/png;base64,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"/>
                </defs>
            </svg>
            <p className='сarItemSale__info-text сarItemSale__info-dispersal'>{car.dispersal} сек</p>
        </div>
    </div>
    <p className="сarItemSale__price">{car.pricePerDay} грн/ день.</p>
    <div onClick={preventDefault}>
    <div className="carItem__buttons сarItemSale__buttons">
        <button to="" className="secondBtn сarItemSale__btn-photo" onClick={openModal}>Живі фото</button>
        <Modal
            isOpen={modalIsOpen}
              onRequestClose={closeModal}
            contentLabel="Модальне вікно"
            className="react-modal-content" 
        >
              <div className={styles1.sliderWrap}>
          <Slider {...settings}>
            <div className={styles1.slide}>
              <img className={styles1.sliderImage} src={car.image1} alt='CarImage'></img>
            </div>
            <div className={styles1.slide}>
              <img className={styles1.sliderImage} src={car.image2} alt='CarImage'></img>
            </div>
            <div className={styles1.slide}>
              <img className={styles1.sliderImage} src={car.image3} alt='CarImage'></img>
            </div>
            <div className={styles1.slide}>
              <img className={styles1.sliderImage} src={car.image4} alt='CarImage'></img>
            </div>
          </Slider>
          </div>
          <svg className='modal__btn' onClick={closeModal}  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z" fill="#fff"></path>
          </svg> 
        </Modal>
      
        <Link to={`/rent/${car.id}`} className="btn carItem__btn-reserve сarItemSale__btn-reserv">Забронювати</Link>
    </div>
    </div>
</div>
</Link>
  )
}
