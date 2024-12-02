const products = [
  {
    id: 1,
    name: "Chicken 1",
    category: "chicken",
    discount: 10,
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos facilis voluptatem necessitatibus rerum voluptatibus dolorum doloribus voluptates unde vero!",
    image: "/chicken1.png",
    price: 152,
    quantity: 20,
  },
  {
    id: 2,
    name: "Chicken 2",
    category: "chicken",
    discount: 0,
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos facilis voluptatem necessitatibus rerum voluptatibus dolorum doloribus voluptates unde vero!",
    image: "/chicken2.png",
    price: 195,
    quantity: 20,
  },
  {
    id: 3,
    name: "Chicken 3",
    category: "chicken",
    discount: 7,
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos facilis voluptatem necessitatibus rerum voluptatibus dolorum doloribus voluptates unde vero!",
    image: "/chicken3.png",
    price: 152,
    quantity: 20,
  },
  {
    id: 4,
    name: "Chicken 4",
    category: "chicken",
    discount: 0,
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos facilis voluptatem necessitatibus rerum voluptatibus dolorum doloribus voluptates unde vero!",
    image: "/chicken4.png",
    price: 63,
    quantity: 20,
  },
  {
    id: 5,
    name: "Beef 1",
    category: "beef",
    discount: 0,
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos facilis voluptatem necessitatibus rerum voluptatibus dolorum doloribus voluptates unde vero!",
    image: "/beef1.png",
    price: 190,
    quantity: 20,
  },
  {
    id: 6,
    name: "Beef 2",
    category: "beef",
    discount: 8,
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos facilis voluptatem necessitatibus rerum voluptatibus dolorum doloribus voluptates unde vero!",
    image: "/beef2.png",
    price: 152,
    quantity: 20,
  },
  {
    id: 7,
    name: "Beef 3",
    category: "beef",
    discount: 0,
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos facilis voluptatem necessitatibus rerum voluptatibus dolorum doloribus voluptates unde vero!",
    image: "/beef3.png",
    price: 163,
  },
  {
    id: 8,
    name: "Beef 4",
    category: "beef",
    discount: 7,
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos facilis voluptatem necessitatibus rerum voluptatibus dolorum doloribus voluptates unde vero!",
    image: "/beef4.png",
    price: 83,
    quantity: 20,
  },
  {
    id: 9,
    name: "Fish 1",
    category: "fish",
    discount: 17,
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos facilis voluptatem necessitatibus rerum voluptatibus dolorum doloribus voluptates unde vero!",
    image: "/fish1.png",
    price: 65,
    quantity: 20,
  },
  {
    id: 10,
    name: "Fish 2",
    category: "fish",
    discount: 0,
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos facilis voluptatem necessitatibus rerum voluptatibus dolorum doloribus voluptates unde vero!",
    image: "/fish2.png",
    price: 200,
    quantity: 20,
  },
  {
    id: 11,
    name: "Fish 3",
    category: "fish",
    discount: 20,
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos facilis voluptatem necessitatibus rerum voluptatibus dolorum doloribus voluptates unde vero!",
    image: "/fish3.png",
    price: 189,
    quantity: 20,
  },
  {
    id: 12,
    name: "Fish 4",
    category: "fish",
    discount: 0,
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos facilis voluptatem necessitatibus rerum voluptatibus dolorum doloribus voluptates unde vero!",
    image: "/fish4.png",
    price: 138,
    quantity: 20,
  },
  {
    id: 13,
    name: "Egg 1",
    category: "egg",
    discount: 0,
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos facilis voluptatem necessitatibus rerum voluptatibus dolorum doloribus voluptates unde vero!",
    image: "/egg1.png",
    price: 51,
    quantity: 20,
  },
  {
    id: 14,
    name: "Egg 2",
    category: "egg",
    discount: 10,
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos facilis voluptatem necessitatibus rerum voluptatibus dolorum doloribus voluptates unde vero!",
    image: "/egg2.png",
    price: 127,
    quantity: 20,
  },
  {
    id: 15,
    name: "Egg 3",
    category: "egg",
    discount: 0,
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos facilis voluptatem necessitatibus rerum voluptatibus dolorum doloribus voluptates unde vero!",
    image: "/egg3.png",
    price: 148,
    quantity: 20,
  },
  {
    id: 16,
    name: "Egg 4",
    category: "egg",
    discount: 8,
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos facilis voluptatem necessitatibus rerum voluptatibus dolorum doloribus voluptates unde vero!",
    image: "/egg4.png",
    price: 123,
    quantity: 20,
  },
  {
    id: 17,
    name: "Milk 1",
    category: "milk",
    discount: 0,
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos facilis voluptatem necessitatibus rerum voluptatibus dolorum doloribus voluptates unde vero!",
    image: "/milk1.png",
    price: 169,
    quantity: 20,
  },
  {
    id: 18,
    name: "milk 2",
    category: "milk",
    discount: 19,
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos facilis voluptatem necessitatibus rerum voluptatibus dolorum doloribus voluptates unde vero!",
    image: "/milk2.png",
    price: 108,
    quantity: 20,
  },
  {
    id: 19,
    name: "Milk 3",
    category: "milk",
    discount: 0,
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos facilis voluptatem necessitatibus rerum voluptatibus dolorum doloribus voluptates unde vero!",
    image: "/milk3.png",
    price: 101,
    quantity: 20,
  },
  {
    id: 20,
    name: "Milk 4",
    category: "milk",
    discount: 9,
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos facilis voluptatem necessitatibus rerum voluptatibus dolorum doloribus voluptates unde vero!",
    image: "/milk4.png",
    price: 128,
    quantity: 20,
  },
];

export default products;