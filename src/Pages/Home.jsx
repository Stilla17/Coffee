import React from 'react'
import esspresso from './../assets/esspresso.jpg';
import Card from './../Components/Props/Card.jsx';
const Home = () => {
  return (
    <div className='px-8 pt-6'>
      <h3>Кофе</h3>
      <p className="text-gray-500">4 товаров</p>

      <div className="mt-4">
        <Card img={esspresso}
          description={"Klassik italyan qahvasi, to'yimli va aromatli"}
          productName={"Espresso"} />
      </div>
    </div>
  )
}

export default Home