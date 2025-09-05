import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'
import ProductsAndServices from './components/ProductsAndServices'
import Footer from './components/Footer'
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

  // Show loading only if we have no content at all
  if (!content && typeof content !== 'object') {
    return <div>Loading...</div>
  }

  // Initialize content with empty object if it's null
  const safeContent = content || {}

  return (
    <ThemeProvider>
      <div className="app">
        <header>
          <div className="header-content">
            <div>
              <h1>{safeContent.company?.name || 'Company Name'}</h1>
              <p>{safeContent.company?.tagline || 'Company Tagline'}</p>
            </div>
            <ThemeToggle />
          </div>
        </header>

        <main>
          {safeContent.hero && (
            <section className="section-container">
              <div className="content-container">
                <Hero
                  title={safeContent.hero.title}
                  subtitle={safeContent.hero.subtitle}
                  ctaButton={safeContent.hero.ctaButton}
                />
              </div>
            </section>
          )}

          {(safeContent.products || safeContent.services) && (
            <ProductsAndServices
              products={safeContent.products || []}
              services={safeContent.services || []}
            />
          )}

          {safeContent.contact && (
            <section className="section-container contact">
              <div className="content-container">
                <Contact
                  title={safeContent.contact.title}
                  email={safeContent.contact.email}
                  phone={safeContent.contact.phone || safeContent.phone}
                  address={safeContent.contact.address || safeContent.address}
                />
              </div>
            </section>
          )}
        </main>
        <Footer 
          companyName={safeContent.company?.name}
          footerData={safeContent.footer}
        />
      </div>
    </ThemeProvider>
  )
}

export default App
