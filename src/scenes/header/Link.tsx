import React from 'react'
import classNames from 'classnames'
import { Link as AnchorLink, animateScroll as scroll } from 'react-scroll'

type Props = {
    path: string;
    children: string;
    className?: string;
}

const Link = ({path, children, className}: Props) => {
  return (
    <AnchorLink to={path.slice(1)} href={`${path}`} smooth className={classNames('text-xs hover:text-primary-300', className)}>
        {children}
    </AnchorLink>
  )
}

export default Link