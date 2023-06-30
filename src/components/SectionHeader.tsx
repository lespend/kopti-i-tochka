type Props = {
    children: string;
    className?: string;
}

const SectionHeader = ({children, className}: Props) => {
  return (
    <div className='text-center relative z-[10] before:content[""] before:w-full before:h-[5px] before:bg-primary-400 before:absolute before:top-[calc(50%+5px)] before:left-0 before:z-[-1]'>
        <h2 className={`${className} inline-block py-8 px-4 text-md md:text-2xl`}>{children}</h2>
    </div>
  )
}

export default SectionHeader