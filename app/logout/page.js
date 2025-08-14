// "use client";
// import { useEffect } from 'react';
// import { supabase } from '../../lip/supabaseClient';
// import { useRouter } from 'next/navigation';

// export default function Logout() {
//   const router = useRouter();
//   useEffect(() => {
//     supabase.auth.signOut().then(() => router.push('/'));
//   }, []);
//   return <p className="text-center pt-20">Logging out...</p>;
// }
