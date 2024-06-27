import Head from 'next/head'

type DocumentHeadProps = {
  title: string
  description: string
  faviconUrl: string
}

const DocumentHead = ({title, description, faviconUrl = '/favicon.ico'}: DocumentHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={faviconUrl} />
    </Head>
  )
}

export default DocumentHead
