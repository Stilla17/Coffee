import React from 'react'

const Card = ({ img, productName, description, price, children }) => {
    return (
        <div className='max-w-[350px] rounded-md bg-white border border-gray-300 overflow-hidden
        hover:ring-2 hover:ring-green-600 hover:shadow-md transition-all duration-200 group max-sm:max-w-full'>
            <div className="w-full h-[260px] overflow-hidden rounded-t-md">
                <img
                    src={img}
                    alt={productName}
                    className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                />
            </div>
            <div className='p-4'>
                <p>{productName}</p>
                <p className='line-clamp-1 text-gray-500'>{description}</p>
            </div>
            <div className='flex justify-between items-center p-4'>
                <span className='text-green-600'>{price} so'm</span>
                {
                    children
                }
            </div>
        </div>
    )
}

export default Card