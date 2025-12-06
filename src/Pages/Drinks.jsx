import React from 'react'
import greenTea from './../assets/green tea.webp';
import limonad from './../assets/limonad.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../store/features/counterProductSlice.js';
import Card from './../Components/Props/Card.jsx';
import appelsineJuice from './../assets/appelsine.webp';
const drinks = [
  {
    id: 1,
    img: appelsineJuice,
    description: "Yangi siqilgan apelsin sharbati",
    productName: "Apelsin sharbati",
    price: 160
  },
  {
    id: 2,
    img: greenTea,
    description: "Xushbo'y xitoy yashil choyi",
    productName: "Yashil choy",
    price: 110
  },
  {
    id: 3,
    img: limonad,
    description: "Yalpiz va limon bilan uy limonadi",
    productName: "Limonad",
    price: 170
  }
]

const Drinks = () => {
  const counter = useSelector((state) => state.counterProduct.count);
  const dispatch = useDispatch();

  const searchData = useSelector((state) => state.searchFilter.searchQuery.toLowerCase());

  const filteredProducts = drinks.filter(product =>
    product.productName.toLowerCase().includes(searchData) ||
    product.description.toLowerCase().includes(searchData)
  );


  return (
    <div className='px-8 pt-6'>
      <h3>Напитки</h3>
      <p className="text-gray-500">{drinks.length} товаров</p>

      <div className="mt-4 flex gap-4 flex-wrap mb-30">
        {filteredProducts.map((product, index) => {
          const key = `drinks-${product.id}`;

          return (
            <Card
              key={index}
              img={product.img}
              description={product.description}
              productName={product.productName}
              price={product.price}
            >
              <div className='flex gap-4 items-center text-[18px]'>
                <button
                  onClick={() => dispatch(decrement({ ...product, category: "drinks" }))}
                  className='w-[30px] h-[30px] rounded-full border border-green-600'
                >-</button>

                <span>{counter[key] || 0}</span>

                <button
                  onClick={() => dispatch(increment({ ...product, category: "drinks" }))}
                  className='w-[30px] h-[30px] bg-green-600 text-white rounded-full'
                >+</button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  )
}

export default Drinks