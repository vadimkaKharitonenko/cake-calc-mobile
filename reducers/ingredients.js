const IngredientsState = [
  {name: "Абрикос", price: "450", view: "₽/кг", count: "1", type: "грамм"},
  {name: "Ананас", price: "280", view: "₽/шт", count: "1", type: "грамм"},
  {name: "Анаша", price: "4500", view: "₽/уп", count: "1", type: "грамм"},
  {name: "Анабиоз", price: "Бесценно", view: "", count: "1", type: "грамм"},
  {name: "Астана", price: "129", view: "₽/шт", count: "1", type: "грамм"},
  {name: "Афродизиаки", price: "14", view: "₽/уп", count: "1", type: "грамм"},
  {name: "Бананы", price: "72", view: "₽/кг", count: "1", type: "грамм"},
  {name: "Барабаны", price: "30", view: "₽/шт", count: "1", type: "грамм"},
  {name: "Барбарис", price: "346", view: "₽/уп", count: "1", type: "грамм"},
  {name: "Баракуда", price: "2350", view: "₽/кг", count: "1", type: "грамм"},
  {name: "Бензин", price: "44", view: "₽/шт", count: "1", type: "грамм"},
  {name: "Березовый сок", price: "20", view: "₽/уп", count: "1", type: "грамм"},
  {name: "Боярышник", price: "120", view: "₽/кг", count: "1", type: "грамм"},
  {name: "Висмут", price: "5430", view: "₽/шт", count: "1", type: "грамм"},
  {name: "Воландеморт", price: "770", view: "₽/уп", count: "1", type: "грамм"},
  {name: "Вупи Голдберг", price: "439", view: "₽/кг", count: "1", type: "грамм"},
  {name: "Гамлет", price: "130", view: "₽/шт", count: "1", type: "грамм"},
  {name: "Грибы", price: "382", view: "₽/уп", count: "1", type: "грамм"},
];

export default function IngredientsStore(state = IngredientsState, action) {
  return state;
};