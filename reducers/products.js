const ProductsState = [
  {name: "Мука пшеничная", price: "48", view: "₽/кг", count: "1", type: "грамм"},
  {name: "Яйца куриные", price: "62", view: "₽/уп", count: "1", type: "штук"},
  {name: "Сахар-песок", price: "50", view: "₽/уп", count: "1", type: "грамм"},
];

export default function ProductsStore(state = ProductsState, action) {
  return state;
};