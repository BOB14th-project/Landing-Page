import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CryptoScanner - 양자내성암호 전환 대상 탐지 도구',
  description: '파일 시스템을 분석하여 PQC Migration이 필요한 암호 알고리즘을 탐지합니다',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
