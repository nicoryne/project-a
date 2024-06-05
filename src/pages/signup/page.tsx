import React, { FormEventHandler, useState } from "react";
import { signup } from "./actions";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-light text-gray-900 md:text-2xl">
            Sign Up
          </h1>
          <form className="space-y-4 md:space-y-6">
            <div className="flex flex-column justify-between">
              <div>
              <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="first-name">First Name</label>
              <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 block w-[95%] p-2.5" id="first-name" name="first-name" type="text" required />
              </div>
              <div>
              <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="last-name">Last Name</label>
              <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5" id="last-name" name="last-name" type="text" required />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="email">Email</label>
              <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5" id="email" name="email" type="email" required />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="password">Password</label>
              <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5"  id="password" name="password" type="password" required />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="verify-password">Verify Password</label>
              <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5"  id="verify-password" name="verify-password" type="password" required />
            </div>
            <button className="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" formAction={signup}>Sign Up</button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet? <Link href="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
