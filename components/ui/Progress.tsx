import React, { ReactElement } from 'react'
import Image from 'next/image'
interface Props {
    
}

export default function Progress({}: Props): ReactElement {
    return (
        <div>
            <Image src='/loading.png' width='100px' height='100px' />
        </div>
    )
}
