import React from 'react'
import './ConditionsRental.scss'
export default function ConditionsRental() {
  return (
    <div className='conditions__wrap'>
        <div className="container">
            <div className="conditions">
                <h3 className="conditions__title">Умови прокату</h3>
              <div className="conditions__items">
              <div className="conditions__item">
                    <h4 className="conditions__name">Для отримання послуги прокату автомобіля потрібно мати наступні документи і відповідати таким критеріям:</h4>
                    <ul className="conditions__info">
                        <li className='conditions__info-item'>- Паспорт, і вік особи, яка орендує автомобіль, повинен бути не менше 21 року.</li>
                        <li className='conditions__info-item'>- Водійські права зі стажем водіння не менше 2 років.</li>
                        <li className='conditions__info-item'>- Банківська картка, іменна, на ім'я особи, яка буде керувати автомобілем.</li>
                    </ul>
                </div>
                <div className="conditions__item">
                    <h4 className="conditions__name">Для оренди вантажного автомобіля потрібно:</h4>
                    <ul className="conditions__info">
                        <li className='conditions__info-item'>- Вік від 25 років.</li>
                        <li className='conditions__info-item'>- Стаж водіння повинен бути 3 роки і більше.</li>
                        <li className='conditions__info-item'>- Вам потрібно мати посвідчення водія з відкритою категорією С.</li>
                    </ul>
                </div>
                <div className="conditions__item">
                    <h4 className="conditions__name">Оплата:</h4>
                    <div className="conditions__info">
                    Оплата за послуги прокату автомобіля здійснюється лише за допомогою банківських карт, і приймаються лише картки типу Visa і MasterCard. Картки типу American Express, Visa Electron і Maestro не приймаються.
                    При підписанні договору прокату автомобіля повністю оплачується вартість прокату автомобіля, і також проводиться блокування депозиту на картці.
                    </div>
                </div>
                <div className="conditions__item">
                    <h4 className="conditions__name">Тариф включає:</h4>
                    <div className="conditions__info">
                        <ul>
                            <li className='conditions__info-item'>Основне страхування;</li>
                            <li className='conditions__info-item'>Круглодобова підтримка 24/7.</li>
                        </ul>
                        <p className='conditions__info-text'>Основне страхування передбачає фінансову відповідальність клієнта у випадку ДТП і має обмежену франшизу. "Франшиза" - це сума відповідальності орендаря, в рамках якої він несе відповідальність перед компанією у разі пошкодження або крадіжки орендованого автомобіля.</p>

                        <p className='conditions__info-text'>Стандартний одноденний тариф дозволяє користуватися автомобілем протягом 24 годин. Якщо цей термін перевищується на більше ніж 59 хвилин, нараховується наступний стандартний одноденний тариф за кожен наступний день оренди автомобіля в повному обсязі. Мінімальний термін оренди автомобіля - 24 години.</p>
                        <p className='conditions__info-text'>Якщо автомобіль повертається раніше встановленого терміну, застосовується перерахунок відповідно до діючих тарифів в повному обсязі.</p>
                        <p className='conditions__info-text'>Ми рекомендуємо повертати автомобіль у чистому стані, щоб забезпечити зручність фіксації стану автомобіля і виявлення пошкоджень.</p>
                    </div>
                </div>
                <div className="conditions__item">
                    <h4 className="conditions__name">Паливо:</h4>
                    <div className="conditions__info">
                    Компанія <span className='conditions__info-decor'>надає вам автомобіль</span> з повним баком пального, і ви повинні повернути його з повним баком пального.
                    </div>
                </div>
                <div className="conditions__item">
                    <h4 className="conditions__name">Пробіг:</h4>
                    <div className="conditions__info">
                    Компанія віддає Вам в оренду автомобіль з лімітованим пробігом  
                    200 км / Доба. За перепробіг береться плата в межах 0,2-1 EUR за 1 КМ за понадліміт. 
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
