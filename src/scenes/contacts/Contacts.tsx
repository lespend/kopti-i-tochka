import React from 'react'
import SectionHeader from '../../components/SectionHeader'
import { DevicePhoneMobileIcon } from '@heroicons/react/20/solid'
import { contactData } from '../../share/contactData'
import { LinkIcon } from '@heroicons/react/20/solid'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { phoneRegexp } from '../../share/regular'

type Props = {}

const schema = yup.object({
  name: yup.string().required('Это поле обязательно'),
  phone: yup.string().required('Это поле обязательно').matches(phoneRegexp, 'Телефон введен неправильно'),
})

type ContactFormData = yup.InferType<typeof schema>;

const Contacts = (props: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <section className='bg-primary-100 pt-8 pb-16' id="order">
      <div className='container'>
        <SectionHeader className='bg-primary-100'>Заказать сейчас</SectionHeader>
        <div className='flex flex-col lg:flex-row gap-8 items-center'>
            <div className='relative min-w-[300px] min-h-[300px] md:min-w-[400px] md:min-h-[400px] overflow-hidden'>
              <div className='hidden md:block contact__large-circle absolute w-[400px] h-[400px] border-2 border-primary-300 border-l-primary-400 border-r-white border-b-primary-400 border-t-white rounded-full'></div>
              <div className='contact__small-circle absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[300px] h-[300px] border-2 border-primary-300 border-l-primary-100 border-r-primary-100 rounded-full'></div>
              <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <div>
                  <a className='flex items-center' href={`tel:${contactData.phone}`}>
                    <div className='w-[40px] h-[40px] bg-gray-400 rounded-full flex items-center justify-center text-primary-300'>
                      <DevicePhoneMobileIcon className='w-[30px]'/>
                    </div>
                    <p className='text-[16px] ml-2'>{contactData.foramttedPhone}</p>
                  </a>
                  <a className='flex items-center mt-2' href=''>
                    <div className='w-[40px] h-[40px] bg-gray-400 rounded-full flex items-center justify-center text-primary-300'>
                      <LinkIcon className='w-[30px]'/>
                    </div>
                    <p className='text-[16px] ml-2'>Whatsapp</p>
                  </a>
                  <a className='flex items-center mt-2' href=''>
                    <div className='w-[40px] h-[40px] bg-gray-400 rounded-full flex items-center justify-center text-primary-300'>
                      <LinkIcon className='w-[30px]'/>
                    </div>
                    <p className='text-[16px] ml-2'>Telegram</p>
                  </a>
                </div>
              </div>
            </div>

            <div className='w-full max-w-[700px]'>
              <h3 className='text-center'>Оставьте заявку и мы с вами свяжемся</h3>
              <form className='flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
                <input {...register('name')} type="text" placeholder='Имя' className='mt-2 w-full pl-2 py-1 text-sm focus:outline-primary-300 rounded-md'/>
                <p className='text-sm'>{errors.name?.message}</p>
                <input {...register('phone')} type="tel" placeholder='Телефон' className='mt-2 w-full pl-2 py-1 text-sm focus:outline-primary-300 rounded-md'/>
                <p className='text-sm'>{errors.phone?.message}</p>
                <button className='text-[22px] rounded-full bg-primary-400 text-white py-1 px-6 hover:bg-primary-300 mt-2'>Отправить</button>
              </form>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts