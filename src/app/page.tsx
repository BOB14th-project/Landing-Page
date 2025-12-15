'use client'

import { useEffect, useRef } from 'react'

export default function Home() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100', 'blur-0')
            entry.target.classList.remove('opacity-0', 'translate-y-20', 'scale-95', 'blur-sm')
          }
        })
      },
      { threshold: 0.2 }
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const navHeight = 64
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-900/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              CryptoScanner
            </button>
            <div className="flex gap-6">
              <button
                onClick={() => scrollToSection('platform')}
                className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
              >
                Platform
              </button>
              <button
                onClick={() => scrollToSection('scan')}
                className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
              >
                Scan
              </button>
              <button
                onClick={() => scrollToSection('ai')}
                className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
              >
                AI Analysis
              </button>
              <button
                onClick={() => scrollToSection('gui')}
                className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
              >
                GUI
              </button>
              <button
                onClick={() => scrollToSection('report')}
                className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
              >
                Report
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              CryptoScanner
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 font-semibold mb-4">
              양자내성암호 전환 대상 탐지 도구
            </p>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-6">
              파일 시스템을 분석하여 PQC Migration이 필요한 암호 알고리즘을 탐지합니다
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  파일별 정적 분석 수행 → 실행 파일 동적 분석 수행 → LLM 기반 분석 및 전환 가이드 제공
                </p>
              </div>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-purple-900/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/50 transition-all">
              <div className="text-purple-400 text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">Quick Scan</h3>
              <p className="text-gray-400 text-sm">개별 파일/폴더 분석<br/>최대 5분 소요</p>
            </div>

            <div className="bg-blue-900/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover:border-blue-400/50 transition-all">
              <div className="text-blue-400 text-3xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-white mb-2">Full Scan</h3>
              <p className="text-gray-400 text-sm">전체 시스템 스캔<br/>약 3시간 소요</p>
            </div>

            <div className="bg-purple-900/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/50 transition-all">
              <div className="text-purple-400 text-3xl mb-3">📊</div>
              <h3 className="text-xl font-bold text-white mb-2">Result History</h3>
              <p className="text-gray-400 text-sm">날짜별 스캔 기록<br/>결과 조회 및 관리</p>
            </div>

            <div className="bg-blue-900/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover:border-blue-400/50 transition-all">
              <div className="text-blue-400 text-3xl mb-3">🤖</div>
              <h3 className="text-xl font-bold text-white mb-2">LLM 분석</h3>
              <p className="text-gray-400 text-sm">LLM 활용 알고리즘 분석과<br/>전환 가이드 제공</p>
            </div>
          </div>

          {/* Platform Support */}
          <div className="text-center mb-12">
            <p className="text-gray-400 mb-4">지원 플랫폼</p>
            <div className="flex justify-center gap-6 flex-wrap">
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-2xl">🍎</span>
                <span>macOS (ARM)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-2xl">🐧</span>
                <span>Linux (AMD/ARM)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-2xl">🪟</span>
                <span>Windows (AMD)</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://github.com/BOB14th-project/CryptoScanner_GUI"
              target="_blank"
              className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white text-lg font-semibold hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg shadow-purple-500/50 text-center"
            >
              GitHub에서 보기
            </a>
            <button
              onClick={() => scrollToSection('platform')}
              className="px-10 py-4 border-2 border-purple-500 rounded-lg text-purple-300 text-lg font-semibold hover:bg-purple-500/10 transition-all"
            >
              자세히 보기
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Platform Section */}
      <section
        id="platform"
        ref={(el) => { sectionsRef.current[0] = el }}
        className="flex items-center justify-center px-6 py-12 opacity-0 translate-y-20 scale-95 blur-sm transition-all duration-1000 ease-out scroll-mt-20"
      >
        <div className="max-w-7xl w-full">
          <img
            src="/images/1.png"
            alt="CryptoScanner Full Scan"
            className="w-full rounded-2xl shadow-2xl shadow-purple-900/50 border border-purple-500/30 hover:scale-[1.02] hover:shadow-purple-500/60 transition-all duration-500"
          />
        </div>
      </section>

      {/* Scan Section */}
      <section
        id="scan"
        ref={(el) => { sectionsRef.current[1] = el }}
        className="flex items-center justify-center px-6 py-12 opacity-0 translate-y-20 scale-95 blur-sm transition-all duration-1000 ease-out scroll-mt-20"
      >
        <div className="max-w-7xl w-full">
          <img
            src="/images/2.png"
            alt="CryptoScanner Scan Results"
            className="w-full rounded-2xl shadow-2xl shadow-blue-900/50 border border-blue-500/30 hover:scale-[1.02] hover:shadow-blue-500/60 transition-all duration-500"
          />
        </div>
      </section>

      {/* AI Analysis Section */}
      <section
        id="ai"
        ref={(el) => { sectionsRef.current[2] = el }}
        className="flex items-center justify-center px-6 py-12 opacity-0 translate-y-20 scale-95 blur-sm transition-all duration-1000 ease-out scroll-mt-20"
      >
        <div className="max-w-7xl w-full">
          <img
            src="/images/5.png"
            alt="AI Orchestration & LLM Analysis"
            className="w-full rounded-2xl shadow-2xl shadow-purple-900/50 border border-purple-500/30 hover:scale-[1.02] hover:shadow-purple-500/60 transition-all duration-500"
          />
        </div>
      </section>

      {/* GUI Section */}
      <section
        id="gui"
        ref={(el) => { sectionsRef.current[3] = el }}
        className="flex items-center justify-center px-6 py-12 opacity-0 translate-y-20 scale-95 blur-sm transition-all duration-1000 ease-out scroll-mt-20"
      >
        <div className="max-w-7xl w-full">
          <img
            src="/images/3.png"
            alt="CryptoScanner GUI Interface"
            className="w-full rounded-2xl shadow-2xl shadow-blue-900/50 border border-blue-500/30 hover:scale-[1.02] hover:shadow-blue-500/60 transition-all duration-500"
          />
        </div>
      </section>

      {/* Report Section */}
      <section
        id="report"
        ref={(el) => { sectionsRef.current[4] = el }}
        className="flex items-center justify-center px-6 py-12 opacity-0 translate-y-20 scale-95 blur-sm transition-all duration-1000 ease-out scroll-mt-20"
      >
        <div className="max-w-7xl w-full">
          <img
            src="/images/4.png"
            alt="CryptoScanner Report & Analysis"
            className="w-full rounded-2xl shadow-2xl shadow-purple-900/50 border border-purple-500/30 hover:scale-[1.02] hover:shadow-purple-500/60 transition-all duration-500"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-purple-900/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500">&copy; 2025 CryptoScanner. All rights reserved.</p>
        </div>
      </footer>
      </div>
    </div>
  )
}
