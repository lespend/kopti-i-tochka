type Props = {
    path: string;
    children: string;
    size: number;
}

const ActionButton = ({path, children, size}: Props) => {
  return (
    <a href={path} className={`text-[24px] rounded-full bg-primary-400 text-white py-1 px-6 hover:bg-primary-300`}>{children}</a>
  )
}

export default ActionButton