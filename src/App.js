import { useState } from 'react';
import jsonData from './purchaseOrders.json';
import Order from './components/Order';
import Modal from './Modal';

function App() {
  const [modal,setModal] = useState({
    isOpen: false,
    orderAddress: '',
    orderContactPerson: '',
    orderStatus: ''
  })


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
        orderStatus: order[0].PurchaseOrderStatus
      }
    ))

    order[0].PurchaseOrderDetails.forEach(row => {
      console.log('OrderDetails')
      console.log('ProductSKU: ' + row.PurchaseOrderRowProductSKU)
      console.log('RowQuantity: ' + row.PurchaseOrderRowQuantity)
      console.log('UnitPriceWithoutTaxOrDiscount: ' + row.PurchaseOrderRowUnitPriceWithoutTaxOrDiscount)
      console.log('RowTotalAmount: ' + row.PurchaseOrderRowTotalAmount)
    })
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
