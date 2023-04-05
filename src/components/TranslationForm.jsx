import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { LoadingButton } from '@mui/lab'
import { height } from '@mui/system'

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
    <form onSubmit={handleSubmit}>
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

      <FormControl fullWidth margin='normal'>
        <InputLabel id='dialect-select'>Dialect</InputLabel>
        <Select
          labelId='dialect-select'
          id='dialect'
          label='Dialect'
          value={dialect}
          onChange={handleDialectChange}
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
        sx={{ width: '100%', height: '100%' }}
        type='submit'
        variant='contained'
        color='primary'
        loadingPosition='start'
        loading={loading}
        //loadingIndicator='Translation Loading…'
      >
        <span>Translate</span>
      </LoadingButton>
    </form>
  )
}

export default TranslationForm
