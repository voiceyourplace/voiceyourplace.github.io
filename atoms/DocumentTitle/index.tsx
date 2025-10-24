import Head from 'next/head'

export default function DocumentTitle({ title }: Readonly<{ title: string }>) {
  return (
    <Head>
      <title>{`${title} | Voice Your Place`}</title>
    </Head>
  )
}
