
import React, { useEffect, useRef, useState } from 'react'

const Skill = () => {
    const divRef = useRef<any>()
    const [isIntoView, setIsIntoView] = useState<boolean>(false)
    useEffect(()=>{
    
      window.addEventListener('scroll',onListenScroll)
      return ()=>{
        window.removeEventListener('scroll',onListenScroll)
      }
    },[])
    const onListenScroll =(e:any)=>{
        if(divRef.current){
            let isIntoView = isInViewport(divRef.current)
            setIsIntoView(isIntoView)
          }
    }
    const isInViewport = (element:any) =>{
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
  return (
    <div className='sec-skill'>
        <div ref={divRef}></div>
    </div>
  )
}

export default Skill