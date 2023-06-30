import ActionButton from '../../components/ActionButton'
import SkeletonButton from '../../components/SkeletonButton'

type Props = {}

const Screen = (props: Props) => {
    return (
        <section className='relative h-[100vh] pt-[80px] z-30'>
            <video src="src/assets/screenVideo.mp4" autoPlay muted loop className='absolute w-[100%] h-[100%] object-cover top-0' />
            <div className='absolute w-[100%] h-[100%] content[""] bg-black opacity-40 z-10 top-0'></div>
            <div className='container text-center relative z-30 text-white md:mt-[30vh] mt-[20vh] md:text-left'>
                <h2 className='md:text-4xl text-2xl font-bold'>Холодное и горячие копчение</h2>
                <p className='md:text-sm text-xs mt-2 md:w-[80%]'>Погрузитесь в ароматное и вкусное приключение с нашими мастерски созданными коптильнями — идеальным спутником для создания незабываемых кулинарных шедевров!</p>
                <div className='mt-4 flex gap-2 items-center flex-col md:flex-row'>
                    <ActionButton size={4} path='#catalog'>Каталог</ActionButton>
                    <SkeletonButton size={4} path='#catalog'>Подробнее</SkeletonButton>
                </div>
            </div>

        </section>
    )
}

export default Screen