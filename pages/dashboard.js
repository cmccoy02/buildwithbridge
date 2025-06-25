import Head from 'next/head'
import Script from 'next/script'
import { useEffect, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Gauge({ value }) {
  const radius = 45
  const circumference = Math.PI * radius
  const dash = (value / 100) * circumference
  const angle = (value / 100) * 180 - 90

  return (
    <div className="relative w-64 h-32 mx-auto mb-8">
      <svg viewBox="0 0 100 50" className="w-full h-full">
        <path d="M5 45 A45 45 0 0 1 95 45" fill="none" stroke="#333" strokeWidth="10" />
        <path d="M5 45 A45 45 0 0 1 95 45" fill="none" stroke="var(--color-accent)" strokeWidth="10" strokeDasharray={`${dash} ${circumference}`} strokeLinecap="round" />
      </svg>
      <div className="absolute left-1/2 bottom-0 transform origin-bottom" style={{ transform: `translateX(-50%) rotate(${angle}deg)` }}>
        <div className="w-1 h-20 bg-white" />
      </div>
      <div className="absolute left-1/2 bottom-0 transform translate-y-5 -translate-x-1/2 text-2xl font-ocr-a">
        {value}
      </div>
    </div>
  )
}

export default function Dashboard() {
  const historyRef = useRef(null)
  const predictionRef = useRef(null)

  useEffect(() => {
    if (window.Chart) {
      const ctx1 = historyRef.current.getContext('2d')
      new window.Chart(ctx1, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [{
            label: 'Tech Debt Score',
            data: [40, 45, 50, 55, 60],
            borderColor: 'var(--color-accent)',
            tension: 0.4
          }]
        },
        options: { plugins: { legend: { labels: { color: '#fff' } } }, scales: { x: { ticks: { color: '#fff' } }, y: { ticks: { color: '#fff' }, min: 0, max: 100 } } }
      })
      const ctx2 = predictionRef.current.getContext('2d')
      new window.Chart(ctx2, {
        type: 'line',
        data: {
          labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
          datasets: [{
            label: 'Predicted Score',
            data: [65, 67, 70, 72, 75],
            borderColor: '#4ade80',
            tension: 0.4
          }]
        },
        options: { plugins: { legend: { labels: { color: '#fff' } } }, scales: { x: { ticks: { color: '#fff' } }, y: { ticks: { color: '#fff' }, min: 0, max: 100 } } }
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-amoled-black text-white flex flex-col">
      <Head>
        <title>Dashboard - Bridge</title>
        <meta name="description" content="Bridge Dashboard" />
        <link rel="icon" href="/images/bridge.svg" />
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/chart.js" strategy="beforeInteractive" />
      <Header />
      <main className="flex-grow px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-ocr-a text-center my-8">Tech Debt Dashboard</h1>
        <Gauge value={65} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-900 p-4 rounded-lg">
            <canvas ref={historyRef}></canvas>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg">
            <canvas ref={predictionRef}></canvas>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg font-jetbrains-mono">
            <h2 className="text-xl font-ocr-a mb-2">Next Steps</h2>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              <li>Pay down high-risk components</li>
              <li>Refactor outdated modules</li>
              <li>Continue leveraging low-risk debt</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg font-jetbrains-mono">
            <h2 className="text-xl font-ocr-a mb-2">Financial Impact</h2>
            <p className="text-gray-300">Estimated annual cost: $250k</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
