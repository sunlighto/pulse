import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './SingleCar.scss';
import useFetch from '../../hooks/useFetch';

export default function SingleCar() {
    const { id } = useParams();
    const { car, loading, error } = useFetch(`/cars/${id}?populate=*`);
    return (

    <div className="singleCar__wrap">
        <div className="container">
            {error ? (
                "Something went wrong!"
            ) : loading ? (
                "Loading"
            ) : (
                <div className="singleCar">
                    <h1 className="singleCar__title">
                    {car?.attributes?.brands?.data[0].attributes?.name}  {car?.attributes?.model} {car?.attributes?.year}
                    </h1>
                    <img
                        className="singleCar__img"
                        src={
                            car?.attributes?.image &&
                            process.env.REACT_APP_UPLOAD_URL + car.attributes.image.data.attributes.url
                        }
                        alt="car__img"
                    />
                    <div className="singleCar__card">
                        <div className="singleCar__card-info">
                            <ul className="singleCar__list">
                                <li className="singleCar__list-item">Докладніше про автомобіль</li>
                                <li className="singleCar__list-item">
                                    Розгін до 100: {car?.attributes?.dispersal}/c
                                </li>
                                <li className="singleCar__list-item">Розхід: {car?.attributes?.consumption} л</li>
                                <li className="singleCar__list-item">Кількість місць: {car?.attributes?.seats}</li>
                                <li className="singleCar__list-item">Паливо: {car?.attributes?.fuel}</li>
                                <li className="singleCar__list-item">Двигун: {car?.attributes?.engine}</li>
                                <li className="singleCar__list-item">Коробка: {car?.attributes?.transmission}</li>
                            </ul>
                            <div className="singleCar__feature">
                                <h4 className="singleCar__feature-title">Особливості:</h4>
                                <ul className="singleCar__feature-list">{car?.attributes?.desc}</ul>
                            </div>
                        </div>
                        <div className="singleCar__btn">
                            <button className="secondBtn singleCar__photo">Живі фото</button>
                            <Link to={`/rent/${car?.id}`} className="btn singleCar__reserv">
                                Забронювати
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
);

}
