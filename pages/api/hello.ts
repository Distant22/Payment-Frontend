// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

// import '../styles/globals.css'
// import Header from './Header'

// export default function RootLayout({
//     children,
// }: {
//     children: React.ReactNode
// }) {
//     return (
//         <html>
//             <head></head>
//             <body>
//                 <Header/>
//                 {children}
//             </body>
//         </html>
//     )
// }
