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

    const [displayTime, setDisplayTime] = React.useState(true) //state to manage whether time will be displayed or not

    function getCurrentTime() {
      const today = new Date()
      const dateYear = today.getFullYear()
      const dateMonth = today.getMonth() + 1
      const dateDay = today.getDate()
      const hours = today.getHours()
      const minutes = today.getMinutes()

      const allTemporalData = {
        date: {
          day: dateDay,
          month: dateMonth,
          year: dateYear
        },
        hours: hours,
        minutes: minutes
      }
      return allTemporalData
    
    }

    //Following code checks whether a date element exists on timeData - distinguishing between current and following days
    let displayedTimeData:object = {}
    if (timeData.date === false) {
      const generatedTemporalData = getCurrentTime()
      displayedTimeData = generatedTemporalData
      return(
        <section>
          <p>{displayedTimeData.day}.{displayedTimeData.month}.{displayedTimeData.year}|</p><p>{displayedTimeData.hours}:{displayedTimeData.minutes}</p>
        </section>
      )
    } else {
      const receivedTemporalData = timeData.date
      setDisplayTime(false)
      return(
        <section>
          <p>{receivedTemporalData}</p>
        </section>
      )
    }
  }

  //Displaying city and country 
  //city will be imported from input element state at the moment of searching

  function GeographicalData(inputCity) { 

    const inputCityCapitlaised = ''


    return(
      <div>
        <p>{inputCityCapitlaised}</p>
      </div>
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
      
    </main>
  )
}
