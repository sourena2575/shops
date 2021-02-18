import Link from 'next/link';
import React from 'react'
import {useClass} from 'hooks'
export const GeneralLink: React.FC<ILink> = React.forwardRef(
  (
    { className,  children, style, href, onClick, target },
    ref
  ) => {
    const { join } = useClass();
    return (
      <Link href={href  ? href : './'} passHref>
        <a
          style={style}
          className={join(
            ` link  cursor-pointer`,
            className
          )}
          onClick={onClick}
          href={href}
          target={target ? target : '_self'}
        >
          {children}
        </a>
      </Link>
    );
  }
);
