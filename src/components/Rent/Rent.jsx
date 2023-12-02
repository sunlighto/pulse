    import React, { useEffect, useState } from 'react'
    import './Rent.scss'
    import Yes from "../../dist/image/icons/yes__icon.svg"
    import { loadStripe } from '@stripe/stripe-js';
    import { insuranceData } from '../../dist/data/insuranceData'
    import RentPlace from '../RentPlace/RentPlace';
    import checkY from '../../dist/image/icons/checkY.svg'
  import useFetch from '../../hooks/useFetch';
  import { useParams } from 'react-router-dom'
import { makeRequest } from '../../makeRequest'
export default function Rent() {
      const { id } = useParams();
        const [insuranceType, setInsuranceType] = useState('Без страхування');
        const { car, loading, error } = useFetch(`/cars/${id}?populate=*`);
        const { car: options } = useFetch(`/additional-options`);
        const { car: insurance } = useFetch(`/insurances`);
        const [items, setItems] = useState([]);
        const [period, setPeriod] = useState('');
        const [selectedRate, setSelectedRate] = useState("");

        useEffect(() => {
          if (options) {
            setItems(options);
          }
        }, [options]);
        
        const stripePromise = loadStripe("pk_test_51ODADcD2Zvpf140V1fug2BQKgTZ4LEUQemzHu5TSTiUbEzj45vWNX7R8UObLUidoqXZE3gIhvAUKjyuHWc5G3qW0002YeXJH7s");
        const handlePayment = async () => {
          try {
            const stripe = await stripePromise;
         
            // Отримайте значення з calculateTotalPrice
            const totalPrice = calculateTotalPrice();
            const res = await makeRequest.post('/orders', {
              cars: [car], 
              totalPrice: totalPrice,
              brand: [car.attributes?.brands?.data[0]?.attributes?.name],
            });
            await stripe.redirectToCheckout({
              sessionId: res.data.stripeSession.id,
            });
          } catch (error) {
            console.error('Error during payment:', error);
          }
        };
      
        
        
        // Функція для обробки зміни типу страхування
        const handleInsuranceChange = (e) => {
            const f = e.target.value
            setInsuranceType(f);
            };
        // Функція для отримання ціни страхування з файлу insuranceData
        const handleItemSelection = (index) => {
          const updatedItems = [...items];
            updatedItems[index].attributes.selected = !updatedItems[index].attributes.selected;
       
          setItems(updatedItems);
        };

        const getInsurancePrice = () => {
            const selectedInsurance = insuranceData.find(
            (item) => item.name === insuranceType
            );
            return selectedInsurance ? selectedInsurance.price : 0;
        };
        const periodArray = period.split(' ');
        let totalCarRentPrice = 0;
      
        for (let i = 0; i < periodArray.length; i += 2) {
          const value = parseFloat(periodArray[i]);
          const unit = periodArray[i + 1];
      
          if (!isNaN(value) && unit) {
            switch (unit) {
              case 'день':
              case 'дні':
              case 'днів':
                totalCarRentPrice += value * car.attributes?.pricePerDay;
                break;
              case 'година':
              case 'години':
              case 'годин':
                totalCarRentPrice += value * car.attributes?.pricePerHour;
                break;
              case 'хвилина':
              case 'хвилини':
              case 'хвилин':
                totalCarRentPrice += value * car.attributes?.pricePerMin;
                break;
              default:
                break;
            }
          }
        }
      let discount;
        if (totalCarRentPrice > 0) {
            if (totalCarRentPrice >= 40 * car?.attributes?.pricePerDay) {
              // Застосуйте 40% знижки, якщо оренда триває більше 40 днів
              totalCarRentPrice *= 0.6; // 40% знижки
              discount = '40%';
            } else if (totalCarRentPrice >= 30 * car?.attributes?.pricePerDay) {
              // Застосуйте 30% знижки, якщо оренда триває більше 30 днів
              totalCarRentPrice *= 0.7; // 30% знижки
              discount = '30%';
            } else if (totalCarRentPrice >= 20 * car?.attributes?.pricePerDay) {
              // Застосуйте 20% знижки, якщо оренда триває більше 20 днів
              totalCarRentPrice *= 0.8; // 20% знижки
              discount = '20%';
            } else if (totalCarRentPrice >= 10 * car?.attributes?.pricePerDay) {
              // Застосуйте 10% знижки, якщо оренда триває більше 7 днів
              totalCarRentPrice *= 0.9; // 10% знижки
              discount = '10%';
            } else if (totalCarRentPrice >= 5 * car?.attributes?.pricePerDay) {
              // Застосуйте 5% знижки, якщо оренда триває більше 3 днів
              totalCarRentPrice *= 0.95; // 5% знижки
              discount = '5%';
            } else if (totalCarRentPrice >= 2 * car?.attributes?.pricePerDay) {
              // Застосуйте 2% знижки, якщо оренда триває більше 2 днів
              totalCarRentPrice *= 0.98; // 2% знижки
              discount = '2%';
            }
          }

         const carRent =  Math.round(totalCarRentPrice);

    // Функція для підрахунку загальної ціни вибраних об'єктів
    const calculateTotalPrice = () => {
      // Отримайте ціну страхування
      const insurancePrice = getInsurancePrice();
    
      // Отримайте ціну обраних додаткових опцій
      const selectedOptionsPrice = Array.isArray(items)
        ? items.reduce((total, item) => {
            if (item?.attributes?.selected) {
              const itemPrice = parseFloat(item?.attributes?.price);
              if (!isNaN(itemPrice)) {
                return total + itemPrice;
              }
            }
    
            return total;
          }, 0)
        : 0;
    
      // Розрахунок загальної ціни, додаючи страхування та додаткові послуги
      let totalPrice = insurancePrice + selectedOptionsPrice;
    
      // Додайте ціну оренди автомобіля
      totalPrice += totalCarRentPrice;
    
      return Math.round(totalPrice);
    };
    

    const handlePeriodChange = (period) => {
        setPeriod(period);
    }
    return (
        <div className="rent__wrap">
            <div className="container">
                {error ? (
                    "Something went wrong!"
                ) : loading ? (
                    "Loading"
                ) : (
                <div className="rent">
                    <h2 className="rent__title">{car?.attributes?.brands?.data[0]?.attributes?.name} {car?.attributes?.model} {car?.attributes?.year}</h2>
                    <img className="rent__img"
                      src={car?.attributes?.image &&
                        process.env.REACT_APP_UPLOAD_URL + car.attributes.image.data.attributes.url} 
                      alt='Car__icon'></img>
                    <div className="rent__card">
                    <RentPlace onPeriodChange={handlePeriodChange} /> {/* Оновили ім'я пропса */}
                        <div className="rent__options">
                        <h3 className="rent__options-title">Додаткові опції</h3>
                        <div className="rent__options-items">
                            {options?.map((optionsitem, id) => (
                                <div className='rent__options-item' key={id}>
                                    <label className='custom-checkbox'>
                                        <input className="hidden-checkbox" type="checkbox"
                                            checked={optionsitem.attributes?.selected || false}
                                            onChange={() => handleItemSelection(id)}/>
                                        <div className="checkbox">
                                                <img src={checkY} alt="checkbox" />        
                                        </div>
                                        <span> {optionsitem.attributes?.text} {optionsitem.attributes?.price} ₴</span>
                                    </label>
                                </div>
                                ))}
                            </div>
                        </div>
                        <form className="rent__insurance-form" action="">
                            <h3 className="rent__insurance-title">Страхування</h3>
                            {insurance?.map((insuranceItem) => (
                                <label className='rent__insurance-item' key={insuranceItem.id}>
                                    <div className="rent__insurance-wrap custom-radio">
                                    <input className='rent__insurance-input'
                                    type="radio"
                                    value={insuranceItem.attributes?.name}
                                    checked={insuranceType === insuranceItem.attributes?.name}
                                    onChange={handleInsuranceChange}
                                    />
                                <span className="radiomark"></span>
                                <p className="rent__input-title">{insuranceItem.attributes?.name}</p>
                                </div>
                                <div className="rent__insurance-price">{insuranceItem.attributes?.price}</div>
                                </label>
                                ))}
                        </form>
                        <div className="rent__content">
                            <form className="rent__info-form" action="">
                            <h3 className="rent__content-title">Особисті данні</h3>
                                <label>
                                <h4 className="rent__info-title">Оберіть тариф</h4>
                                <select
                                    className="input"
                                    value={selectedRate}
                                    onChange={(e) => setSelectedRate(parseFloat(e.target.value))}
                                    >
                                    <option></option>
                                    <option value={car?.attributes?.pricePerMin}>Тариф Хвилинний {car?.attributes?.pricePerMin} ₴</option>
                                    <option value={car?.attributes?.pricePerHour}>Тариф Годинний {car?.attributes?.pricePerHour} ₴</option>
                                    <option value={car?.attributes?.pricePerDay}>Тариф Денний {car?.attributes?.pricePerDay} ₴</option>
                                </select>
                                </label>
                                <label htmlFor="">
                                    <h4 className="rent__info-title">Коментар</h4>
                                    <textarea rows='8' autoComplete='off' autoCorrect='off' className='input' type="text" />
                                </label>
                            </form>
                            <div className="rent__price">
                                <h3 className="rent__price-title">Вартість оренди</h3>
                                <div className="rent__price-total">
                                    <div className="rent__price-item">
                                        <img className='rent__price-img' src={Yes} alt="icon" />
                                        <p className="rent__price-text">
                                          Автомобіль: {car?.attributes?.price && carRent }  грн {period && <span>(Оренда на: {period})</span>}
                                         </p>
                                    </div>
                                    {(selectedRate ? isNaN : "") && (<div className="rent__price-item">
                                        <img className='rent__price-img' src={Yes} alt="icon" />
                                        <p className="rent__price-text">
                                        Ви обрали тариф: {selectedRate} ₴ 
                                        </p>
                                    </div>)}
                        
                                    {( insuranceData.map((item, id) => 
                                        ((insuranceType === 'Без страхування') === false)&&(insuranceType === item.name) &&(
                                        <div className="rent__price-item" key={id}>
                                            <img className='rent__price-img' src={Yes} alt="icon" />
                                            <p className="rent__price-text">
                                                {item.name} {item.price} ₴
                                            </p>
                                        </div>
                                        )))}
                                    {options?.map((optionsitem, id) => (
                                        optionsitem.attributes?.selected && (
                                        <div className="rent__price-item" key={id}>
                                            <img className='rent__price-img' src={Yes} alt="icon" />
                                            <p className="rent__price-text">
                                                {optionsitem.attributes?.text} {optionsitem.attributes?.price} ₴
                                            </p>
                                        </div>
                                        )
                                        ))}
                                </div>
                                <div className="rent__price-all">Загальна сума: {(calculateTotalPrice() ? isNaN : 0) && calculateTotalPrice()} грн 
                                {discount && <p>(знижка {discount})</p>}</div>
                                <button onClick={handlePayment} className="btn rent__price-btn">Забронювати</button>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
            </div>
    )
    }
