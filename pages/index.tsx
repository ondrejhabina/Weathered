import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import React from 'react'
import { useState } from 'react'


const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  //Input handling
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
  /////


  function TemporalData(timeData) {
    function getCurrentTime() {
      const today = new Date()
      const date = ''
      const hours = today.getHours()
      const minutes = today.getMinutes()
    }
    const time: string = getCurrentTime() //To be created
    const date: string = '';
    //need more time to come up with a solution for time that includes time being displayed immediately but also reusability of TemporalData component for the following days

    return(
      <></>
    )
  }

  function PrimaryDataDisplay(primaryData) {

    const temperature : string = primaryData.temp
    const weatherCategory : string = primaryData.weatherCategory
    const weatherDescription: string = primaryData.weatherDescription
    

    return (
      <section>
        
      </section>
    )
  }

  return (
    <main>
      <input type={'text'} onChange={getCurrentInput} onKeyDown={(e) => handleEnterSubmit(e)}></input>
      <button onClick={handleSubmit}>Search</button>
      <div>Hello</div>
    </main>
  )
}
