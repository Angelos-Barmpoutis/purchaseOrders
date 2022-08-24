import { FaBeer } from 'react-icons/fa';


const Modal = ({closeModal, modal}) => {
  return (
    <div className="modal">
        <i className="fa-solid fa-x" onClick={closeModal}></i>
        <h2 className="modal__title">Order Details</h2>
        <div className="modal__field">
            <h3>Address: </h3>
            <p>{modal.orderAddress}</p>
        </div>
        <div className="modal__field">
            <h3>Contact Person: </h3>
            <p>{modal.orderContactPerson}</p>
        </div>
        <div className="modal__field">
            <h3>Order Status: </h3>
            <p>{modal.orderStatus}</p>
        </div>
    </div>
  )
}

export default Modal