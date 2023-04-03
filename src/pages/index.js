import { useState } from 'react'
import TranslationForm from '@/components/TranslationForm'

export default function Home() {
  const [translation, setTranslation] = useState('')
  const [isLoading, seIsLoading] = useState(false)

  const handleTranslation = async (inputText, dialect) => {
    seIsLoading(true)
    const response = await fetch(
      `api/get-openai-response?dialect=${dialect}&inputText=${inputText}`
    )
    const translationData = await response.json()
    setTranslation(translationData.choices[0].message.content)
    seIsLoading(false)
  }
  return (
    <>
      <TranslationForm onTranslate={handleTranslation} />
      <div> {isLoading ? 'Translation is loading' : translation}</div>
    </>
  )
}
