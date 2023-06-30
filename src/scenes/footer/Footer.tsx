import { contactData } from "../../share/contactData"

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className='bg-brown-400 text-white text-[20px] py-8'>
            <div className="container">
                <div className='flex flex-col md:flex-row gap-4 md:gap-16'>
                    <a href="/" className="hover:text-primary-300">
                        <h3 className='text-[32px] pr-5 relative before:content-[""] before:w-[1em] before:h-[1em] before:bg-primary-400 before:absolute before:rounded-full before:top-[12px] before:right-0'>Копти и точка</h3>
                    </a>
                    <div>
                        <h3 className='text-[28px] mb-2'>Звоните</h3>
                        <p>{contactData.workingMode}</p>
                        <a href={`tel:${contactData.phone}`} className='font-bold block'>{contactData.foramttedPhone}</a>
                    </div>
                    <div>
                        <h3 className='text-[28px] mb-2'>Пишите</h3>
                        <a href={contactData.whatsappLink} className='block underline'>WhatsApp</a>
                        <a href={contactData.telegramLink} className='block underline'>Telegram</a>
                        <a href={`mailto:${contactData.email}`} className='block underline'>example@gmail.com</a>
                    </div>
                </div>
                <p className='text-gray-400 text-[16px] mt-4'>@2023 Копти и точка — коптильни от производителя.<br />Все материалы, размещенные на сайте, являются собственностью "Копти и точка"</p>
            </div>
        </footer>
    )
}

export default Footer