import { useState } from 'react';
// Import JSON file
import jsonData from './purchaseOrders.json';
// Import components
import Order from './components/Order';
import Modal from './Modal';

function App() {

  // Declare variables & states
  const [modal,setModal] = useState({
    isOpen: false,
    orderAddress: '',
    orderContactPerson: '',
    orderStatus: '',
    orderDetails: [],
    orderId: 0
  })

  // Render orders
  const orders = jsonData.mvPurchaseOrders.map((order) => {
    return (
    <Order
    key = {order.PurchaseOrderId}
    orderTypeAbbreviation = {order.PurchaseOrderTypeAbbreviation}
    orderNo = {order.PurchaseOrderNo}
    purchaseOrderId = {order.PurchaseOrderId}
    showOrderDetails = {showOrderDetails}
    />
    )
  })

  // Function that shows details when an order gets clicked
  function showOrderDetails(id) {
    setModal((previousModal) => (
      {
        ...previousModal,
        isOpen: true
      }
    ))
    const order = jsonData.mvPurchaseOrders.filter((order) => {
      return order.PurchaseOrderId === id
    })

    setModal(previousModal => (
      {
        ...previousModal,
        orderAddress: order[0].PurchaseOrderAddress,
        orderContactPerson: order[0].PurchaseOrderContactPerson,
        orderStatus: order[0].PurchaseOrderStatus,
        orderDetails: order[0].PurchaseOrderDetails,
        orderId: order[0].PurchaseOrderId
      }
    ))
  }

  // Function that closes modal
  function closeModal() {
    setModal((previousModal) => (
      {
        ...previousModal,
        isOpen: false
      }
    ))
  }

  return (
    <div className="container">
      {modal.isOpen && <Modal
      modal = {modal}
        closeModal = {closeModal}
      />}
      <ul className="orders">
        {orders}
      </ul>
    </div>
  );
}

export default App;
