import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './componenets/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const newCardData ={
    names : "Dog",
    image:"https://images.pexels.com/photos/29443620/pexels-photo-29443620/free-photo-of-portrait-of-a-sitting-husky-dog-in-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  };
  const catData = {
    names : "Cat",
    image: "https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg",
  };
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind test</h1>
{/*    
    <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/29443620/pexels-photo-29443620/free-photo-of-portrait-of-a-sitting-husky-dog-in-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}
<div>
   <Card userInfo ={newCardData}
  />
   <Card userInfo ={catData} />
   </div>

    
   

   
    </>
  )
}

export default App
