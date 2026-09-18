import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import Fullscreen3DModal from './components/Fullscreen3DModal'
import GlobalCosmos3D from './components/GlobalCosmos3D'
import EpicDetailPage from './components/EpicDetailPage'
import FestivalsPage from './components/FestivalsPage'
import InvalidRoutePage from './components/InvalidRoutePage'
import IntroExperience from './components/IntroExperience'
import { useReducedMotion } from './hooks/useReducedMotion'
import { LanguageProvider } from './i18n'
import {
  ExplorePage,
  ShastraPage,
  TirthaPage,
  ItihasaPage,
  PuranaPage,
  DevataPage,
  SmritiPage,
  YoungSeekersPage,
  VerifyPage,
  DharmaPage,
  SciencePage,
} from './components/ChamberPage'

function getRoute(): { route: string; invalid: boolean } {
  const hash = window.location.hash.replace(/^#/, '')
  if (hash === 'intro') return { route: 'home', invalid: false }
  const allowed = [
    'explore',
    'shastra',
    'tirtha',
    'itihasa',
    'purana',
    'devata',
    'festivals',
    'smriti',
    'young-seekers',
    'verify',
    'dharma',
    'science',
    'epic/ramayana',
    'epic/mahabharata',
  ]
  return { route: allowed.includes(hash) ? hash : 'home', invalid: Boolean(hash) && !allowed.includes(hash) }
}

export default function App() {
  const [reducedMotion, setReducedMotion] = useReducedMotion()
  const [fullscreenOrbitOpen, setFullscreenOrbitOpen] = useState(false)
  const [{ route, invalid: invalidRoute }, setRoute] = useState(getRoute)
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === 'undefined') return false
    const hash = window.location.hash.replace(/^#/, '')
    if (hash === 'intro') return true
    return !localStorage.getItem('aum-intro-seen')
  })

  useEffect(() => {
    const onHash = () => {
      const nextRoute = getRoute()
      setRoute(nextRoute)
      if (window.location.hash === '#intro') {
        setShowIntro(true)
      }
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const navigate = (href: string) => {
    const target = href.replace(/^#/, '')
    window.location.hash = target
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
  }

  const openEpic = (kind: 'ramayana' | 'mahabharata') => {
    window.location.hash = `epic/${kind}`
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
  }

  const backHome = () => {
    window.location.hash = ''
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
  }

  if (route !== 'home' || invalidRoute) {
    const page = (() => {
      switch (route) {
        case 'explore':
          return <ExplorePage onBack={backHome} />
        case 'shastra':
          return <ShastraPage onBack={backHome} onOpenEpic={openEpic} />
        case 'tirtha':
          return <TirthaPage onBack={backHome} />
        case 'itihasa':
          return <ItihasaPage onBack={backHome} onOpenEpic={openEpic} />
        case 'purana':
          return <PuranaPage onBack={backHome} />
        case 'devata':
          return <DevataPage onBack={backHome} />
        case 'festivals':
          return <FestivalsPage onBack={backHome} onNavigate={navigate} />
        case 'smriti':
          return <SmritiPage onBack={backHome} />
        case 'young-seekers':
          return <YoungSeekersPage onBack={backHome} />
        case 'verify':
          return <VerifyPage onBack={backHome} />
        case 'dharma':
          return <DharmaPage onBack={backHome} />
        case 'science':
          return <SciencePage onBack={backHome} />
        case 'epic/ramayana':
        case 'epic/mahabharata':
          return <EpicDetailPage kind={route.split('/')[1] as 'ramayana' | 'mahabharata'} onBack={backHome} />
        default:
          return <InvalidRoutePage onHome={backHome} />
      }
    })()
    return (
      <LanguageProvider>
        <div className="min-h-screen w-full max-w-full bg-void text-gold-200 relative overflow-x-hidden">
          <GlobalCosmos3D reducedMotion={reducedMotion} />
          <Navbar onOpenIntro={() => setShowIntro(true)} />
          {page}
          <Footer />
          <Fullscreen3DModal
            isOpen={fullscreenOrbitOpen}
            onClose={() => setFullscreenOrbitOpen(false)}
            reducedMotion={reducedMotion}
            onToggleReducedMotion={setReducedMotion}
            onNavigate={navigate}
          />
          {showIntro && (
            <IntroExperience
              onComplete={() => {
                setShowIntro(false)
                if (window.location.hash === '#intro') window.location.hash = ''
              }}
              onNavigate={navigate}
            />
          )}
        </div>
      </LanguageProvider>
    )
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen w-full max-w-full bg-void text-gold-200 selection:bg-gold-500/30 selection:text-white relative overflow-x-hidden">
        <GlobalCosmos3D reducedMotion={reducedMotion} />
        <Navbar onOpenIntro={() => setShowIntro(true)} />
        <main className="relative z-10 w-full max-w-full overflow-x-hidden">
          <HeroSection
            reducedMotion={reducedMotion}
            onNavigate={navigate}
            onOpenFullscreenOrbit={() => setFullscreenOrbitOpen(true)}
          />
        </main>
        <Footer />
        <Fullscreen3DModal
          isOpen={fullscreenOrbitOpen}
          onClose={() => setFullscreenOrbitOpen(false)}
          reducedMotion={reducedMotion}
          onToggleReducedMotion={setReducedMotion}
          onNavigate={navigate}
        />
        {showIntro && (
          <IntroExperience
            onComplete={() => {
              setShowIntro(false)
              if (window.location.hash === '#intro') window.location.hash = ''
            }}
            onNavigate={navigate}
          />
        )}
      </div>
    </LanguageProvider>
  )
}
