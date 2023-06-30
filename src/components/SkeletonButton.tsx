type Props = {
    path: string;
    children: string;
    size: number;
}

const SkeletonButton = ({path, children, size}: Props) => {
  return (
    <a href={path} className={`relative text-[24px] text-white pb-[2px] hover:text-primary-300 before:content-[""] before:w-full before:h-[2px] before:absolute before:bottom-0 before:left-0 before:bg-primary-300 `}>{children}</a>
  )
}

export default SkeletonButton