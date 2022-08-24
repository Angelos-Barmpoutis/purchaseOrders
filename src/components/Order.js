const Order = ({orderTypeAbbreviation, orderNo, showOrderDetails, purchaseOrderId}) => {
  return (
    <li className="orders__order" onClick = {() => showOrderDetails(purchaseOrderId)}>
      <a href="#">{orderTypeAbbreviation} - {orderNo}</a>
    </li>
  )
}

export default Order;