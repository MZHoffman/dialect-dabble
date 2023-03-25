import React, { useState } from 'react'
import styles from './TranslationForm.module.css'

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
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.inputContainer}>
        <input
          id='inputText'
          type='text'
          value={inputText}
          onChange={handleInputChange}
          placeholder='Enter text to translate'
        />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor='dialect'>Select Dialect</label>
        <div className={styles.selectButtonContainer}>
          <select id='dialect' value={dialect} onChange={handleDialectChange}>
            <option value='Cockney'>Cockney</option>
            <option value='Middle English'>Ye Olde English</option>
            <option value='American English'>American English</option>
            <option value='British English'>British English</option>
            <option value='Posh English'>Posh English</option>
            <option value='Australian English'>Australian English</option>
          </select>
          <button type='submit'>Translate</button>
        </div>
      </div>
    </form>
  )
}

export default TranslationForm
