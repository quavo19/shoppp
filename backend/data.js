import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Iphone 12 Pro Max',
      category: 'Phones',
      image: '/images/p1.png',
      price: 120,
      countInStock: 10,
      brand: 'Apple',
      rating: 4.5,
      numReviews: 10,
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Ratione id non ut, quod eaque sed amet placeat inventore odit eius hic alias saepe omnis dignissimos harum nobis laudantium debitis libero. ',
    },
    {
      name: 'IPhone 13 Pro Max',
      category: 'Phones',
      image: '/images/p2.png',
      price: 100,
      countInStock: 20,
      brand: 'Apple',
      rating: 4.0,
      numReviews: 10,
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Ratione id non ut, quod eaque sed amet placeat inventore odit eius hic alias saepe omnis dignissimos harum nobis laudantium debitis libero. ',
    },
    {
      name: 'Apple series 7e',
      category: 'Phones',
      image: '/images/p3.png',
      price: 220,
      countInStock: 0,
      brand: 'Apple',
      rating: 4.8,
      numReviews: 17,
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Ratione id non ut, quod eaque sed amet placeat inventore odit eius hic alias saepe omnis dignissimos harum nobis laudantium debitis libero. ',
    },
    {
      name: 'Apple series 6',
      category: 'Phones',
      image: '/images/p4.png',
      price: 78,
      countInStock: 15,
      brand: 'Apple',
      rating: 4.5,
      numReviews: 14,
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Ratione id non ut, quod eaque sed amet placeat inventore odit eius hic alias saepe omnis dignissimos harum nobis laudantium debitis libero. ',
    },
    {
      name: 'Apple series 7',
      category: 'Phones',
      image: '/images/p5.png',
      price: 65,
      countInStock: 5,
      brand: 'Apple',
      rating: 4.5,
      numReviews: 10,
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Ratione id non ut, quod eaque sed amet placeat inventore odit eius hic alias saepe omnis dignissimos harum nobis laudantium debitis libero. ',
    },
    {
      name: 'Apple Series 2',
      category: 'Phones',
      image: '/images/p6.png',
      price: 139,
      countInStock: 12,
      brand: 'Apple',
      rating: 4.5,
      numReviews: 15,
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Ratione id non ut, quod eaque sed amet placeat inventore odit eius hic alias saepe omnis dignissimos harum nobis laudantium debitis libero. ',
    },
  ],
};
export default data;