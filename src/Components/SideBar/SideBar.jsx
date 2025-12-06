import { Cake, Coffee, Cookie, Droplet } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import { setActive } from '../../store/features/toggleSlice'

const SideBar = () => {

    const active = useSelector((state) => state.toggle.active);
    const dispatch = useDispatch();

    const menu = [
        { id: "coffee", label: "Qahva", to: "/", icon: <Coffee /> },
        { id: "cookie", label: "Pechenye", to: "/pechenye", icon: <Cookie /> },
        { id: "cake", label: "Shirinliklar", to: "/sweets", icon: <Cake /> },
        { id: "drink", label: "Ichimliklar", to: "/drinks", icon: <Droplet /> },
    ];

    const currentPath = location.pathname
    const activeId = menu.find(item => item.to === currentPath)?.id || active

    return (
        <div className='bg-[#a5d6a7] w-[300px] pl-10 pr-6 py-8 h-screen sticky top-0 max-md:hidden'>
            <h1 className='mb-8'>Kategoriyalar</h1>
            <ul className='text-[18px]'>
                {menu.map(item => (
                    <li key={item.id}>
                        <Link
                            to={item.to}
                            onClick={() => dispatch(setActive(item.id))}
                            className={`
                                mb-2 flex gap-4 items-center rounded-xl p-4 w-full 
                                ${activeId === item.id
                                    ? "text-white bg-[#2e7d32] shadow-lg font-medium"
                                    : "hover:bg-[#96C798] text-gray-700 hover:text-gray-900"
                                }
                            `}>
                            {item.icon} {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SideBar