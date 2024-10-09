import { MouseEventHandler } from 'react'


export interface IImageCardProps {
    alt: string;
    src: string;
    onClick: MouseEventHandler<HTMLImageElement>;
}