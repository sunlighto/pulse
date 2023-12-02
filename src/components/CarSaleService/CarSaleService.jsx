import React from 'react'
import './CarSaleService.scss'
import Srvice1 from '../../dist/image/CarSale/1.png'
import Srvice2 from '../../dist/image/CarSale/2.png'
import Srvice3 from '../../dist/image/CarSale/3.png'
import Srvice4 from '../../dist/image/CarSale/4.png'
export default function CarSaleService() {
  return (
    <div className='carSaleService__wrap'>
        <div className="container">
            <div className="carSaleService">
                <h4 className="carSaleService__title">Чи підійде вам ця послуга?</h4>
                <p className="carSaleService__subtitle">Іноді клієнти сумніваються, чи підійде для них такий вигляд. послуги, тому ми вирішили допомогти і показати, кому найбільше підійде послуга авто за підпискою :</p>
                <div className="carSaleService__items">
                    <div className="carSaleService__item">
                        <img src={Srvice1} alt="" className="carSaleService__image" />
                        <div className="carSaleService__info">
                            <h5 className="carSaleService__info-title">Кому важливий комфорт та мобільність</h5>
                            <p className="carSaleService__info-text">Якщо ви багато їздите по роботі або домашнім клопіт, зручність пересування стане запорукою продуктивного дня</p>
                        </div>
                    </div>
                    <div className="carSaleService__item">
                        <img src={Srvice2}  alt="" className="carSaleService__image" />
                        <div className="carSaleService__info">
                            <h5 className="carSaleService__info-title">Підприємці, які шукають надійний транспорт</h5>
                            <p className="carSaleService__info-text">Відмінна альтернатива лізингу або кредиту, більш зрозумілим та швидким оформленням.</p>
                        </div>
                    </div>
                    <div className="carSaleService__item">
                        <img src={Srvice3} alt="" className="carSaleService__image" />
                        <div className="carSaleService__info">
                            <h5 className="carSaleService__info-title">Хто ще не визначився із покупкою авто</h5>
                            <p className="carSaleService__info-text">Не можете підібрати модель для покупки або взагалі не впевнені, що вам потрібна машина, тоді можна взяти авто за підпискою на кілька місяців для тестування.</p>
                        </div>
                    </div>
                    <div className="carSaleService__item">
                        <img src={Srvice4}  alt="" className="carSaleService__image" />
                        <div className="carSaleService__info">
                            <h5 className="carSaleService__info-title">Кому необхідний транспорт тимчасово, на сезон чи для виконання довгострокових завдань</h5>
                            <p className="carSaleService__info-text">Потрібна машина на сезон відпусток, для поїздок на дачу або просто на кілька місяців, і брати машину в кредит заради цього не має сенсу.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
