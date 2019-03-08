const ConsumablesState = [
  {name: "Пакет кондитерский", price: 120, view: '₽/уп', count: 1, type: "штук"},
  {name: "Перчатки", price: 280, view: '₽/уп', count: 1, type: "штук"},
];

export default function ConsumablesStore(state = ConsumablesState, action) {
  return state;
};