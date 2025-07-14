"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between">
      <h1 className="text-xl font-bold">LaunchNest</h1>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
        <Link href="/logout">Logout</Link>
      </div>
    </nav>
  );
}