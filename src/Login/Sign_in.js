import React from 'react'
import Header from '../Dashbord/Header/Header'
import './sign_in.css'
import {signInWithGoogle} from '../firebase/firebase.util'
import { Link } from "react-router-dom";

function Sign_in({Sign_user,addcart,setmode}) {
  console.log(signInWithGoogle)
    return (
      <>
      <Header
      setmode={setmode}
      addcart={addcart}
      Sign_user={Sign_user}
    />
    <div className='bgcolor'>
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8 Card">
      <div>
      <Link to="/"><h1 className='text-3xl text-center font-extrabold text-white-900'>E-commerce</h1></Link>
        <h2 className="mt-6 text-center text-3xl font-bold text-white-900">Sign in to your account</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <Link to="/Sign_Up" className="font-medium text-indigo-600 hover:text-indigo-500"> Click here for Sign Up</Link>
           
        </p>
      </div>
      <form className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-white-900">
              Remember me
            </label>
          </div>

          <div className="text-sm">
          
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group m-2 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <div className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            Sign in
          </button>
          <button
            type="submit"
            className="group m-2 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
         onClick={signInWithGoogle}
         >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <div className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            Sign in with Google
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
</>
  )
}

export default Sign_in