import React, { useState } from 'react';
import Modal from '../modal/Modal';
import './Form.css';
const Form = (props) => {
  const [input, setInput] = useState('');
  const [number, setNumber] = useState('');
  //инициализируем начальное состояние модального окна - пустым обьектом
  const [error, setError] = useState();
  const changeInputHandler = (e) => {
    setInput(e.target.value)
  }
  const changeNumberHandler = (e) => {
    setNumber(e.target.value)
  }
  const submitFormHandler = (e) => {
    e.preventDefault()
    //валидация формы перед отправкой нового обьекта  в комнонент app
    if (input.trim().length === 0 || number.trim().length === 0) {
      setError({
        title: 'Некорректный ввод',
        message: 'Эти поля не могут быть пустыми',
      })
      return;
    }
    if (+number < 1) {
      setError({
        title: 'Некорректный возраст',
        message: 'Возраст должен быть больше 0'
      })
      return;
    }
    const newUser = {
      id: Math.random(),
      name: input,
      age: number
    }
    setInput('')
    setNumber('')
    props.addNewUser(newUser)
  }
  const errorHandler = () => {
    setError(false);
  }
  return (
    <div>
      {error && <Modal message={error.title} title={error.message} onCloseModal={errorHandler}></Modal>}
      <form onSubmit={submitFormHandler} className="form">
        <label className="form__label">
          <input
            className="form__input"
            type='text'
            value={input}
            onChange={changeInputHandler}
          ></input>
          Имя
        </label>
        <label className="form__label">
          <input
            className="form__input"
            type='Number'
            value={number}
            onChange={changeNumberHandler}
          ></input>
          Возраст
        </label>
        <button className="form__btn">Добавить пользователя</button>
      </form>
    </div>
  )
}
export default Form;