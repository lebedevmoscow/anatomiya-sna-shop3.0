import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import parse, { domToReact } from 'html-react-parser'

import common_styles from './../../styles/common.module.sass'

const AboutMattrasses = ({ mattrassesText }) => {
    const [Data, SetData] = useState(null)
    const containerRef = useRef(null)

    const ParseOptions = {
        replace: (domNode) => {
            if (domNode.name === 'img') {
                return (
                    <img
                        src={
                            'https://www.anatomiyasna.ru' + domNode.attribs.src
                        }
                    ></img>
                    // <Image
                    //     src={
                    //         'https://www.anatomiyasna.ru' + domNode.attribs.src
                    //     }
                    //     width={170}
                    //     height={91}
                    // />
                )
            }
        },
    }

    useEffect(() => {
        setTimeout(() => {
            let text = mattrassesText
            SetData(parse(text, ParseOptions))
        }, 0)
    }, [])

    return (
        <div ref={containerRef} className={common_styles.container}>
            {Data}
        </div>
    )
}

export default AboutMattrasses
