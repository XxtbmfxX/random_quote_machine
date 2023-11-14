import React, { useState } from 'react'

import {supabase} from '../supabase/client'
import { Link } from 'react-router-dom';

export default function LoginForm() {

    const [email, setEmail] = useState('');


    const sendMagicLink = async (e) => {
        e.preventDefault()

        try{

            const { data, error } = await supabase.auth.signInWithOtp({
                email: email,
                options: {
                    emailRedirectTo: 'http://localhost:5173'
                }
            })

            console.log(data, error)

        }
        catch (error) {
            console.log(error)
        }
    }



  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <Link to="/" >
      <button className='Button'> Go back </button>
      </Link>
    <div className="bg-white p-10 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <form className="space-y-6" onSubmit={sendMagicLink}>
        <div>
          <label htmlFor="email" className="block text-gray-800 font-bold mb-2">
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
          <button
            type="submit"
            className="Button"
          >
            Send Magic Link
          </button>
        </div>
      </form>

    </div>
  </div>

  )
}
