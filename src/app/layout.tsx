import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'react-quill/dist/quill.snow.css';
import { MSWComponent } from './_components/MSWComponent';
import RQProvider from './_components/RQProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '코딩허브 | 강의 게시판',
  description: '강의 관련 게시판입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <MSWComponent />
        <RQProvider>
          <div className="w-full max-w-xl h-full min-h-screen flex justify-center mx-auto px-4 py-32">
            {children}
          </div>
        </RQProvider>
      </body>
    </html>
  );
}
