import Header from './components/Header'
import Footer from './components/Footer'
import ProfileCard from './components/ProfileCard'
import './style.css'

function App() {
  return (
    <>
      <Header title="IWaMAD · Week 3" subtitle="Profile Card" />

      <main>
        <ProfileCard
          name="Adilbek"
          role="Aspiring Web Developer"
          avatarUrl="https://picsum.photos/168/168"
          bio="Aspiring web developer interested in Python, Django, cloud computing, and modern web technologies."
          email="idealpirnazarov@gmail.com"
          githubUrl="https://github.com/Adilbek679"
          skills={[
            { id: 1, label: 'AWS' },
            { id: 2, label: 'Django REST' },
            { id: 3, label: 'Cisco networking' },
            { id: 4, label: 'pandas' },
            { id: 5, label: 'HTML5 / CSS' },
            { id: 6, label: 'JavaScript' },
          ]}
        />
      </main>

      <Footer year={2026} author="Adilbek" />
    </>
  )
}

export default App