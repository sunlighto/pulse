import React from 'react'
import './Tarrifs.scss'
import { questionsData } from '../../dist/data/questionsData';
import { Link } from 'react-router-dom';
import TarrifsItem from '../TarrifsItem/TarrifsItem';
import useFetch from '../../hooks/useFetch';
export default function Tarrifs() {
  const { car: cars, loading, error } = useFetch(`/cars?populate=*`);

  return (
    <div className='tarrifs__wrap'>
        <div className="container">
            <div className="tarrifs">
                <div className="tarrifs__title-wrap">
                    <h2 className="tarrifs__title">Тарифи</h2>
                    <p className="tarrifs__text">
                    Розділ "Тарифи" у нашому каршерінговому сервісі включає в себе різноманітні варіанти для зручного і вигідного користування нашими автомобілями.  Ми розуміємо, що кожен клієнт має свої унікальні потреби та розклад, тому пропонуємо три типи тарифів.
                    </p>
                </div>
                <div className="tarrifs__slider">
                {error ? (
                "Something went wrong!"
                ) : loading ? (
                      "Loading"
                  ) : (
                    <div>
                  {cars && <TarrifsItem id={cars.id} car={cars}></TarrifsItem>}
                </div>
              )}
                </div>
                <div className="tarrifs__info">
                  <div className="tarrifs__wraning">
                    <h3 className="tarrifs__warning-title">
                      Примітки
                    </h3>
                    <div className="tarrifs__warning-items">
                      <div className='tarrifs__warning-item'>* Безкоштовне бронювання доступне протягом перших 20 хвилин, після чого вартість складає 0,99 грн за кожну додаткову хвилину. Ви можете скористатися безкоштовним бронюванням до трьох разів протягом 24 годин.</div>
                      <div className="tarrifs__warning-item">
                        <h4 className="tarrifs__item-title">Вартість прокату включає:</h4>
                        <ul>
                          <li>Оренду автомобіля.</li>
                          <li>Паливо.</li>
                          <li>Страховку КАСКО і ОСЦПВ (Обов'язкове страхування цивільної відповідальності власників транспортних засобів).</li>
                          <li>Гуму, відповідну сезону, на автомобілі.</li>
                          <li>Безкоштовну муніципальну парковку в межах Тернополя.</li>
                          <li>Податки і збори.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="tarrifs__question">
                    <h3 className="tarrifs__question-title">Часті запитання</h3>
                    <ul className="tarrifs__question-items">
                      {questionsData.slice(0, 4).map((item) => (
                        <Link key={item.id}>{item.title}</Link>
                      ))}
                    </ul>
                    <span className="tarrifs__question-text">Залишились запитання?</span>
                    <Link className="tarrifs__question-link">Тоді звяжись із нами</Link>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
