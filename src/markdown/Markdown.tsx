
import React from 'react';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import Row from './table/Row';
import Table from './table/Table';
import Cell from './table/Cell';
import Head from './table/Head';
import Body from './table/Body';
import CodeBlock from './CodeBlock';
import Heading from './Heading';
import Image from './Image';
import ListWrapper from './list/ListWrapper';
import Item from './list/Item';

import { Link, Typography } from '@mui/material';

type Props = {
    source: string
}

export default function Markdown({ source }: Props) {
    return (
        <ReactMarkdown
            children={source}
            transformLinkUri={(href, children, title) => {
                if (href.endsWith('.md')) {
                    let a = href.replace('.md', '');
                    return `${a}`;
                }
                return href;
            }}
            transformImageUri={(src, alt, title) => {
                return `/static/${src}`;
            }}
            remarkPlugins={[remarkGfm]}
            components={{
                code: CodeBlock,
                p: Typography,
                h1: Heading,
                h2: Heading,
                h3: Heading,
                h4: Heading,
                h5: Heading,
                h6: Heading,
                a: Link,
                td: Cell,
                th: Cell,
                tr: Row,
                table: Table,
                thead: Head,
                tbody: Body,
                ol: ListWrapper,
                ul: ListWrapper,
                li: Item,
                img: Image,
            }}
        />
    )
}