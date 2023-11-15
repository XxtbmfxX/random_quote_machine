import React, { useState } from "react";

import { supabase } from "../supabase/client";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const sendMagicLink = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          emailRedirectTo: "http://localhost:5173",
        },
      });

      console.log(data, error);
      setMessage("Ya puede cerrar esta página")
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  const ErrorComponent = ({ mensaje }) => {
    return (
      <div
        style={{
          color: "red",
          border: "1px solid red",
          padding: "10px",
          margin: "10px 0",
        }}
      >
        <strong>Error:</strong> {mensaje}
      </div>
    );
  };

  error && <ErrorComponent mensaje={error} />;

  return (
  <>
    
      <Header/>
    <section className=" relative flex flex-col items-center justify-center h-screen bg-gray-200">
      <article className="bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <form className="space-y-6" onSubmit={sendMagicLink}>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-800 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div>
            <button type="submit" className="Button">
              Send Magic Link
            </button>
          </div>
        </form>

        
      </article>
      {message && (
        <div className="bg-green-200 border-l-4 border-green-500 text-green-800 p-4 mt-4">
          <p className="font-bold">Mensaje de confirmación:</p>
          <p>Debe acceder a la página desde su correo</p>
          <span>Ya puede cerrar esta ventana</span>
        </div>
      )}
    </section>
   
    </>

  );
}
