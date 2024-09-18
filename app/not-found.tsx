import React from 'react'
import Link from 'next/link'

type Props = {}

export default function notfound({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
    <h1 className="text-9xl font-extrabold animate-bounce">404</h1>
    <h2 className="text-4xl font-semibold mt-4 animate-fade-in-down">
      Oups ! Vous êtes perdu ?
    </h2>
    <p className="text-xl mt-2 animate-fade-in-down delay-500">
      La page que vous cherchez n'existe pas.
    </p>
    <div className="mt-8 animate-fade-in-up delay-700">
      <Link href="/ui/dashboard" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
        Retour à l'accueil
      </Link>
    </div>
  </div>
  )
}