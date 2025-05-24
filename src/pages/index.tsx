import Head from 'next/head';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio | Dagimawi Tamrat</title>
        <meta name="description" content="Software Engineer Portfolio for Dagimawi Tamrat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
      </main>
    </>
  );
}
