import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import React from 'react'
import { useState } from 'react'


const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  const [input, setInput] = React.useState('')

  function getCurrentInput(value) {
    const inputValue = value.target.value;
    setInput(inputValue)
  }

  
  function handleSubmit() {
    let submittedCity = input
    console.log(submittedCity);
  }

  function handleEnterSubmit (event) {
    if(event.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <main>
      <input type={'text'} onChange={getCurrentInput} onKeyDown={(e) => handleEnterSubmit(e)}></input>
      <button onClick={handleSubmit}></button>
      <div>Hello</div>
    </main>
  )
}
