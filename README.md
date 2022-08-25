This task is part of an interview proccess. In this task I was asked to download a JSON file and display some speciific informations. So, this is my approch to solve the problem using ReactJS:

1. I downloaded the JSON file and imported it into App.js storing it in a variable.

2. The file that I had to work with was 'mvPurchaseOrders', a list containing 3 objects where every object is an order. So I mapped through it and for every order I rendered an Order component.

3. The problem was asking to show some additional informations for every order when it gets clicked. For that reason I created a Modal component and a modal state.

4. Everytime an order gets clicked, it's data are being passed to the modal state in order for them to get displayed.

5. The last step was to conditional create a table based on 'PurchaseOrderDetails' length. So, once more, I mapped through it and created a table row for every item.
