import React, { useState } from 'react'
import './LogIn.scss'
import axios from "axios";
import { toast } from "react-toastify";
import { storeUser } from "../../Helper";
import { useNavigate } from 'react-router-dom';
const initialUser = { password: "", identifier: "" };

export default function LogIn() {
    const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const url = `http://localhost:1337/api/auth/local`;
    try {
      if (user.identifier && user.password) {
        const { data } = await axios.post(url, user);
        if (data.jwt) {
          storeUser(data);
          toast.success("Logged in successfully!", {
            hideProgressBar: true,
          });
          setUser(initialUser);
          navigate("/");
          window.location.reload();
        }
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  return (
    <div className='header__logIn'>
        <h4 className="header__logIn-title">Авторизація</h4>
        <form action="" className="header__logIn-form">
            <div className='header__logIn-item'>
            <p className="header__logIn-form-text">Номер телефону</p>
            <input className='header__logIn-input' type="email" name="identifier"
 value={user.identifier}
              onChange={handleChange} placeholder='Введіть номер телефону'/>
            </div>
            <div className='header__logIn-item'>
            <p className="header__logIn-form-text">Пароль</p>
            <input className='header__logIn-input' type="text"  onChange={handleChange}
             placeholder='Введіть пароль'/>
            </div>
            <button className="btn header__auth-logIn" onClick={handleLogin}>Увійти</button>
        </form>
        </div>
  )
}
