import { ShoppingBasket, X } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../../store/features/counterProductSlice';

const Basket = () => {

    const cart = useSelector((state) => state.counterProduct.data);
    const dispatch = useDispatch();

    const totalCount = cart.reduce((sum, item) => sum + parseInt(item.count), 0)

    const totalPrice = cart.reduce((sum, item) => sum + parseInt(item.total), 0)

    const isEmpty = cart.length === 0;

    return (
        <div className='fixed bottom-0 left-0 bg-[#e0e0e0] w-full py-4 px-8 flex justify-between items-center'>
            <div>
                <div className='flex gap-2 items-center'>
                    <ShoppingBasket className='text-green-600' />
                    {/* <span>Savat</span> */}
                    {
                        isEmpty ?
                            <span>Savat</span> : (
                                <div className='flex items-center gap-2'>
                                    <span>Savat</span>
                                    <div className='px-2 rounded-md flex text-white justify-center items-center bg-green-600'>{totalCount}</div>
                                </div>)
                    }

                </div>
                {
                    cart.length === 0 ? <p className='text-gray-500 mt-2'>Savat bo'sh</p> :
                        (
                            <div className='flex gap-4 mt-4'>
                                {
                                    cart.map((item, index) => (
                                        <div key={index} className='p-2 bg-white rounded-2xl flex justify-between items-center gap-4 mb-2 shadow-md'>
                                            <div className='flex gap-2 items-center'>
                                                <img className='w-[50px] rounded-xl' src={item.img} alt={item.productName} />
                                                <div>
                                                    <p className='text-[14px]'>{item.productName}</p>
                                                    <p className='text-gray-500 text-[12px]'>{item.count} x {item.originalPrice} so'm</p>
                                                </div>
                                            </div>
                                            <button onClick={() => dispatch(removeItem({ id: item.id, category: item.category }))} className='hover:bg-red-100 p-1 rounded-md hover:text-red-400'><X size={18} /></button>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                }

            </div>
            <div className='flex items-center gap-4'>
                <div>
                    <p className='text-gray-500 text-[14px] text-end'>Jami</p>
                    <p className='text-[20px] text-green-700'>{totalPrice} so'm</p>
                </div>
                <button
                    disabled={cart.length === 0}
                    className={`text-white font-bold px-4 py-2 rounded-2xl shadow cursor-pointer
                    ${cart.length === 0 ? "bg-[#96c798] cursor-not-allowed" : "bg-green-600"}`}
                >
                    Buyurtma berish
                </button>
            </div>
        </div>
    )
}

export default Basket;