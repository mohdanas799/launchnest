import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'LaunchNest',
  description: 'SaaS Starter Template',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}