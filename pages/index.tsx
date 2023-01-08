import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useRef } from 'react';
import React from 'react';

const inter = Inter({ subsets: ['latin'] })


function handleSubmit() {
  let submittedTodo = '';
  if (submittedTodo === '') {
    return
  }
}

export default function Home() {
  return (
    <main>
      <input type={'text'}></input>
      <div>Hello</div>
    </main>
  )
}
