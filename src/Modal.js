const Modal = ({closeModal, modal}) => {

  // Create tr for every PurchaseOrderDetails item
  const orderDetails = modal.orderDetails.map((order, index) => {
    return (
      <tr key={index}>
        <td>{order.PurchaseOrderRowProductSKU}</td>
        <td>{order.PurchaseOrderRowQuantity}</td>
        <td>{order.PurchaseOrderRowUnitPriceWithoutTaxOrDiscount}</td>
        <td>{order.PurchaseOrderRowTotalAmount}</td>
      </tr>
    )
  })

  return (
    <div className="modal">
        <i className="fa-solid fa-x" onClick={closeModal}></i>
        <h2 className="modal__title">Order Informations</h2>
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
            <p className={modal.orderStatus === 'Verified' ? 'green' : ''}>{modal.orderStatus}</p>
        </div>
        <table className='modal__table'>
          <thead>
            <tr>
              <th colSpan={4} className='modal__table__title'>
                Order Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='col' className='modal__table__header'>SKU</th>
              <th scope='col' className='modal__table__header'>Quantity Ordered</th>
              <th scope='col' className='modal__table__header'>Unit Price</th>
              <th scope='col' className='modal__table__header'>Total Amount</th>
            </tr>
            {orderDetails}
          </tbody>
        </table>
    </div>
  )
}

export default Modal