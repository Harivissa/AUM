/**
 * Web Audio API Ambient Om / Meditative Harmonic Sound Generator
 * Generates pure harmonic 108Hz / 432Hz drone and singing bowl bells.
 */

let audioCtx: AudioContext | null = null
let masterGain: GainNode | null = null
let oscillators: OscillatorNode[] = []
let isPlaying = false

export function toggleAmbientSound(onStateChange?: (playing: boolean) => void): boolean {
  if (isPlaying) {
    stopAmbientSound()
    onStateChange?.(false)
    return false
  } else {
    startAmbientSound()
    onStateChange?.(true)
    return true
  }
}

export function isAmbientSoundPlaying(): boolean {
  return isPlaying
}

export function startAmbientSound() {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    if (!audioCtx) {
      audioCtx = new AudioContextClass()
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume()
    }

    // Master gain
    masterGain = audioCtx.createGain()
    masterGain.gain.setValueAtTime(0.001, audioCtx.currentTime)
    masterGain.gain.exponentialRampToValueAtTime(0.12, audioCtx.currentTime + 3) // gentle fade-in
    masterGain.connect(audioCtx.destination)

    // Warm low-pass filter
    const filter = audioCtx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.setValueAtTime(480, audioCtx.currentTime)
    filter.connect(masterGain)

    // Harmonic frequencies for 108Hz root (Vedic sacred number 108, harmonic to 432Hz)
    const baseFreq = 108
    const harmonics = [baseFreq, baseFreq * 2, baseFreq * 3, baseFreq * 4, 432]
    const gains = [0.08, 0.04, 0.025, 0.015, 0.02]

    oscillators = []

    harmonics.forEach((freq, idx) => {
      if (!audioCtx) return
      const osc = audioCtx.createOscillator()
      const g = audioCtx.createGain()
      osc.type = idx === 0 ? 'sine' : idx === 1 ? 'triangle' : 'sine'
      osc.frequency.setValueAtTime(freq + (idx === 0 ? 0.3 : idx * -0.2), audioCtx.currentTime)

      // Slight frequency modulation (LFO) for breathing sensation
      const lfo = audioCtx.createOscillator()
      const lfoGain = audioCtx.createGain()
      lfo.frequency.setValueAtTime(0.1 + idx * 0.03, audioCtx.currentTime)
      lfoGain.gain.setValueAtTime(0.5, audioCtx.currentTime)
      lfo.connect(lfoGain)
      lfoGain.connect(osc.frequency)
      lfo.start()

      g.gain.setValueAtTime(gains[idx] || 0.02, audioCtx.currentTime)
      osc.connect(g)
      g.connect(filter)
      osc.start()
      oscillators.push(osc)
    })

    isPlaying = true
  } catch (err) {
    console.error('Failed to initialize Web Audio:', err)
    isPlaying = false
  }
}

export function stopAmbientSound() {
  if (!audioCtx || !masterGain) {
    isPlaying = false
    return
  }
  try {
    masterGain.gain.setValueAtTime(masterGain.gain.value, audioCtx.currentTime)
    masterGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.2)
    setTimeout(() => {
      oscillators.forEach((osc) => {
        try {
          osc.stop()
          osc.disconnect()
        } catch {
          // ignore already stopped
        }
      })
      oscillators = []
      isPlaying = false
    }, 1200)
  } catch {
    isPlaying = false
  }
}

/** Play a sacred singing bowl chime */
export function playSingingBowlChime() {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    const ctx = new AudioContextClass()
    if (ctx.state === 'suspended') ctx.resume()

    const chimeGain = ctx.createGain()
    chimeGain.gain.setValueAtTime(0.001, ctx.currentTime)
    chimeGain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.05)
    chimeGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 4.5)
    chimeGain.connect(ctx.destination)

    // Fundamental + overtone
    ;[528, 1056, 1584].forEach((f, i) => {
      const osc = ctx.createOscillator()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(f, ctx.currentTime)
      const g = ctx.createGain()
      g.gain.setValueAtTime(i === 0 ? 0.15 : 0.05, ctx.currentTime)
      osc.connect(g)
      g.connect(chimeGain)
      osc.start()
      osc.stop(ctx.currentTime + 4.5)
    })
  } catch (err) {
    console.warn('Audio chime unavailable', err)
  }
}
