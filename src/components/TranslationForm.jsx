import React, { useState } from 'react'
import {
  Box,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'
import { LoadingButton } from '@mui/lab'

const TranslationForm = ({ onTranslate, loading }) => {
  const [inputText, setInputText] = useState('')
  const [dialect, setDialect] = useState('Cockney')

  const handleSubmit = (event) => {
    event.preventDefault()
    onTranslate(inputText, dialect)
  }

  const handleInputChange = (event) => {
    setInputText(event.target.value)
  }

  const handleDialectChange = (event) => {
    setDialect(event.target.value)
  }

  return (
    <Box component='form' sx={{ width: '100%' }} onSubmit={handleSubmit}>
      <FormControl fullWidth margin='normal'>
        <TextField
          id='text-to-translate'
          label='Text to Translate'
          multiline
          rows={4}
          value={inputText}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl fullWidth sx={{ width: '100%' }} margin='normal'>
        <InputLabel id='dialect-select'>Dialect</InputLabel>
        <Select
          labelId='dialect-select'
          id='dialect'
          label='Dialect'
          value={dialect}
          onChange={handleDialectChange}
          sx={{ width: '100%' }}
        >
          <MenuItem value='Cockney'>Cockney</MenuItem>
          <MenuItem value='Ye Olde English'>Ye Olde English</MenuItem>
          <MenuItem value='American English'>American English</MenuItem>
          <MenuItem value='British English'>British English</MenuItem>
          <MenuItem value='Posh English'>Posh English</MenuItem>
          <MenuItem value='Australian English'>Australian English</MenuItem>
        </Select>
      </FormControl>

      <LoadingButton
        sx={{ width: '100%' }}
        type='submit'
        variant='contained'
        color='primary'
        loadingPosition='start'
        loading={loading}
      >
        Translate
      </LoadingButton>
    </Box>
  )
}

export default TranslationForm
