import { FC, PropsWithChildren} from 'react'
import { IMeta } from './meta.interface'
import Head from 'next/head'

const getTitle = (title: string) => `${title} | Penelopa`
// возращает тайтл с названием сайта

const Meta: FC<PropsWithChildren<IMeta>> = ({title, description, children}) =>{
    // передаем в функцию IMeta, который создали  в файле meta.interface
    return (<>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Righteous&family=Roboto:wght@300&display=swap" rel="stylesheet"/>
            <title>{getTitle(title)}</title>
            {description ? (<>
            <meta name='description' content={description}/>
            <meta name='og:title' content={getTitle(title)}/>
            <meta name='og:description' content={description}/>
            </>) :
            (
            <meta name='robots' content='noindex, nofollow'/>
            )}
        </Head>
        {children}
    </>)
}

export default Meta