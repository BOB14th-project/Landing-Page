'use client'

import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.scroll-section')
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const windowHeight = window.innerHeight

        if (rect.top < windowHeight * 0.75) {
          section.classList.add('visible')
        }
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-7xl md:text-9xl font-bold mb-8 glow-strong animate-fade-in">
            Crypto<span className="text-primary">Scanner</span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 mb-6">
            Post-Quantum Cryptography Detection
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Detect and analyze cryptographic algorithms requiring transition to quantum-resistant standards
          </p>

          <a
            href="https://github.com/BOB14th-project/CryptoScanner_GUI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-primary text-dark-light font-bold rounded-lg hover:bg-primary-light transition-all transform hover:scale-105 card-glow text-lg"
          >
            View on GitHub →
          </a>
        </div>
      </section>

      {/* Image Section 1 */}
      <section className="scroll-section py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl card-glow">
            <Image
              src="/images/1.png"
              alt="CryptoScanner Interface"
              width={1600}
              height={1200}
              className="w-full h-auto"
              priority
            />
          </div>
          <p className="text-center text-gray-400 mt-6 text-lg">Main Dashboard - Scan Management Interface</p>
        </div>
      </section>

      {/* Image Section 2 */}
      <section className="scroll-section py-32 px-6 bg-dark-light/30">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl card-glow">
            <Image
              src="/images/2.png"
              alt="Analysis Results"
              width={1600}
              height={1200}
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-gray-400 mt-6 text-lg">Real-time Scan Results & Analysis</p>
        </div>
      </section>

      {/* Image Section 3 */}
      <section className="scroll-section py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl card-glow">
            <Image
              src="/images/3.png"
              alt="Detailed View"
              width={1600}
              height={1200}
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-gray-400 mt-6 text-lg">Detailed Algorithm Detection & File Analysis</p>
        </div>
      </section>

      {/* Image Section 4 */}
      <section className="scroll-section py-32 px-6 bg-dark-light/30">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl card-glow">
            <Image
              src="/images/4.png"
              alt="Analytics Dashboard"
              width={1600}
              height={1200}
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-gray-400 mt-6 text-lg">Visual Analytics & Distribution Charts</p>
        </div>
      </section>

      {/* Image Section 5 */}
      <section className="scroll-section py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl card-glow">
            <Image
              src="/images/5.png"
              alt="System Overview"
              width={1600}
              height={1200}
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-gray-400 mt-6 text-lg">System Scan Overview & Historical Results</p>
        </div>
      </section>

      {/* Features - Simple */}
      <section className="scroll-section py-32 px-6 bg-dark-light/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12 glow">Key Features</h2>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="p-6 bg-dark-lighter/50 rounded-xl border border-primary/20">
              <h3 className="text-xl font-bold text-primary mb-2">🔍 Comprehensive Detection</h3>
              <p className="text-gray-400">Scan binaries, source code, certificates, and keys</p>
            </div>

            <div className="p-6 bg-dark-lighter/50 rounded-xl border border-primary/20">
              <h3 className="text-xl font-bold text-primary mb-2">📊 Visual Analytics</h3>
              <p className="text-gray-400">Pie charts and bar graphs for algorithm distribution</p>
            </div>

            <div className="p-6 bg-dark-lighter/50 rounded-xl border border-primary/20">
              <h3 className="text-xl font-bold text-primary mb-2">⚡ Flexible Scanning</h3>
              <p className="text-gray-400">Quick scans or comprehensive system analysis</p>
            </div>

            <div className="p-6 bg-dark-lighter/50 rounded-xl border border-primary/20">
              <h3 className="text-xl font-bold text-primary mb-2">🌐 Cross-Platform</h3>
              <p className="text-gray-400">macOS, Linux, and Windows support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="scroll-section py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 glow">Ready to Start?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Prepare for the post-quantum cryptography era
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://github.com/BOB14th-project/CryptoScanner_GUI"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-primary text-dark-light font-bold rounded-lg hover:bg-primary-light transition-all transform hover:scale-105 card-glow"
            >
              Get Started
            </a>
            <a
              href="https://github.com/BOB14th-project/CryptoScanner_GUI#readme"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-transparent border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-all"
            >
              Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-primary/10">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p className="text-sm">BOB 14th Project - CryptoScanner GUI</p>
        </div>
      </footer>
    </main>
  )
}
