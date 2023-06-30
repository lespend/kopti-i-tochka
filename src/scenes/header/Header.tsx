import Navigation from "./Navigation"
import MobileNavigation from "./MobileNavigation"
import { useMediaQuery } from "../../hooks/useMediaQuery"
import { contactData } from "../../share/contactData"
import { PhoneIcon } from "@heroicons/react/20/solid"


const Header = () => {
    const isLarge = useMediaQuery('(min-width: 960px)')
    return (
        <header className='py-2 fixed top-0 left-0 w-full z-[100] bg-white'>
            <div className="max-w-[1400px] mx-auto px-[20px] flex justify-between items-center">
                <a href="/" className="hover:text-primary-300">
                    <h1 className='pr-5 relative before:content-[""] before:w-[1em] before:h-[1em] before:bg-primary-400 before:absolute before:rounded-full before:top-[12px] before:right-0'>Копти и точка</h1>
                </a>
                <div className="mt-2">
                {isLarge && <Navigation />}
                {isLarge && (
                    <a href={`tel:${contactData.phone}`} className="text-right text-sm flex items-center justify-end text-primary-400 font-bold">
                        <span className="inline-block w-[30px] mr-2 mt-[4px]"><PhoneIcon/></span>
                        {contactData.foramttedPhone}
                    </a>
                )}
                {!isLarge && <MobileNavigation />}
                </div>
            </div>
        </header>
    )
}

export default Header