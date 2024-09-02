import './App.css'
import Component from './Component.js'
import ThemeProvider from './contexts/ThemeContext.js'

function App() {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  )
}

export default App
