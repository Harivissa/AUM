import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Html, OrbitControls, Stars, Torus } from '@react-three/drei'
import * as THREE from 'three'

import vedicImg from '../assets/images/vedic_manuscript_1789619549504.jpg'
import tirthaImg from '../assets/images/sacred_temple_1789619561869.jpg'
import smritiImg from '../assets/images/civilization_memory_1789619576878.jpg'
import dharmaImg from '../assets/images/dharma_wheel_1789619590191.jpg'
import festivalsImg from '../assets/images/festival_diya_1789619603081.jpg'
import verifyImg from '../assets/images/verify_shield_1789619614450.jpg'
import youngSeekerImg from '../assets/images/young_seeker_1789619627160.jpg'

export type AUMNode = {
  id: string
  label: string
  sanskrit: string
  description: string
  href: string
  color: string
  image: string
}

export const NAV_NODES: AUMNode[] = [
  {
    id: 'shastra',
    label: 'Śāstra',
    sanskrit: 'शास्त्रम्',
    description: 'Vedic Knowledge',
    href: '#shastra',
    color: '#e8c56b',
    image: vedicImg,
  },
  {
    id: 'tirtha',
    label: 'Tīrtha',
    sanskrit: 'तीर्थम्',
    description: 'Puṇyakṣetra / Sacred Pilgrimage Places',
    href: '#tirtha',
    color: '#d8a94a',
    image: tirthaImg,
  },
  {
    id: 'smriti',
    label: 'Smṛti',
    sanskrit: 'स्मृतिः',
    description: 'Civilizational Memory',
    href: '#smriti',
    color: '#d8a94a',
    image: smritiImg,
  },
  {
    id: 'dharma',
    label: 'Dharma',
    sanskrit: 'धर्मः',
    description: 'Righteous Living',
    href: '#dharma',
    color: '#e8c56b',
    image: dharmaImg,
  },
  {
    id: 'festivals',
    label: 'Festivals',
    sanskrit: 'उत्सवाः',
    description: 'Sacred Celebrations',
    href: '#festivals',
    color: '#f0833e',
    image: festivalsImg,
  },
  {
    id: 'verify',
    label: 'AUM Verify',
    sanskrit: 'प्रमाणम्',
    description: 'Truth & Clarity',
    href: '#verify',
    color: '#6fb7c9',
    image: verifyImg,
  },
  {
    id: 'young',
    label: 'Young Seekers',
    sanskrit: 'बाल साधक',
    description: 'For the Next Generation',
    href: '#young-seekers',
    color: '#e8c56b',
    image: youngSeekerImg,
  },
]

const RING_WORDS = ['ॐ', 'ऋतम्', 'सत्यं', 'धर्मः', 'ज्ञानम्', 'भक्तिः', 'कर्म', 'मोक्षः', 'योगः', 'शान्तिः', 'वेदाः', 'श्रुतिः', 'स्मृतिः', 'तपः', 'सेवा', 'प्रज्ञा', 'आत्मा', 'ब्रह्म']

function CentralMandala() {
  return (
    <group position={[0, 0, 0]}>
      {/* Concentric sacred golden rings */}
      <Torus args={[0.82, 0.022, 12, 96]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#e8c56b" transparent opacity={0.8} />
      </Torus>
      <Torus args={[1.12, 0.012, 10, 96]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#e8c56b" transparent opacity={0.32} />
      </Torus>
      <Torus args={[1.42, 0.008, 10, 96]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#f3e3b3" transparent opacity={0.18} />
      </Torus>

      {/* Soft ambient illumination - strictly NO orange glowing ball behind or around ॐ */}
      <pointLight color="#e8c56b" intensity={2.2} distance={6} decay={2} />

      {/* Central sacred ॐ symbol - perfectly centered, static, unchanged */}
      <Html center distanceFactor={8} style={{ pointerEvents: 'none' }}>
        <div className="font-deva select-none text-[4.6rem] sm:text-[5.2rem] leading-none text-[#e8c56b] drop-shadow-[0_0_24px_rgba(232,197,107,.9)]">
          ॐ
        </div>
      </Html>
      <Html center distanceFactor={8} style={{ pointerEvents: 'none', width: 280 }}>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-body text-[8.5px] tracking-[0.38em] text-gold-400/60 uppercase whitespace-nowrap">
          AUM · SANĀTANA
        </div>
      </Html>
    </group>
  )
}

function SanskritRing() {
  return (
    <group>
      {RING_WORDS.map((word, i) => {
        const a = (i / RING_WORDS.length) * Math.PI * 2
        const r = 1.78
        return (
          <Html
            key={`${word}-${i}`}
            center
            position={[Math.cos(a) * r, 0.015, Math.sin(a) * r]}
            distanceFactor={8}
            style={{ pointerEvents: 'none' }}
          >
            <span className="font-deva text-[8px] sm:text-[9px] text-[#e8c56b]/50 whitespace-nowrap select-none">
              {word}
            </span>
          </Html>
        )
      })}
    </group>
  )
}

function PortalNode({
  node,
  index,
  hovered,
  onHover,
  onSelect,
}: {
  node: AUMNode
  index: number
  hovered: boolean
  onHover: (v: boolean) => void
  onSelect: () => void
}) {
  const ref = useRef<THREE.Group>(null)
  const angle = (index / NAV_NODES.length) * Math.PI * 2 - Math.PI / 2
  const radius = 3.75
  const target = useMemo(() => new THREE.Vector3(Math.cos(angle) * radius, 0.02, Math.sin(angle) * radius), [angle])

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.position.lerp(target, Math.min(1, delta * 7))
    const targetScale = hovered ? 1.08 : 1
    const next = new THREE.Vector3(targetScale, targetScale, targetScale)
    ref.current.scale.lerp(next, Math.min(1, delta * 9))
  })

  return (
    <group ref={ref}>
      {/* Subtle orbit base ring on celestial plane */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.44, 0.49, 36]} />
        <meshBasicMaterial
          color={node.color}
          transparent
          opacity={hovered ? 0.85 : 0.35}
          side={THREE.DoubleSide}
        />
      </mesh>

      {hovered && <pointLight color={node.color} intensity={1.5} distance={2.5} />}

      {/* Real Image Card Container with Short Section Name & Sanskrit Label */}
      <Html center position={[0, 0.08, 0]} distanceFactor={8.5}>
        <div
          role="button"
          tabIndex={0}
          aria-label={`${node.label} (${node.sanskrit})`}
          onClick={(e) => {
            e.stopPropagation()
            onSelect()
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              onSelect()
            }
          }}
          onPointerDown={(e) => e.stopPropagation()}
          onPointerOver={() => {
            onHover(true)
            document.body.style.cursor = 'pointer'
          }}
          onPointerOut={() => {
            onHover(false)
            document.body.style.cursor = 'auto'
          }}
          className="flex flex-col items-center text-center cursor-pointer select-none group transition-transform duration-200 outline-none"
        >
          {/* Circular card container holding the real image */}
          <div
            className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full p-[2.5px] transition-all duration-300 ${
              hovered
                ? 'bg-gradient-to-tr from-gold-300 via-gold-400 to-amber-200 shadow-[0_0_24px_rgba(232,197,107,0.75)] scale-110'
                : 'bg-gradient-to-tr from-gold-500/70 via-gold-400/40 to-gold-600/60 shadow-[0_0_14px_rgba(232,197,107,0.3)]'
            }`}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-void relative">
              <img
                src={node.image}
                alt={node.label}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-115"
                loading="eager"
              />
            </div>
          </div>

          {/* Short Section Name Badge with Sanskrit underneath (No overlapping long descriptions) */}
          <div className="mt-1.5 flex flex-col items-center pointer-events-none">
            <div
              className={`px-2.5 py-0.5 rounded-full border backdrop-blur-md whitespace-nowrap transition-all duration-200 ${
                hovered
                  ? 'bg-black/90 border-gold-300 shadow-[0_0_14px_rgba(232,197,107,0.5)] scale-105'
                  : 'bg-black/75 border-gold-400/40 shadow-[0_2px_8px_rgba(0,0,0,0.6)]'
              }`}
            >
              <span className="font-display text-[11px] sm:text-[12px] font-bold tracking-wide text-gold-100">
                {node.label}
              </span>
            </div>
            <span className="font-deva text-[9px] sm:text-[10px] text-gold-400/85 leading-none mt-1 drop-shadow select-none">
              {node.sanskrit}
            </span>
          </div>
        </div>
      </Html>
    </group>
  )
}

function SacredUniverse({ reducedMotion, onNavigate }: { reducedMotion: boolean; onNavigate: (href: string) => void }) {
  const [hovered, setHovered] = useState<string | null>(null)
  const [autoRotate, setAutoRotate] = useState(!reducedMotion)
  const { size, camera } = useThree()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const controlsRef = useRef<any>(null)

  useEffect(() => {
    setAutoRotate(!reducedMotion)
  }, [reducedMotion])

  // Outer nodes orbit at radius 3.72 + node meshes and HTML labels ~ 4.75 world units from center.
  // We calculate targetSpan with safe breathing margin so the entire mandala stays 100% inside canvas.
  const fittedDistance = useMemo(() => {
    const aspect = size.width / Math.max(1, size.height)
    const targetSpan = 11.2
    const baseDist = 12.0
    if (aspect >= 1.25) {
      return baseDist
    }
    // Three.js perspective camera FOV is vertical (42 degrees).
    const halfVfovRad = (42 * Math.PI) / 360
    const tanHalfVfov = Math.tan(halfVfovRad) // ~0.38386
    const needed = (targetSpan / 2) / (tanHalfVfov * Math.max(0.35, aspect))
    return Math.min(27, Math.max(baseDist, needed))
  }, [size.width, size.height])

  // Reposition camera cleanly along the turntable polar angle when distance updates
  useEffect(() => {
    if (!camera) return
    const polar = Math.PI / 3.1
    const y = Math.cos(polar) * fittedDistance
    const horiz = Math.sin(polar) * fittedDistance
    const currentAzimuth = Math.atan2(camera.position.x, camera.position.z)

    camera.position.set(
      Math.sin(currentAzimuth) * horiz,
      y,
      Math.cos(currentAzimuth) * horiz
    )
    camera.lookAt(0, 0, 0)
    camera.updateProjectionMatrix()

    if (controlsRef.current) {
      controlsRef.current.target.set(0, 0, 0)
      controlsRef.current.update()
    }
  }, [fittedDistance, camera])

  return (
    <>
      <ambientLight intensity={0.36} color="#3b3151" />
      <directionalLight position={[5, 7, 4]} intensity={0.85} color="#e8c56b" />
      <directionalLight position={[-4, 2, -5]} intensity={0.28} color="#8c78b8" />
      <Stars radius={50} depth={28} count={reducedMotion ? 250 : 700} factor={1.8} fade speed={reducedMotion ? 0 : 0.08} />

      {/* The sacred navigation wheel stays level. The camera is allowed to turn only
          around the vertical axis, so the central ॐ never tilts/upends. */}
      <group rotation={[0, 0, 0]}>
        <Torus args={[3.72, 0.010, 10, 180]} rotation={[Math.PI / 2, 0, 0]}>
          <meshBasicMaterial color="#d8a94a" transparent opacity={0.34} />
        </Torus>
        <Torus args={[3.05, 0.007, 10, 180]} rotation={[Math.PI / 2, 0, 0]}>
          <meshBasicMaterial color="#d8a94a" transparent opacity={0.13} />
        </Torus>
        <Torus args={[2.18, 0.005, 10, 180]} rotation={[Math.PI / 2, 0, 0]}>
          <meshBasicMaterial color="#d8a94a" transparent opacity={0.12} />
        </Torus>

        {NAV_NODES.map((node, i) => {
          const a = (i / NAV_NODES.length) * Math.PI * 2 - Math.PI / 2
          return (
            <mesh
              key={`spoke-${node.id}`}
              position={[Math.cos(a) * 2.55, 0, Math.sin(a) * 2.55]}
              rotation={[0, -a, 0]}
            >
              <boxGeometry args={[2.35, 0.006, 0.006]} />
              <meshBasicMaterial color="#d8a94a" transparent opacity={0.08} />
            </mesh>
          )
        })}

        <SanskritRing />

        {/* The center is deliberately static and separate from navigation rotation. */}
        <CentralMandala />

        {NAV_NODES.map((node, i) => (
          <PortalNode
            key={node.id}
            node={node}
            index={i}
            hovered={hovered === node.id}
            onHover={(v) => setHovered(v ? node.id : null)}
            onSelect={() => onNavigate(node.href)}
          />
        ))}
      </group>

      <OrbitControls
        ref={controlsRef}
        makeDefault
        enablePan={false}
        enableZoom={false}
        enableDamping
        dampingFactor={0.075}
        rotateSpeed={0.62}
        /* Negative speed gives the requested left-to-right visual motion. */
        autoRotate={autoRotate && !reducedMotion}
        autoRotateSpeed={-0.22}
        /* Horizontal turntable only — no vertical orbit, no upside-down labels. */
        minPolarAngle={Math.PI / 3.1}
        maxPolarAngle={Math.PI / 3.1}
        minDistance={fittedDistance}
        maxDistance={fittedDistance}
        touches={{ ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.ROTATE }}
        onStart={() => setAutoRotate(false)}
        onEnd={() => setAutoRotate(!reducedMotion)}
      />
    </>
  )
}

export default function AUMUniverse({ reducedMotion, onNavigate }: { reducedMotion: boolean; onNavigate: (href: string) => void }) {
  return (
    <Canvas
      camera={{ position: [0, 5.8, 9.6], fov: 42, near: 0.1, far: 60 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: 'high-performance', alpha: true }}
      style={{ width: '100%', height: '100%', touchAction: 'none' }}
    >
      <SacredUniverse reducedMotion={reducedMotion} onNavigate={onNavigate} />
    </Canvas>
  )
}
