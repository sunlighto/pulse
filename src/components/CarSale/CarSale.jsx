import React from 'react'
import './CarSale.scss'
import item1 from '../../dist/image/CarSale/1.png'
import item2 from '../../dist/image/CarSale/2.png'
import item3 from '../../dist/image/CarSale/3.png'
import item4 from '../../dist/image/CarSale/4.png'
import item5 from '../../dist/image/CarSale/5.png'
import item6 from '../../dist/image/CarSale/6.png'
export default function CarSale() {
  return (
    <div className='carSale__wrap'>
        <div className="container">
            <div className="carSale">
                <div className="carSale__firstScreen">
                    <h3 className="carSale__firstScreen-title">Орендований викуп</h3>
                    <p className="carSale__firstScreen-text">
                    Отримайте свій власний автомобіль за невеликий щомісячний внесок та користуйтесь машиною вже сьогодні
                    </p>
                    <div className="btn carSale__firstScreen-btn">Залишити заявку</div>
                </div>
                <div className="carSale__info">
                    <h4 className="carSale__info-title">
                    Що таке авто за підпискою?
                    </h4>
                    <p className="carSale__info-text">Уявіть, що вам потрібний автомобіль тут і зараз, і немає часу відкладати гроші у банку. Або вам не потрібний автомобіль на постійній основі, а лише на кілька місяців. А може, ви хочете взяти машину для свого бізнесу, але серйозні витрати на покупку авто зараз не входять у ваші плани?</p>
                    <p className="carSale__info-text">Усі ці потреби закриває послуга авто за підпискою. Підписка на авто дозволяє швидко та легко отримати автомобіль за цілком посильну щомісячну плату. Крім того, після закінчення підписки ви можете викупити автомобіль за дуже привабливою ціною, оскільки щомісячні внески вже покривають частину вартості машини. Як результат - у вас є машина прямо Тепер, а щомісячні внески невимушено наближають вашу покупку автомобіля.</p>
                </div>
                <div className="carSale__subCost">
                    <h4 className="carSale__subCost-title">У вартість підписки включено:</h4>
                    <div className="carSale__items">
                        <div className="carSale__item">
                            <div className="carSale__item-img">
                                <img src={item1} alt="subIcon" />
                            </div>
                            <h3 className="carSale__item-title">СТРАХУВАННЯ АВТО</h3>
                        </div>
                        <div className="carSale__item">
                            <div className="carSale__item-img">
                                <img src={item2} alt="subIcon" />
                            </div>
                            <h3 className="carSale__item-title">ТЕХНІЧНЕ ОБСЛУГОВУВАННЯ</h3>
                        </div>
                        <div className="carSale__item">
                            <div className="carSale__item-img">
                                <img src={item3} alt="subIcon" />
                            </div>
                            <h3 className="carSale__item-title">КОМПЛЕКТ ШИН НА СЕЗОН</h3>
                        </div>
                        <div className="carSale__item">
                            <div className="carSale__item-img">
                                <img src={item4} alt="subIcon" />
                            </div>
                            <h3 className="carSale__item-title">ДОПОМОГА НА ДОРОЗІ</h3>
                        </div>
                        <div className="carSale__item">
                            <div className="carSale__item-img">
                                <img src={item5} alt="subIcon" />
                            </div>
                            <h3 className="carSale__item-title">ДРАЙВЕР</h3>
                        </div>
                        <div className="carSale__item">
                            <div className="carSale__item-img">
                                <img src={item6} alt="subIcon" />
                            </div>
                            <h3 className="carSale__item-title">ПІДМІННИЙ АВТОМОБІЛЬ</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
