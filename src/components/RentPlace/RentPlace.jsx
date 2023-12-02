import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Cars } from '../../dist/data/CarsData';
import './RentPlace.scss';
export default function RentPlace({ onPeriodChange }) {
  const now = new Date();
  const defaultDate = `${now.getFullYear()}-${(now.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
  const defaultTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

  const [startDate, setStartDate] = useState(defaultDate);
  const [startTime, setStartTime] = useState(defaultTime);
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');
  const [period, setPeriod] = useState('');

  const getNounEnding = (number, one, two, five) => {
    number = Math.abs(number);
    if (number % 10 === 1 && number % 100 !== 11) {
      return one;
    }
    if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
      return two;
    }
    return five;
  };

  useEffect(() => {
    // Calculate the period whenever dates (startDate or endDate) change
    if (startDate && endDate) {
      const startDateTime = new Date(`${startDate}T${startTime || '00:00'}`);
      const endDateTime = new Date(`${endDate}T${endTime || '00:00'}`);
      const diffInMilliseconds = endDateTime - startDateTime;

      const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));

      let newPeriod = '';

      if (days > 0) {
        newPeriod += `${days} ${getNounEnding(days, 'день', 'дні', 'днів')} `;
      }

      if (hours > 0) {
        newPeriod += `${hours} ${getNounEnding(hours, 'година', 'години', 'годин')} `;
      }

      if (minutes > 0) {
        newPeriod += `${minutes} ${getNounEnding(minutes, 'хвилина', 'хвилини', 'хвилин')}`;
      }

      setPeriod(newPeriod.trim());
      onPeriodChange(newPeriod);
    } else {
      setPeriod('');
      onPeriodChange('');
    }
  }, [startDate, endDate, startTime, endTime, onPeriodChange]);

  const { id } = useParams();

  const car = Cars.find((car) => car.id === parseInt(id));

  if (!car) {
    return <div>Товар не знайдено</div>;
  }

  const clearEndTime = () => {
    setEndTime('');
  };

  const clearStartTime = () => {
    setStartTime('');
  };

  return (
    <form className="rent__place-form" action="">
      <div className="rent__place-item">
        <h3 className="rent__place-title">Подача авто</h3>
        <select className="input" name="delivery" id="1">
          <option value="value1">м.Тернопіль вул. Руська, 12</option>
          <option value="value2">м.Тернопіль вул. Мазепи, 26</option>
          <option value="value3">м.Тернопіль вул. Л.Українки, 6</option>
        </select>
        <div className="rent__place-wrap">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="input rent__place-input"
          />
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="input rent__place-input"
          />
          <svg className='rent__place-img' onClick={clearStartTime}  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" d="M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z" fillRule="#fff"></path>
          </svg>        
      </div>
      </div>
      <div className="rent__place-item">
        <h3 className="rent__place-title">Повернення авто</h3>
        <select className="input" name="return" id="1">
          <option value="value1">м.Тернопіль вул. Руська, 12</option>
          <option value="value2">м.Тернопіль вул. Мазепи, 26</option>
          <option value="value3">м.Тернопіль вул. Л.Українки, 6</option>
        </select>
        <div className="rent__place-wrap">
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="input rent__place-input"
          />
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="input rent__place-input"
          />
          <svg className='rent__place-img' onClick={clearEndTime}  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" d="M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z" fillRule="#fff"></path>
          </svg>
        </div>
      </div>
      <div className="rent__place-period">
        {period && <p>Період: {period}</p>}
      </div>
    </form>
  );
}
