// "use client";
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';
// import { supabase } from '../../lip/supabaseClient';

// export default function Signup() {
//   const router = useRouter();
//   const [error, setError] = useState(null);

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     const { error } = await supabase.auth.signUp({ email, password });
//     if (error) setError(error.message);
//     else router.push('/dashboard');
//   };

//   return (
//     <form onSubmit={handleSignup} className="max-w-md mx-auto pt-20">
//       <h2 className="text-2xl font-bold mb-4">Signup</h2>
//       <input name="email" type="email" placeholder="Email" className="w-full border p-2 mb-2" />
//       <input name="password" type="password" placeholder="Password" className="w-full border p-2 mb-2" />
//       <button className="bg-green-600 text-white px-4 py-2">Signup</button>
//       {error && <p className="text-red-500 mt-2">{error}</p>}
//     </form>
//   );
// }