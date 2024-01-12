// image loader in next 
import Image from 'next/image'

interface Props {
    src: string
    width: number
    quality?: number
    className?: string
}

const ImageLoader = ({
    src,
    width,
    quality,
    className,
}: Props) => {
    return <Image
        loader={() => src}
        src={src}
        className={className}
        alt='image'
        unoptimized
        unselectable='on'
        width={500}
        height={500}
    />
}

export default ImageLoader