import './globals.css'
import Head from 'next/head';
import Footer from '@/Components/footer';

/* export const metadata = {
  title: 'Carrera Aventura',
  description: '',
} */

export default function Layout({
  children, pagina
}: {
  children: React.ReactNode
  pagina: string;
}) {
  return (
    <div>  
      <Head>
        <title>Carrera Aventura - {pagina} </title>
      </Head>
      {children}
      <Footer />
    </div>

  )
}