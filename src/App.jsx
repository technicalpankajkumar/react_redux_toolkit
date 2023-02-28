import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import Cake from './feature/cake/Cake'
import Icecream from './feature/icecream/icecream'
import Users from './feature/users/users'
function App() {
 
  return(
    <React.Fragment>
      <div className='container-fluid'>
        <h1 className='text-center bg-warning p-3'>Shops Store </h1>
        <Icecream/>
        <Cake/>
        <Users/>
      </div>
      
    </React.Fragment>
  )
}

export default App
