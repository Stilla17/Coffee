import React from 'react'

const Card = ({ img, productName, description, price }) => {
    return (
        <div className='max-w-[350px] rounded-md bg-white border border-gray-300 overflow-hidden
        hover:ring-2 hover:ring-green-500 hover:shadow-md transition-all duration-200'>
            <div className="w-full h-[260px] overflow-hidden rounded-t-md">
                <img
                    src={img}
                    alt={productName}
                    className='w-full h-full object-cover transition-transform duration-300 hover:scale-110'
                />
            </div>
            <div className='p-4'>
                <p>{productName}</p>
                <p className='line-clamp-1 text-gray-500'>{description}</p>
            </div>
            <div className='flex justify-between items-center p-4'>
                <span className='text-green-600'>{price} so'm</span>
                <div className='flex gap-6 items-center text-[18px]'>
                    <button className='w-[30px] h-[30px] rounded-full border border-green-400 '>-</button>
                    <span>0</span>
                    <button className='w-[30px] h-[30px] bg-green-400 text-white rounded-full'>+</button>
                </div>
            </div>
        </div>
    )
}

export default Card