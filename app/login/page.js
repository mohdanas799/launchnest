"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { supabase } from '../../lip/supabaseClient';

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    else router.push('/dashboard');
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input name="email" type="email" placeholder="Email" className="w-full border p-2 mb-2" />
      <input name="password" type="password" placeholder="Password" className="w-full border p-2 mb-2" />
      <button className="bg-blue-600 text-white px-4 py-2">Login</button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
}