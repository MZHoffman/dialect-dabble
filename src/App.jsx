import { Configuration, OpenAIApi } from 'openai'
import { useState } from 'react'
import TranslationForm from './components/TranslationForm'
import styles from './App.module.css'

const App = () => {
  const API_KEY = import.meta.env.VITE_OPEN_AI_API_KEY
  const configuration = new Configuration({
    apiKey: API_KEY,
  })
  const openai = new OpenAIApi(configuration)

  const [translation, setTranslation] = useState('')

  const handleTranslation = async (inputText, dialect) => {
    console.log(inputText, dialect)

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `translate this to ${dialect} (don't write anything else but trnslation): ${inputText}`,
        },
      ],
      temperature: 0,
    })
    console.log(response)
    setTranslation(response.data.choices[0].message.content)
  }

  return (
    <>
      <div className={styles.mainContainer}>
        <TranslationForm onTranslate={handleTranslation} />
        <div className={styles.translationContainer}>
          <div className={styles.translationResult}>{translation}</div>
        </div>
      </div>
    </>
  )
}

export default App
