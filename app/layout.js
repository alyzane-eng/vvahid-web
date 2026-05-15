import './globals.css'

export const metadata = {
  title: 'VVAHID — Pakistan\'s Premium Car Rental',
  description: 'Rent premium cars across Pakistan. Verified hosts, insured vehicles, transparent pricing.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}