import React from 'react'
import american_cookie from './../assets/american_cookei.jpg';
import Card from './../Components/Props/Card.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../store/features/counterProductSlice.js';

const cookie = [
  {
    id: 1,
    img: american_cookie,
    description: "Shokolad bo'lakchalari bilan boyitilgan klassik pechenye",
    productName: "Shokoladli pechenye",
    price: 90
  },
  {
    id: 2,
    img: american_cookie,
    description: "Jo'vari va mayiz bilan foydali pechenye",
    productName: "Jo'vari pechenyesi",
    price: 80
  },
]

const Pechenye = () => {
  const counter = useSelector((state) => state.counterProduct.count);
  const dispatch = useDispatch();

  const searchData = useSelector((state) => state.searchFilter.searchQuery.toLowerCase());

  const filteredProducts = cookie.filter(product =>
    product.productName.toLowerCase().includes(searchData) ||
    product.description.toLowerCase().includes(searchData)
  );


  return (
    <div className='px-8 pt-6'>
      <h3>Печенье</h3>
      <p className="text-gray-500">{cookie.length} товаров</p>

      <div className="mt-4 flex gap-4 flex-wrap mb-30">
        {filteredProducts.map((product, index) => {
          const key = `cookie-${product.id}`;

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
                  onClick={() => dispatch(decrement({ ...product, category: "cookie" }))}
                  className='w-[30px] h-[30px] rounded-full border border-green-600'
                >-</button>

                <span>{counter[key] || 0}</span>

                <button
                  onClick={() => dispatch(increment({ ...product, category: "cookie" }))}
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

export default Pechenye