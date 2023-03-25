import { useState } from 'react'
import TranslationForm from './components/TranslationForm'
import styles from './App.module.css'
const App = () => {
  const [translation, setTranslation] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleTranslation = async (inputText, dialect) => {
    setIsLoading(true)
    try {
      const response = await fetch('http://localhost:3081/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputText,
          dialect: dialect,
        }),
      })
      const data = await response.json()
      setTranslation(data.data)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  return (
    <>
      <div className={styles.mainContainer}>
        <TranslationForm onTranslate={handleTranslation} />
        <div className={styles.translationContainer}>
          <div className={styles.translationResult}>
            {isLoading ? 'Translation is loading' : translation}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
