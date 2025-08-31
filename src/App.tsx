import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'
import { ThemeProvider } from './context/ThemeContext'
import './App.css'

function App() {
  const [content, setContent] = useState<any>(null)

  useEffect(() => {
    // In a real application, this would typically be an API call
    import('./data/content.json')
      .then((data) => setContent(data.default))
      .catch(console.error)
  }, [])

  if (!content) {
    return <div>Loading...</div>
  }

  return (
    <ThemeProvider>
      <div className="app">
        <header>
          <div className="header-content">
            <div>
              <h1>{content.company.name}</h1>
              <p>{content.company.tagline}</p>
            </div>
            <ThemeToggle />
          </div>
        </header>

        <main>
          <Hero
            title={content.hero.title}
            subtitle={content.hero.subtitle}
            ctaButton={content.hero.ctaButton}
          />

          <Features features={content.features} />

          <Contact
            title={content.contact.title}
            email={content.contact.email}
            phone={content.contact.phone}
            address={content.contact.address}
          />
        </main>

        <footer>
          <p>&copy; 2025 {content.company.name}. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
