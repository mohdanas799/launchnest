// "use client";
// import { useEffect, useState } from 'react';
// import { supabase } from '../../lip/supabaseClient';
// import { useRouter } from 'next/navigation';

// export default function Dashboard() {
//   const [user, setUser] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     supabase.auth.getUser().then(({ data }) => {
//       if (!data.user) router.push('/login');
//       else setUser(data.user);
//     });
//   }, []);

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl">Dashboard</h1>
//       {user && <p>Welcome, {user.email}</p>}
//     </div>
//   );
// }
