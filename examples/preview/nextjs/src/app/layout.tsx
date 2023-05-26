import '../css/app.scss'
import { AdminBar } from '@/components/AdminBar'
import { Header } from '@/components/Header'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout(props: {
  children: React.ReactNode
  draft: React.ReactNode
}) {
  const { children, draft } = props

  return (
    <html lang="en">
      <body>
        {/* The errors are ignored here are related to @types/react and typescript not
        aligning with their implementations of Promise-based server components.
        This can be removed once these dependencies are resolved in their respective modules. 
        - https://github.com/vercel/next.js/issues/42292
        - https://github.com/vercel/next.js/issues/43537
        */}
        {/* @ts-expect-error */}
        <AdminBar />
        {/* @ts-expect-error */}
        <Header />
        {children}
        {draft}
      </body>
    </html>
  )
}
