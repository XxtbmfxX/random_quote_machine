import { useEffect, useState } from "react";
import Circle from "./components/Circle";
import Quote from "./components/Quote";
import Header from "./components/Header";
import UserPage from "./pages/UserPage";
import MainPage from "./pages/MainPage";


import { supabase } from "./supabase/client";
import AuthPage from "./pages/AuthPage";

export default function App() {
  const [user, setUser] = useState("");
  const [session, setSession] = useState({});

  const handleLogOut = async () => {
    const { error } = await supabase.auth.signOut()
    setUser(null)
  }

  useEffect(() => {
      
  supabase.auth.onAuthStateChange((event, session) => {
    console.log( session.user)
    if (session){
      setUser(session?.user?.email ?? null)
      setSession(session?.user ?? null)
    }
  })

  }, []);
  

  return (
    <main> 
      <Header username={user} />
      <p>
      </p>
      {
        user ?
        <AuthPage user={user} />
        :
        <MainPage session={true} />
      }
     </main>
  );
}
