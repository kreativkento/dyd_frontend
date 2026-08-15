import adsLogo from './assets/ads_logo.png'
import './App.css'

function App() {
  return (
    <main className="page">
      <div className="class-shell">
        <img
          className="brand-logo"
          src={adsLogo}
          alt="Ardua Digital Solutions"
        />

        <div className="banner-card">
          <img
            className="banner"
            src="/dyd-banner.png"
            alt="Diocesan Youth Day 2026, October 17–18 at The Most Sacred Heart of Jesus Parish, San Isidro, Northern Samar. Presented by the Roman Catholic Diocese of Catarman, Diocesan Commission on Youth."
          />
        </div>

        <div className="cta">
          <a
            className="download-btn"
            href="https://github.com/kreativkento/dyd_frontend/releases/download/v1.0.0/dyd-prototype.apk"
          >
            <svg
              className="android-icon"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <g
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 5.25 6.4 2.75" />
                <path d="M16 5.25 17.6 2.75" />
                <path d="M4.5 10.75a7.5 7.5 0 0 1 15 0" />
                <path d="M4.5 10.75v7.5A1.75 1.75 0 0 0 6.25 20h11.5A1.75 1.75 0 0 0 19.5 18.25v-7.5" />
                <path d="M2.5 12.25v5.25" />
                <path d="M21.5 12.25v5.25" />
              </g>
              <circle cx="9" cy="8.35" r=".85" fill="currentColor" />
              <circle cx="15" cy="8.35" r=".85" fill="currentColor" />
            </svg>
            Download App
          </a>
        </div>
      </div>
    </main>
  )
}

export default App
