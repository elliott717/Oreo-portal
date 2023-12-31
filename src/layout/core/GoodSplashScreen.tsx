import {createContext, Dispatch, SetStateAction, useContext, useEffect, useState} from 'react'

const GoodSplashScreenContext = createContext<Dispatch<SetStateAction<number>> | undefined>(
  undefined
)

function GoodSplashScreenProvider({children}: any) {
  const [count, setCount] = useState(0)
  let visible = count > 0

  useEffect(() => {
    const splashScreen = document.getElementById('splash-screen')

    // Show SplashScreen
    if (splashScreen && visible) {
      splashScreen.classList.remove('hidden')

      return () => {
        splashScreen.classList.add('hidden')
      }
    }

    // Hide SplashScreen
    let timeout: number
    if (splashScreen && !visible) {
      timeout = window.setTimeout(() => {
        splashScreen.classList.add('hidden')
      }, 3000)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [visible])

  return (
    <GoodSplashScreenContext.Provider value={setCount}>{children}</GoodSplashScreenContext.Provider>
  )
}
type Props = {
  visible?: boolean
}
function LayoutSplashScreen({visible = true}: Props) {
  // Everything are ready - remove splashscreen
  const setCount = useContext(GoodSplashScreenContext)

  useEffect(() => {
    if (!visible) {
      return
    }

    if (setCount) {
      setCount((prev) => {
        return prev + 1
      })
    }

    return () => {
      if (setCount) {
        setCount((prev) => {
          return prev - 1
        })
      }
    }
  }, [setCount, visible])

  return null
}

export {GoodSplashScreenProvider, LayoutSplashScreen}
