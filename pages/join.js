import Layout from '../components/layout'
import Head from 'next/head'
import Form from '../components/Form'
// Add this line
import utilStyles from '../styles/utils.module.scss'

export default function Post() {
    return (
        <Layout>
            <Head>
                <title>Přihlášení hosta</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>Přihlášení hosta</h1>
                
                <Form></Form>
            </article>
        </Layout>
    )
}