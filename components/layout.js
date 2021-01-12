import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'

const name = 'Kavárna Nox'
export const siteTitle = 'Kavárna Nox'

export default function Layout({children, home}) {
    return (
            <div className={styles.container} className="max-w-xl m-auto lg:my-20 sm:my-10 px-5">
                <Head>
                    <link rel="icon" href="/favicon.ico"/>
                    <meta
                        name="description"
                        content="Learn how to build a personal website using Next.js"
                    />
                    <meta
                        property="og:image"
                        content={`https://og-image.now.sh/${encodeURI(
                            siteTitle
                        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                    />
                    <meta name="og:title" content={siteTitle}/>
                    <meta name="twitter:card" content="summary_large_image"/>
                    <title>{siteTitle}</title>
                </Head>
                <header className={styles.header}>
                    {home ? (
                        <>
                            <h1 className="text-black text-4xl font-bold mb-5">{name}</h1>
                        </>
                    ) : (
                        <>
                            <h2 className={utilStyles.headingLg}>
                                <Link href="/">
                                    <a className={utilStyles.colorInherit}>{name}</a>
                                </Link>
                            </h2>
                        </>
                    )}
                </header>
                <main>{children}</main>
                {!home && (
                    <div className="text-lg font-normal mt-5">
                        <Link href="/">
                            <a>← Zpátky na úvod</a>
                        </Link>
                    </div>
                )}
            </div>
    )
}