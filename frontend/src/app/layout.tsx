import './globals.css';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white flex flex-col items-center">
        <Navbar />
        {children}
        <footer className="mt-16">
          <div className="flex space-x-4 justify-center items-center">
            <span>Copyright © 2024</span>
          </div>
        </footer>
      </body>
    </html>
  );
}