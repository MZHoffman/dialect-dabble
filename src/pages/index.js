import { useState } from 'react'
import TranslationForm from '@/components/TranslationForm'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

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
      <CssBaseline />
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'fixed',
        }}
      />
      <Container maxWidth='sm'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            bgcolor: 'transparent',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <TranslationForm
            onTranslate={handleTranslation}
            loading={isLoading}
          />
          <Box mt={2}>{translation}</Box>
        </Box>
      </Container>
    </>
  )
}
