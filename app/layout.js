import Link from 'next/link'
import '../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <div className="border-2 border-blue-400 px-8 py-4 ">
          <div className=" text-blue-400 flex flex-wrap gap-2">
            <Link href="/">Home</Link>
            <Link href="/second">Second</Link>
            <Link href="/third">Third</Link>
          </div>

          {children}
        </div>
      </body>
    </html>
  )
}
