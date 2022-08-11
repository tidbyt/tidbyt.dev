import React from 'react';

import Box from '@mui/system/Box';

type Props = {
    src: string,
    alt: string,
    title: string,
    children: JSX.Element,
}

export default function Image({ src, alt, title, children }: Props) {
    return (
        <Box
            component="img"
            alt={alt}
            src={src}
      />
    );
}