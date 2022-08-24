import jsonData from './purchaseOrders.json';
import Order from './components/Order';

function App() {
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
    const order = jsonData.mvPurchaseOrders.filter((order) => {
      return order.PurchaseOrderId === id
    })
    console.log('OrderAddress: ' + order[0].PurchaseOrderAddress)
    console.log('ContactPerson: ' + order[0].PurchaseOrderContactPerson)
    console.log('OrderStatus: ' + order[0].PurchaseOrderStatus)
    order[0].PurchaseOrderDetails.forEach(row => {
      console.log('OrderDetails')
      console.log('ProductSKU: ' + row.PurchaseOrderRowProductSKU)
      console.log('RowQuantity: ' + row.PurchaseOrderRowQuantity)
      console.log('UnitPriceWithoutTaxOrDiscount: ' + row.PurchaseOrderRowUnitPriceWithoutTaxOrDiscount)
      console.log('RowTotalAmount: ' + row.PurchaseOrderRowTotalAmount)
    })
  }

  return (
    <div className="container">
      <ul className="orders">
        {orders}
      </ul>
    </div>
  );
}

export default App;
