import React from 'react'
import './homepage.scss'

const homePage = () =>{
  return(<div className='homepage'>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'> Hats</h1>
            <span className='subtitle'>shop now</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'> Jackets</h1>
            <span className='subtitle'>shop now</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'> sneakers</h1>
            <span className='subtitle'>shop now</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'> women</h1>
            <span className='subtitle'>shop now</span>
        </div>
      </div>


      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'> men</h1>
            <span className='subtitle'>shop now</span>
        </div>
      </div>

    </div>
  </div>)
}

export default homePage;