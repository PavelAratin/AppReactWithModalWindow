import './Modal.css';
const Modal = (props) => {
  return (
    <div className='modal' onClick={props.onCloseModal}>
      <div className='modal__inner'>
        <div className='modal__header'>
          <h1 className='modal__title'>{props.title}</h1>
        </div>
        <p className='modal__description'>{props.message}</p>
        <button onClick={props.onCloseModal} className='modal__button'>Закрыть</button>
      </div>
    </div>
  )
}

export default Modal;