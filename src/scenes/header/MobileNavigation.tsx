import { Bars3BottomRightIcon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { navigationList } from '../../share/navigationList'
import Link from './Link'
import { contactData } from '../../share/contactData'
import {PhoneIcon} from '@heroicons/react/24/solid'

type Props = {}

const MobileNavigation = (props: Props) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <>
            <button className='w-[40px] h-[40px] text-black' onClick={() => setIsActive(!isActive)}>
                {!isActive && <Bars3BottomRightIcon />}
                {isActive && <XMarkIcon />}
            </button>
            <nav className={`absolute h-[calc(100vh-80px)] top-[80px] left-0 w-[100vw] bg-white z-[80] transition-opacity ${!isActive ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
                <ul className="flex-col">
                    {navigationList.map((item) => (
                        <li className='text-center'>
                            <Link path={item.path} className="text-xl block py-2 border-b-[1px] border-gray-400">{item.name}</Link>
                        </li>
                    ))}
                </ul>
                <a href={`tel:${contactData.phone}`} className="mt-4 text-right text-sm flex items-center justify-center text-primary-400 font-bold">
                    <span className="inline-block w-[30px] mr-2 mt-[4px]"><PhoneIcon /></span>
                    {contactData.foramttedPhone}
                </a>
            </nav>
        </>
    )
}

export default MobileNavigation