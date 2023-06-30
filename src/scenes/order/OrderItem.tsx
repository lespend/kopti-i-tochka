import React from 'react'

type Props = {
    title: string;
    body: string;
}

const OrderItem = ({title, body}: Props) => {
  return (
    <div className='py-8 px-4 bg-primary-400 text-white overflow-y-hidden order-block w-full'>
        <div className='translate-y-[100%] order-block__wrapper transition-transform'>
            <h3 className='text-sm pb-1 border-solid border-white border-b-[1px]'>{title}</h3>
            <p className='text-[18px] mt-4'>{body}</p>
        </div>
    </div>
  )
}

export default OrderItem