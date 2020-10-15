const account = {
  owner: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['order-1', 'order-2', 'order-3'],
  //содаем функцию которая присваивает свойству discount значение value
  changeDiscount(value) {
    this.discount = value;
  },
  //содаем функцию которая возвращает массив заказов
  showOrders() {
    return this.orders;
  },
  //содаем функцию которая принимает параметры стоимости и номер заказа, 
  //отнимает от текущего баланса стоимость заказа 
  //и добааляет номер заказа в массив заказов
  addOrder(cost, order) {
    this.balance -= cost;
    this.orders.push(order);
  },
};
//создаем копию обьекта делаем свойство обьекта заказы массивом
const copyAccount =  Object.assign({},account);
copyAccount.orders = [...account.orders];
// копируем для автотестов ссылочные типы


account.changeDiscount(0.15);
console.log(account.discount); // 0.15

console.log(account.showOrders()); 
// ['order-1', 'order-2', 'order-3']

account.addOrder(5000, 'order-4');
console.log(account.balance); // 19000

console.log(account.showOrders());
// ['order-1', 'order-2', 'order-3', 'order-4']
