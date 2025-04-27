import { useState } from 'react'
import Header from './components/Header'
import Services from './components/Services'
import ContactForm from './components/ContactForm.jsx'
import Gallery from './components/Gallery.jsx'
import Footer from './components/Footer.jsx'

function App() {

  const [language, setLanguage] = useState('en');

  return (
    <>
    <main className="min-h-screen flex flex-col w-full">
      <Header setLanguage={setLanguage} language={language} />
      <Gallery />
      <Services language={language} />
      <ContactForm language={language}/>
      <Footer language={language}/>
    </main>
    </>
  )
}

export default App
