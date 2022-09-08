import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import nextjs from "../assets/nextjs.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"
import firebase from "../assets/firebase (2).png"
import mongodb from "../assets/mongodb.png"
import node from "../assets/node (2).png"
import express from "../assets/express.js.png"


const Experience = () => {

  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
{
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: javascript,
      title: 'JAVASCRIPT',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: reactImage,
      title: 'REACT JS',
      style: 'shadow-blue-500'
    },
    {
      id: 5,
      src: nextjs,
      title: 'NEXT JS',
      style: 'shadow-white'
    },
    {
      id: 6,
      src: tailwind,
      title: 'TAILWIND',
      style: 'shadow-sky-400'
    },
    {
      id: 7,
      src: github,
      title: 'GITHUB',
      style: 'shadow-gray-400'
    },
    {
      id: 8,
      src: firebase,
      title: 'FIREBASE',
      style: 'shadow-yellow-400'
    },
    {
      id: 9,
      src: mongodb,
      title: 'MONGO DB',
      style: 'shadow-green-600'
    },
    {
      id: 10,
      src: node,
      title: 'NODE',
      style: 'shadow-green-400'
    },
    {
      id: 11,
      src: express,
      title: 'EXPRESS JS',
      style: 'shadow-yellow-400'
    },
  ]


  return (
    <div name="experience "
     className=' bg-gradient-to-b 
    from-gray-800 to-black
    '>

      <div className='max-w-screen-lg   mx-auto pt-16 p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className='mt-40'>
        <p className='text-4xl font-bold boarder-b-4 border-gray-500 p-2 inline'>Experience</p>
        <p className='py-6'>These are technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          
          {
            techs.map(({id, src,title,style}) => (
              <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className='w-20 mx-auto'/>
              <p className='mt-4'>{title}</p>
            </div>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Experience;
