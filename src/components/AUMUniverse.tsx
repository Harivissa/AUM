import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, OrbitControls, Stars, Torus } from '@react-three/drei'
import * as THREE from 'three'

export type AUMNode = {
  id: string
  label: string
  sanskrit: string
  href: string
  color: string
}

const NAV_NODES: AUMNode[] = [
  { id: 'scriptures', label: 'ŚĀSTRA', sanskrit: 'शास्त्रम्', href: '#shastra', color: '#e8c56b' },
  { id: 'tirtha', label: 'TĪRTHA', sanskrit: 'तीर्थम्', href: '#tirtha', color: '#d8a94a' },
  { id: 'smriti', label: 'SMṚTI', sanskrit: 'स्मृतिः', href: '#smriti', color: '#d8a94a' },
  { id: 'dharma', label: 'DHARMA', sanskrit: 'धर्मः', href: '#dharma', color: '#d8a94a' },
  { id: 'devata', label: 'DEVATĀ', sanskrit: 'देवता', href: '#devata', color: '#d8a94a' },
  { id: 'festivals', label: 'FESTIVALS', sanskrit: 'उत्सवाः', href: '#festivals', color: '#f0833e' },
  { id: 'verify', label: 'AUM VERIFY', sanskrit: 'प्रमाणम्', href: '#verify', color: '#6fb7c9' },
  { id: 'young', label: 'YOUNG SEEKERS', sanskrit: 'बाल साधक', href: '#young-seekers', color: '#e8c56b' },
]

const RING_WORDS = ['ॐ', 'ऋतम्', 'सत्यं', 'धर्मः', 'ज्ञानम्', 'भक्तिः', 'कर्म', 'मोक्षः', 'योगः', 'शान्तिः', 'वेदाः', 'श्रुतिः', 'स्मृतिः', 'तपः', 'सेवा', 'प्रज्ञा', 'आत्मा', 'ब्रह्म']

function NodeIcon({ type, color, hovered }: { type: string; color: string; hovered: boolean }) {
  const opacity = hovered ? 1 : 0.82
  const emissive = hovered ? 1.9 : 0.75
  const material = (
    <meshStandardMaterial color={color} emissive={color} emissiveIntensity={emissive} metalness={0.7} roughness={0.25} transparent opacity={opacity} />
  )
  if (type === 'scriptures') return (
    <group>
      <mesh position={[-0.08, 0.04, 0]}>{/* manuscript block */}<boxGeometry args={[0.8, 0.52, 0.12]} />{material}</mesh>
      <mesh position={[0.08, 0.10, 0.08]}><boxGeometry args={[0.8, 0.52, 0.10]} />{material}</mesh>
      {[0.12, 0, -0.12].map((y) => <mesh key={y} position={[0.08, y, 0.16]}><boxGeometry args={[0.48, 0.018, 0.012]} /><meshBasicMaterial color={color} transparent opacity={hovered ? 1 : 0.65} /></mesh>)}
    </group>
  )
  if (type === 'itihasa') return (
    <group rotation={[0, 0, Math.PI / 2]}>
      <mesh><cylinderGeometry args={[0.22, 0.22, 0.78, 32]} />{material}</mesh>
      <mesh position={[0, 0.42, 0]} rotation={[0, 0, Math.PI / 2]}><torusGeometry args={[0.22, 0.045, 12, 32]} /><meshBasicMaterial color={color} transparent opacity={0.85} /></mesh>
      <mesh position={[0, -0.42, 0]} rotation={[0, 0, Math.PI / 2]}><torusGeometry args={[0.22, 0.045, 12, 32]} /><meshBasicMaterial color={color} transparent opacity={0.85} /></mesh>
      <mesh position={[0, 0, 0.23]}><boxGeometry args={[0.45, 0.025, 0.012]} /><meshBasicMaterial color={color} transparent opacity={0.65} /></mesh>
    </group>
  )
  if (type === 'purana') return (
    <group>
      <mesh>{material}<sphereGeometry args={[0.28, 24, 24]} /></mesh>
      {[0, 1, 2, 3].map((i) => { const a = i * Math.PI / 2; return <mesh key={i} position={[Math.cos(a) * 0.46, Math.sin(a) * 0.46, 0]}>{material}<sphereGeometry args={[0.065, 16, 16]} /></mesh> })}
      {[0, 1, 2, 3].map((i) => { const a = i * Math.PI / 2; return <mesh key={`l${i}`} position={[Math.cos(a) * 0.23, Math.sin(a) * 0.23, 0]} rotation={[0, 0, a]}><boxGeometry args={[0.48, 0.012, 0.012]} /><meshBasicMaterial color={color} transparent opacity={0.7} /></mesh> })}
    </group>
  )
  if (type === 'darshana') return (
    <group>
      <mesh rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[0.33, 0.045, 16, 48]} /><meshBasicMaterial color={color} transparent opacity={0.9} /></mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[0.17, 0.03, 16, 48]} /><meshBasicMaterial color={color} transparent opacity={0.7} /></mesh>
      <mesh rotation={[0, 0, Math.PI / 4]}>{material}<octahedronGeometry args={[0.23, 0]} /></mesh>
    </group>
  )
  if (type === 'agama') return (
    <group>
      <mesh position={[0, -0.18, 0]}>{material}<boxGeometry args={[0.68, 0.12, 0.18]} /></mesh>
      <mesh position={[-0.26, 0.12, 0]}>{material}<boxGeometry args={[0.12, 0.55, 0.18]} /></mesh>
      <mesh position={[0.26, 0.12, 0]}>{material}<boxGeometry args={[0.12, 0.55, 0.18]} /></mesh>
      <mesh position={[0, 0.36, 0]} rotation={[0, 0, Math.PI / 4]}>{material}<boxGeometry args={[0.55, 0.12, 0.18]} /></mesh>
      <mesh position={[0, 0.36, 0]} rotation={[0, 0, -Math.PI / 4]}>{material}<boxGeometry args={[0.55, 0.12, 0.18]} /></mesh>
    </group>
  )
  if (type === 'bhakti') return (
    <group>
      <mesh position={[0, 0.08, 0]}>{material}<sphereGeometry args={[0.23, 20, 20]} /></mesh>
      {[-1, 0, 1].map((i) => <mesh key={i} position={[i * 0.16, -0.25, 0]} rotation={[0, 0, i * 0.35]}>{material}<sphereGeometry args={[0.13, 18, 12]} /></mesh>)}
      <mesh position={[0, -0.44, 0]}>{material}<coneGeometry args={[0.12, 0.22, 6]} /></mesh>
    </group>
  )
  if (type === 'tirtha') return (
    <group>
      <mesh position={[0, 0.05, 0]}>{material}<boxGeometry args={[0.52, 0.32, 0.22]} /></mesh>
      <mesh position={[0, 0.30, 0]}>{material}<coneGeometry args={[0.42, 0.30, 4]} /></mesh>
      <mesh position={[0, -0.18, 0.10]}><boxGeometry args={[0.16, 0.28, 0.03]} /><meshBasicMaterial color={color} transparent opacity={0.9}/></mesh>
    </group>
  )
  if (type === 'smriti') return (
    <group>
      <mesh rotation={[0, 0, -0.10]}>{material}<boxGeometry args={[0.72, 0.52, 0.10]} /></mesh>
      {[0.12, 0, -0.12].map((y) => <mesh key={y} position={[0.03,y,0.07]}><boxGeometry args={[0.48,0.018,0.012]} /><meshBasicMaterial color={color} transparent opacity={0.72}/></mesh>)}
    </group>
  )
  if (type === 'dharma') return (
    <group>
      <mesh rotation={[Math.PI / 2, 0, 0]}>{material}<torusGeometry args={[0.28, 0.045, 12, 32]} /></mesh>
      {Array.from({length:8}).map((_,i)=>{const a=i*Math.PI/4; return <mesh key={i} position={[Math.cos(a)*0.34,Math.sin(a)*0.34,0]} rotation={[0,0,a]}><boxGeometry args={[0.24,0.025,0.025]} /><meshBasicMaterial color={color} transparent opacity={0.85}/></mesh>})}
    </group>
  )
  if (type === 'devata') return (
    <group>
      <mesh>{material}<sphereGeometry args={[0.25,24,24]} /></mesh>
      {[0,1,2,3,4,5].map(i=>{const a=i*Math.PI/3; return <mesh key={i} position={[Math.cos(a)*0.43,Math.sin(a)*0.43,0]} scale={[0.16,0.36,0.08]} rotation={[0,0,a]}>{material}<sphereGeometry args={[1,12,8]} /></mesh>})}
    </group>
  )
  if (type === 'young') return (
    <group>
      <mesh>{material}<octahedronGeometry args={[0.28,0]} /></mesh>
      {[0,1,2,3].map(i=>{const a=i*Math.PI/2; return <mesh key={i} position={[Math.cos(a)*0.48,Math.sin(a)*0.48,0]}>{material}<sphereGeometry args={[0.075,16,12]} /></mesh>})}
    </group>
  )
  if (type === 'festivals') return (
    <group>
      <mesh>{material}<sphereGeometry args={[0.25, 24, 24]} /></mesh>
      {Array.from({ length: 8 }).map((_, i) => { const a = i * Math.PI / 4; return <mesh key={i} position={[Math.cos(a) * 0.42, Math.sin(a) * 0.42, 0]}>{material}<sphereGeometry args={[0.07, 16, 12]} /></mesh> })}
      <mesh position={[0, -0.44, 0]}>{material}<coneGeometry args={[0.11, 0.2, 6]} /></mesh>
    </group>
  )
  return (
    <group>
      <mesh>{material}<boxGeometry args={[0.62, 0.58, 0.10]} /></mesh>
      <mesh rotation={[0, 0, Math.PI / 2]}><torusGeometry args={[0.24, 0.035, 12, 40]} /><meshBasicMaterial color={color} transparent opacity={0.9} /></mesh>
      <mesh position={[0.07, 0.08, 0.08]}><boxGeometry args={[0.30, 0.025, 0.015]} /><meshBasicMaterial color={color} transparent opacity={0.8} /></mesh>
      <mesh position={[0.07, -0.02, 0.08]}><boxGeometry args={[0.20, 0.025, 0.015]} /><meshBasicMaterial color={color} transparent opacity={0.8} /></mesh>
    </group>
  )
}

function CentralMandala() {
  const petals = useMemo(() => Array.from({ length: 16 }, (_, i) => i), [])
  return (
    <group>
      <Torus args={[0.82, 0.028, 12, 96]} rotation={[Math.PI / 2, 0, 0]}><meshBasicMaterial color="#e8c56b" transparent opacity={0.85} /></Torus>
      <Torus args={[1.10, 0.014, 10, 96]} rotation={[Math.PI / 2, 0, 0]}><meshBasicMaterial color="#e8c56b" transparent opacity={0.34} /></Torus>
      <Torus args={[1.38, 0.010, 10, 96]} rotation={[Math.PI / 2, 0, 0]}><meshBasicMaterial color="#f3e3b3" transparent opacity={0.20} /></Torus>
      {petals.map((i) => {
        const a = (i / petals.length) * Math.PI * 2
        return (
          <mesh key={i} position={[Math.cos(a) * 1.12, 0, Math.sin(a) * 1.12]} rotation={[0, -a, 0]} scale={[0.18, 0.035, 0.58]}>
            <sphereGeometry args={[1, 20, 12]} />
            <meshBasicMaterial color="#d8a94a" transparent opacity={0.25} side={THREE.DoubleSide} />
          </mesh>
        )
      })}
      <mesh><sphereGeometry args={[0.48, 40, 40]} /><meshStandardMaterial color="#f4df9b" emissive="#d9aa43" emissiveIntensity={1.6} metalness={0.25} roughness={0.26} /></mesh>
      <pointLight color="#e8c56b" intensity={3.8} distance={5.5} decay={2} />
      <Html center distanceFactor={8} style={{ pointerEvents: 'none' }}>
        <div className="font-deva select-none text-[4.7rem] leading-none text-[#e8c56b] drop-shadow-[0_0_18px_rgba(232,197,107,.95)]">ॐ</div>
      </Html>
      <Html center distanceFactor={8} style={{ pointerEvents: 'none', width: 260 }}>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-body text-[8px] tracking-[0.35em] text-gold-400/55 uppercase whitespace-nowrap">AUM · SANĀTANA</div>
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
        return <Html key={`${word}-${i}`} center position={[Math.cos(a) * r, 0.015, Math.sin(a) * r]} distanceFactor={8} style={{ pointerEvents: 'none' }}>
          <span className="font-deva text-[8px] sm:text-[9px] text-[#e8c56b]/50 whitespace-nowrap select-none">{word}</span>
        </Html>
      })}
    </group>
  )
}

function PortalNode({ node, index, hovered, onHover, onSelect }: { node: AUMNode; index: number; hovered: boolean; onHover: (v: boolean) => void; onSelect: () => void }) {
  const ref = useRef<THREE.Group>(null)
  const angle = (index / NAV_NODES.length) * Math.PI * 2 - Math.PI / 2
  const radius = 3.72
  const target = useMemo(() => new THREE.Vector3(Math.cos(angle) * radius, 0.02, Math.sin(angle) * radius), [angle])
  const type = node.id
  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.position.lerp(target, Math.min(1, delta * 7))
    const targetScale = hovered ? 1.12 : 1
    const next = new THREE.Vector3(targetScale, targetScale, targetScale)
    ref.current.scale.lerp(next, Math.min(1, delta * 9))
  })
  return (
    <group ref={ref}>
      <mesh
        onPointerOver={(e) => { e.stopPropagation(); onHover(true); document.body.style.cursor = 'pointer' }}
        onPointerOut={(e) => { e.stopPropagation(); onHover(false); document.body.style.cursor = 'auto' }}
        onPointerDown={(e) => e.stopPropagation()}
        onClick={(e) => { e.stopPropagation(); onSelect() }}
      >
        <sphereGeometry args={[0.72, 24, 24]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>
      <group scale={hovered ? 1.06 : 1}>
        <NodeIcon type={type} color={node.color} hovered={hovered} />
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.48, 0.51, 32]} />
          <meshBasicMaterial color={node.color} transparent opacity={hovered ? 0.9 : 0.42} side={THREE.DoubleSide} />
        </mesh>
      </group>
      {hovered && <pointLight color={node.color} intensity={1.8} distance={2.5} />}
      <Html center position={[0, -0.62, 0]} distanceFactor={8.3} style={{ pointerEvents: 'none' }}>
        <div className="aum-node-label">
          <div className="font-deva text-[10px] leading-none text-[#e8c56b]/75">{node.sanskrit}</div>
          <div className="mt-1 font-display text-[12px] tracking-[0.12em] leading-none text-[#f3e3b3] whitespace-nowrap">{node.label}</div>
        </div>
      </Html>
    </group>
  )
}

function SacredUniverse({ reducedMotion, onNavigate }: { reducedMotion: boolean; onNavigate: (href: string) => void }) {
  const [hovered, setHovered] = useState<string | null>(null)
  const [autoRotate, setAutoRotate] = useState(!reducedMotion)

  useEffect(() => {
    setAutoRotate(!reducedMotion)
  }, [reducedMotion])

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
        minDistance={11.5}
        maxDistance={11.5}
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
      camera={{ position: [0, 6.1, 9.7], fov: 43, near: 0.1, far: 60 }}
      dpr={[1, 1.45]}
      gl={{ antialias: true, powerPreference: 'high-performance', alpha: false }}
      style={{ width: '100%', height: '100%', touchAction: 'none' }}
      onCreated={({ gl }) => { gl.setClearColor('#04030a', 1) }}
    >
      <color attach="background" args={['#04030a']} />
      <fog attach="fog" args={['#04030a', 9, 25]} />
      <SacredUniverse reducedMotion={reducedMotion} onNavigate={onNavigate} />
    </Canvas>
  )
}
