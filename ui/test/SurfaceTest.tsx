
import React from 'react'

import SurfaceAdd from '../../view/001.SurfaceRemove'
import SurfaceRemove from '../../view/001.SurfaceRemove'

const Test = (bus) => {



  setInterval( ()=>{

    setTimeout( ()=> SurfaceAdd('fce00'), 1111)
    setTimeout( ()=> SurfaceRemove('fce00'), 2111)


  }, 2222)

  


  






  return (
    <div>
      Testing Surface ADD 
    </div>
  )


}

export default Test


