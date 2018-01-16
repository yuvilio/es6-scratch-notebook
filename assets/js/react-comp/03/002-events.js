// Import React and React-dom.
import React from 'react'
import ReactDOM from 'react-dom'

import { CloakMember, BlackCloakSociety } from './components/004-compose.jsx'

document.addEventListener('DOMContentLoaded', function (event) {
  console.log('here is 002-events')

  ReactDOM.render(
    <CloakMember name='Mordack' />,
    document.querySelector('#app01Compose')
  )

  ReactDOM.render(
    <BlackCloakSociety names='Mordack,Alhazred,Hagatha' />,
    document.querySelector('#app02Compose')
  )
})
