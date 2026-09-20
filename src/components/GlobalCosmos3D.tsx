import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Float, Html } from '@react-three/drei'
import * as THREE from 'three'
import { useWebGLSupport } from '../hooks/useWebGLSupport'

interface GlobalCosmos3DProps {
  reducedMotion: boolean
}

/** Floating background sacred geometric meshes that drift throughout the page scroll */
function FloatingSacredGeometry({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null)
  const scrollOffset = useRef(0)
  const mousePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      scrollOffset.current = maxScroll > 0 ? window.scrollY / maxScroll : 0
    }
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useFrame((state, delta) => {
    if (!groupRef.current) return
    const time = state.clock.getElapsedTime()

    if (!reducedMotion) {
      // Rotate overall galaxy group based on time and scroll position
      groupRef.current.rotation.y = time * 0.03 + scrollOffset.current * Math.PI * 2
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mousePos.current.y * 0.15 + scrollOffset.current * 0.5,
        delta * 2
      )
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        mousePos.current.x * 0.15,
        delta * 2
      )

      // Move camera target / group position vertically based on scroll
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        scrollOffset.current * -6,
        delta * 3
      )
    }
  })

  return (
    <group ref={groupRef}>
      {/* Atmospheric cosmic depth */}


      {/* Subtle floating Sanskrit — atmospheric depth, never interactive */}
      {[
        ['ॐ', -7, 6, -4, 24], ['श्री', 7, 4, -5, 18], ['वेदाः', -8, -2, -7, 13],
        ['धर्मः', 8, -5, -6, 14], ['ज्ञानम्', -6, -11, -5, 13], ['भक्तिः', 7, -15, -6, 14],
        ['मोक्षः', -9, -20, -7, 12], ['सत्यं', 8, -24, -6, 12],
      ].map(([word, x, y, z, size]) => (
        <Float key={`${word}-${x}-${y}`} speed={0.35} rotationIntensity={0.03} floatIntensity={0.18}>
          <group position={[x as number, y as number, z as number]}>
            <Html center style={{ pointerEvents: 'none', whiteSpace: 'nowrap' }}>
              <span className="font-deva select-none text-gold-300/30 tracking-wider" style={{ fontSize: `${size}px`, textShadow: '0 0 22px rgba(232,197,107,.22)' }}>{word}</span>
            </Html>
          </group>
        </Float>
      ))}
    </group>
  )
}

/** 3D Cosmic Particle Cloud spanning the entire depth */
function CosmicParticles({ reducedMotion }: { reducedMotion: boolean }) {
  const pointsRef = useRef<THREE.Points>(null)
  const count = 420

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const colorGold = new THREE.Color('#e8c56b')
    const colorPurple = new THREE.Color('#9b6fd0')
    const colorCyan = new THREE.Color('#6fb7c9')
    const colorWhite = new THREE.Color('#ffffff')

    for (let i = 0; i < count; i++) {
      // Distribute particles widely along X, Y (downwards), Z
      pos[i * 3] = (Math.random() - 0.5) * 35
      pos[i * 3 + 1] = (Math.random() - 0.5) * 60
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30 - 5

      const mix = Math.random()
      let c = colorGold
      if (mix < 0.4) c = colorGold
      else if (mix < 0.65) c = colorPurple
      else if (mix < 0.85) c = colorCyan
      else c = colorWhite

      col[i * 3] = c.r
      col[i * 3 + 1] = c.g
      col[i * 3 + 2] = c.b
    }
    return [pos, col]
  }, [])

  useFrame((_, delta) => {
    if (!pointsRef.current || reducedMotion) return
    pointsRef.current.rotation.y += delta * 0.004
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.65}
        sizeAttenuation
      />
    </points>
  )
}

export default function GlobalCosmos3D({ reducedMotion }: GlobalCosmos3DProps) {
  const webglSupported = useWebGLSupport()

  if (!webglSupported) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-35">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        dpr={[1, 1.25]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} color="#2b2048" />
        <directionalLight position={[10, 10, 5]} intensity={0.8} color="#e8c56b" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#5b4a9c" />

        <Stars
          radius={50}
          depth={40}
          count={reducedMotion ? 300 : 700}
          factor={2.2}
          fade
          speed={reducedMotion ? 0 : 0.12}
        />
        <CosmicParticles reducedMotion={reducedMotion} />
        <FloatingSacredGeometry reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  )
}
