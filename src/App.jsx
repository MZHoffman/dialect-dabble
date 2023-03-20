import { Configuration, OpenAIApi } from 'openai'
import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const API_KEY = import.meta.env.VITE_OPEN_AI_API_KEY
  const configuration = new Configuration({
    apiKey: API_KEY,
  })
  const openai = new OpenAIApi(configuration)

  const inputText =
    'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.'

  const [responseText, setResponseText] = useState('')

  useEffect(() => {
    const generateResponse = async () => {
      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: `translate this to cockney (do not write anything else but trnslation): ${inputText}`,
          },
        ],
        temperature: 0,
      })
      setResponseText(response.data.choices[0].message.content)
    }
    generateResponse()
  }, [])

  return <div>{responseText}</div>
}

export default App
