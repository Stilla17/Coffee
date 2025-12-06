import React from 'react'
import esspresso from './../assets/esspresso.jpg';
import Card from './../Components/Props/Card.jsx';
import kapuchino from './../assets/kapuchino.jpg';
import hold from './../assets/hold.jpg';
import americano from './../assets/americano.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../store/features/counterProductSlice.js';

const coffeeProducts = [
  {
    id: 1,
    img: esspresso,
    description: "Klassik italyan qahvasi, to'yimli va aromatli",
    productName: "Espresso",
    price: 120
  },
  {
    id: 2,
    img: kapuchino,
    description: "Sut bilan aralashtirilgan espresso, yumshoq va shirin ta'mga ega",
    productName: "Kapuchino",
    price: 150
  },
  {
    id: 3,
    img: hold,
    description: "Sovuq espresso, muz bilan xizmat qilinadi, yozgi kunlar uchun ideal",
    productName: "Iced Coffee",
    price: 130
  },
  {
    id: 4,
    img: americano,
    description: "Espresso va issiq suv aralashmasi, kuchli va to'yimli ta'mga ega",
    productName: "Americano",
    price: 110
  }
]

const Home = () => {

  const counter = useSelector((state) => state.counterProduct.count);
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.searchFilter.searchQuery.toLowerCase());

  const filteredProducts = coffeeProducts.filter(product =>
    product.productName.toLowerCase().includes(searchData) ||
    product.description.toLowerCase().includes(searchData)
  );

  return (
    <div className='px-8 pt-6'>
      <h3>Кофе</h3>
      <p className="text-gray-500">{coffeeProducts.length} товаров</p>

      <div className="mt-4 flex gap-4 flex-wrap mb-30">
        {filteredProducts.map((product, index) => {
          const key = `coffee-${product.id}`;

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
                  onClick={() => dispatch(decrement({ ...product, category: "coffee" }))}
                  className='w-[30px] h-[30px] rounded-full border border-green-600'
                >-</button>

                <span>{counter[key] || 0}</span>

                <button
                  onClick={() => dispatch(increment({ ...product, category: "coffee" }))}
                  className='w-[30px] h-[30px] bg-green-600 text-white rounded-full'
                >+</button>
              </div>
            </Card>
          );
        })}
      </div>
    </div >
  )
}

export default Home