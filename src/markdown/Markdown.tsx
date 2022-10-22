import React, { useEffect } from 'react';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useLocation } from 'react-router-dom';
import remarkUnwrapImages from 'remark-unwrap-images';
import rehypeSlug from 'rehype-slug'

import Row from './table/Row';
import Table from './table/Table';
import Cell from './table/Cell';
import Head from './table/Head';
import Body from './table/Body';
import CodeBlock from './CodeBlock';
import Heading from './Heading';
import Image from './Image';
import Link from './Link';
import ListWrapper from './list/ListWrapper';
import Item from './list/Item';
import Paragraph from './Paragraph';
import { genURL, convertRelativePath } from '../navigation/docs';
import HorizontalRule from './HorizontalRule';


type Props = {
    source: string
}

export default function Markdown({ source }: Props) {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1);
            const anchor = document.getElementById(id);

            if (anchor) {
                anchor.scrollIntoView({ behavior: "auto" });
                window.scrollBy(0, -80);
            }
        }
    }, []);

    return (
        <ReactMarkdown
            children={source}
            transformLinkUri={(href: string) => {
                if (href.startsWith('http') || href.startsWith('#')) {
                    return href;
                }

                let path = convertRelativePath(href, location.pathname);
                return genURL(path);
            }}
            transformImageUri={(src: string) => {
                return `/static/${src}`;
            }}
            remarkPlugins={[remarkGfm, remarkUnwrapImages]}
            rehypePlugins={[rehypeRaw, rehypeSlug]}
            components={{
                // @ts-ignore
                code: CodeBlock,
                // @ts-ignore
                p: Paragraph,
                // @ts-ignore
                h1: Heading,
                // @ts-ignore
                h2: Heading,
                // @ts-ignore
                h3: Heading,
                // @ts-ignore
                h4: Heading,
                // @ts-ignore
                h5: Heading,
                // @ts-ignore
                h6: Heading,
                // @ts-ignore
                a: Link,
                // @ts-ignore
                td: Cell,
                // @ts-ignore
                th: Cell,
                // @ts-ignore
                tr: Row,
                // @ts-ignore
                table: Table,
                // @ts-ignore
                thead: Head,
                // @ts-ignore
                tbody: Body,
                // @ts-ignore
                ol: ListWrapper,
                // @ts-ignore
                ul: ListWrapper,
                // @ts-ignore
                li: Item,
                // @ts-ignore
                img: Image,
                // @ts-ignore
                hr: HorizontalRule,
            }}
        />
    )
}