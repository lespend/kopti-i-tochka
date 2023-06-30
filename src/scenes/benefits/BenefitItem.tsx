type Props = {
    image: string;
    title: string;
    body?: string; 
}

const BenefitItem = ({title, body, image}: Props) => {
  return (
    <div className="ml-[60px] mt-[60px] md:w-[calc(50%-60px)]">
        <img src={image} alt="Демонстрация преимуществ" className="relative w-[200px] h-[200px] bg-gray-400 border-[2px] border-primary-400 border-b-0"/>
        <h3 className="pt-2 border-t-2 border-primary-400 text-primary-300 text-xl">{title}</h3>
        <p className="mt-2 text-xs md:text-sm">{body}</p>
    </div>
  )
}

export default BenefitItem