import React, { useState } from 'react'

const TranslationForm = ({ onTranslate }) => {
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
      <label htmlFor='inputText'>Enter text to translate</label>
      <input
        id='inputText'
        type='text'
        value={inputText}
        onChange={handleInputChange}
      />

      <label htmlFor='dialect'>Select Dialect</label>
      <select id='dialect' value={dialect} onChange={handleDialectChange}>
        <option value='Cockney'>Cockney</option>
        <option value='Middle English'>Ye Olde English</option>
        <option value='American English'>American English</option>
        <option value='British English'>British English</option>
        <option value='Posh English'>Posh English</option>
        <option value='Australian English'>Australian English</option>
      </select>
      <button type='submit'>Translate</button>
    </form>
  )
}

export default TranslationForm
