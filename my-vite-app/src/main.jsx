import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
return(
  <div><h1>cusomApp</h1></div>
)
}

// const ReactElement = {
//   type:'a',
//   props:{
//       href: 'https://google.com',
//       target:'_blank',
//   },
//   children:'click me to visit Google'
// }
const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

const ReactElement = React.createElement(
  'a',
  {
href : 'https://google.com', target :'_blank',
  },
  'click me to visit google'
)

createRoot(document.getElementById('root')).render(
  
  //ReactElement
  <App/>
  
)
