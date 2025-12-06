import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../store/features/counterProductSlice.js';
import Card from './../Components/Props/Card.jsx';
import Chocolate from './../assets/cokoladovy-dort-recept-2-1024x1014.webp';
import Cheesecake from './../assets/Cheesecake.jpg';
import Tiramisu from './../assets/Tiramisu.webp';

const sweets = [
  {
    id: 1,
    img: Chocolate,
    description: "Yumshoq va shirin shokoladli tort, har qanday bayram uchun ideal",
    productName: "Chocolate Cake",
    price: 200
  },
  {
    id: 2,
    img: Cheesecake,
    description: "Yengil va havodor vanil pirogi, sut va tuxum bilan tayyorlangan",
    productName: "Cheesecake",
    price: 280
  },
  {
    id: 3,
    img: Tiramisu,
    description: "Kofe va mascarpone pishloqli italyan deserti, kakao bilan bezatilgan",
    productName: "Tiramisu",
    price: 250
  }
]

const Sweets = () => {

  const counter = useSelector((state) => state.counterProduct.count);
  const dispatch = useDispatch();

  return (
    <div className='px-8 pt-6'>
      <h3>Десерты</h3>
      <p className="text-gray-500">{sweets.length} товаров</p>

      <div className="mt-4 flex gap-4 flex-wrap mb-30">
        {sweets.map((product, index) => {
          const key = `sweet-${product.id}`;

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
                  onClick={() => dispatch(decrement({ ...product, category: "sweet" }))}
                  className='w-[30px] h-[30px] rounded-full border border-green-600'
                >-</button>

                <span>{counter[key] || 0}</span>

                <button
                  onClick={() => dispatch(increment({ ...product, category: "sweet" }))}
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

export default Sweets