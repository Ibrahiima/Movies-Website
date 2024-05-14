import React, { useContext } from 'react'
import { ThemeContext } from '../context/theme'
import { LanguageContext } from '../context/language';

export default function Settings() {
  const { theme , setTheme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);

  return (
    <>
      <h2>Settings</h2>
      <hr />
      <h4>Theme</h4>
      <p>Current Theme : {theme}</p>
      <button className='btn btn-secondary' onClick={() => setTheme('dark')}>Dark</button>
      <button className='btn btn-primary mx-4' onClick={() => setTheme('light')}>Light</button>
      <button className='btn btn-success' onClick={() => setTheme('auto')}>Auto</button>

    </>
  )
}
