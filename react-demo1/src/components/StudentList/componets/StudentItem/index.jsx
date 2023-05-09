import React, { useContext } from 'react'
import ThemeContext from '../../../../context/themeContext'

export default function StudentItem(props) {
  const contextValue = useContext(ThemeContext)
  return (
    <div style={{background:contextValue==='light'?'#fff':'#666'}}>
      name:{props.name}
      age:{props.age}
    </div>
  )
}
