//rafce
import Second from './Second'
import First from './First'
import Sixth, { Fifth, Fourth, Third } from './Third'
import MyRoutes from './MyRoutes'
import { MyContextProvider } from './hooks/MyContext'
import { createContext, useState } from 'react'
import './App.css'
import myStore, { persistor } from './redux/MyStore'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'


export const MyThemeContext = createContext()

const App = () => {
  let [theme, setTheme] = useState('light')


  return (
    <>

      <Provider store={myStore}>
        <PersistGate loading={null} persistor={persistor}>

          <MyThemeContext.Provider value={{ theme, setTheme }}>
            <MyContextProvider>
              <MyRoutes />
            </MyContextProvider>
          </MyThemeContext.Provider>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App

