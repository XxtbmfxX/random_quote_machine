import { useEffect, useState } from "react";
import Circle from "./components/Circle";
import Quote from "./components/Quote";
import Header from "./components/Header";
import UserPage from "./pages/UserPage";
import MainPage from "./pages/MainPage";


import { supabase } from "./supabase/client";

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogOut = async () => {
    const { error } = await supabase.auth.signOut()
    setUser(null)
  }

  useEffect(() => {
      
  supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, session)
    if (session){
      setUser(session?.user ?? null)
    }
  })

  }, []);
  

  return (
    <main> 
      <Header/>
      {
        user &&
        <>
        <h1>Hola {user.email}</h1>
        <button className="Button" onClick={handleLogOut} >Log out</button>
        </> 
      }
      <Circle />
      <MainPage/>
    </main>
  );
}
