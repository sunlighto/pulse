import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.scss';
import axios from "axios";
import { toast } from "react-toastify";

const initialUser = { email: "", password: "", username: "" };
const Register = () => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      const url = `http://localhost:1337/api/auth/local/register`;
      if (user.username && user.email && user.password) {
        const res = await axios.post(url, user);
        if (!!res) {
          toast.success("Registered successfully!", {
            hideProgressBar: true,
          });
          setUser(initialUser);
          navigate("/login");
        }
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };
  return (
    <div className='header__register'>
      <h4 className="header__register-title">Реєстрація</h4>
      <form className="header__register-form">
        <form className="header__register-wrap">
          <form className='header__register-item'>
            <p className="header__register-form-text">Номер телефону</p>
            <input
              className='header__register-input'
              type="text"
              name="username"
              value={user.username}
              onChange={handleUserChange}
              placeholder="Введіть номер телефону"
            />
          </form>
          <div className='header__register-item'>
            <p className="header__register-form-text">Email</p>
            <input
              className='header__register-input'
              type="email"
              name="email"
              value={user.email}
              onChange={handleUserChange}
              placeholder="Введіть email"
            />
          </div>
        </form>
        <div className='header__register-item'>
          <p className="header__register-form-text">Пароль</p>
          <input
            className='header__register-input'
            type="password"
            name="password"
            placeholder='Введіть пароль'
            value={user.password}
            onChange={handleUserChange}
          />
        </div>
      
        <button className="btn header__register-reg" type="submit" onClick={signUp}>
          Зареєструватись
        </button>
      </form>
    </div>
  );
};

export default Register;
