import SectionHeader from "../../components/SectionHeader"
import BenefitItem from "./BenefitItem"
import Image1 from '../../assets/benefits/1.png'
import Image2 from '../../assets/benefits/image (2).png'
import Image3 from '../../assets/benefits/image (3).png'
import Image4 from '../../assets/benefits/image (4).png'
import Image5 from '../../assets/benefits/image (5).png'
import Image6 from '../../assets/benefits/image (6).png'

const Benefits = () => {
  return (
    <section className="container pt-8 pb-16" id="benefits">
        <SectionHeader className="bg-white">Преимущества</SectionHeader>
        <div className="flex flex-wrap ml-[-60px] md:flex-row flex-col">
            <BenefitItem image={Image1} title='Коптильная камера' body='Металлическая отделка камеры пищевой нержавейкой AISI 304. Устойчива к воздействию высоких температур и не выделяет смол'/>
            <BenefitItem image={Image6} title='Терморегулятор' body='Позволяет регулировать и поддерживать нужную температуру в коптильной камере'/>
            <BenefitItem image={Image2} title='Электрические автоматы' body='Защищают электрические приборы от скачков напряжения'/>
            <BenefitItem image={Image3} title='Наружная обшивка' body='Изготовлена из дерева, что придает изделию красивый, эстетический вид. Цвет выбираете вы!'/>
        </div>
        <SectionHeader className="bg-white">Крыша на ваше усмотрение</SectionHeader>
        <div className="flex flex-wrap ml-[-60px] md:flex-row flex-col">
            <BenefitItem image={Image5} title='Плоская крыша'/>
            <BenefitItem image={Image4} title='С мягкой черепицей'/>
        </div>

    </section>
  )
}

export default Benefits