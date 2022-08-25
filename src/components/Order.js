const Order = ({orderTypeAbbreviation, orderNo, showOrderDetails, purchaseOrderId}) => {
  return (
    <li className="orders__order" onClick = {() => showOrderDetails(purchaseOrderId)}>
      {orderTypeAbbreviation} - {orderNo}
    </li>
  )
}

export default Order;