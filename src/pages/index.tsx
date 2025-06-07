import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Features from './features';
import Header from './header';
import { Testimonial } from '../components/testimonial';

export default function Home(): ReactNode {
  return (
    <Layout
      title={``}
      description=""
    >
      <main className='relative'>
        <div
            className="absolute z-[999] -top-80 left-[50%] translate-x-[-50%] size-[300px] rounded-full bg-white/60 blur-[100px] dark:bg-emerald-500"></div>
        <div className="container mx-auto py-10 space-y-10">
          <Header/>
          <Features/>
          <Testimonial/>
        </div>
      </main>
    </Layout>
  );
}
