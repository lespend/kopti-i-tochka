type Props = {
    image: string;
}

const CoockedBlock = ({image}: Props) => {
  return (
    <div>
        <img
          src={image}
          alt='Деликатес'
        />
    </div>
  )
}

export default CoockedBlock