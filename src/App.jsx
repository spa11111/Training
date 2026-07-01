 //rafce
import Second from './Second'
import First from './First'
import Sixth, { Fifth, Fourth, Third } from './Third'
import MyRoutes from './MyRoutes'
import { MyContextProvider } from './hooks/MyContext'
import { createContext, useState } from 'react'
import './App.css'
import myStore from './redux/MyStore'
import { Provider } from 'react-redux'

export const MyThemeContext = createContext()

const App = () => {
  let[theme, setTheme] = useState('light')


  return (
    <>

    <Provider store = {myStore}>
    <MyThemeContext.Provider value={{theme, setTheme}}>
    <MyContextProvider>
      <MyRoutes/>
    </MyContextProvider>
    </MyThemeContext.Provider>
    </Provider>
    </>
  )
}

export default App

