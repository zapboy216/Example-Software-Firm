/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/0jVWXrfurdU
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'
import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Landing() {
  return (
    <div>
      <div>
        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Boarding Pass</CardTitle>
              <CardDescription>Flight 123</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-6">
              <img
                alt="QR code"
                className="border"
                height="160"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "160/160",
                  objectFit: "cover",
                }}
                width="160"
              />
            </CardContent>
            <CardFooter>
              <Button>Download</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Seat Map</CardTitle>
              <CardDescription>Find your seat</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-0">
              <img
                alt="Seat map"
                className="border-t"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width="400"
              />
            </CardContent>
            <CardFooter>
              <Button>Upgrade</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Flight Status</CardTitle>
              <CardDescription>Track your flight</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-6">
              <img
                alt="QR code"
                className="border"
                height="160"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "160/160",
                  objectFit: "cover",
                }}
                width="160"
              />
            </CardContent>
            <CardFooter>
              <Button>Track</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Wi-Fi Portal</CardTitle>
              <CardDescription>Connect to Wi-Fi</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-6">
              <img
                alt="QR code"
                className="border"
                height="160"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "160/160",
                  objectFit: "cover",
                }}
                width="160"
              />
            </CardContent>
            <CardFooter>
              <Button>Connect</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}