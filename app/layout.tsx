import './globals.css'
import icon from './assets/img/mockups/ide.png';
import { Inter } from 'next/font/google'
import { Metadata } from 'next';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vinicius José',
  description: 'Olá, sou Vinicius José, Estagiário em Desenvolvimento Web, estou cursando Análise e Desenvolvimento de Sistemas, com formação prevista para 06/2024. Atuo na área desde junho/2023.',
  authors: {
    name: "Vinicius José",
    url: "https://github.com/Vinicius-1307"
  },
  applicationName: "Portifolio de Vinicius José",
  colorScheme: "normal",
  themeColor: "#1B98E0",
  generator: "Next.js",
  category: "Portfolio",
  creator: "Vinicius José",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel='icon' href='./favicon.ico'/>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
