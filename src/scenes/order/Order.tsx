import React from 'react'
import SectionHeader from '../../components/SectionHeader'
import OrderItem from './OrderItem'

type Props = {}

const Order = (props: Props) => {
  return (
    <section className='container pt-8 pb-16' id="how-to">
        <SectionHeader className='bg-white'>Сделать заказ</SectionHeader>
        <div className='flex flex-col md:flex-row gap-4'>
            <OrderItem title='Доставка' body='Доставка осуществляется по РФ. Подробнее уточняйте по телефону'/>
            <OrderItem title='Оплата' body='При покупке на заказ 50% предоплаты. Готовые изделия - 100%'/>
            <OrderItem title='Гарантии' body='Мы предоставляем гарантию на наши коптильни до 3-ёх лет'/>
        </div>
    </section>
  )
}

export default Order