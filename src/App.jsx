import { useEffect, useId, useRef, useState } from 'react'
import adsLogo from './assets/ads_logo.png'
import './App.css'

const ANDROID_APK_URL =
  'https://github.com/kreativkento/dyd_frontend/releases/download/v1.0.0/app-dyd2026.apk'
const IOS_APP_URL = 'https://app.dyd2026.arduadigitalsolutions.com'

const ANDROID_INSTALL_STEPS = [
  {
    title: 'Wait for the download',
    body: 'The app file (app-dyd2026.apk) should start downloading right away. Check the notification shade at the top of your screen, or open your Downloads folder.',
  },
  {
    title: 'Open the APK file',
    body: 'Tap the completed download notification, or go to Files / Downloads and tap app-dyd2026.apk.',
  },
  {
    title: 'Allow install from this source',
    body: 'If Android blocks the install, tap Settings and turn on Allow from this source for Chrome, Files, or the browser you used. Then go back and tap the APK again.',
  },
  {
    title: 'Install and open',
    body: 'Tap Install. When it finishes, tap Open to launch the Diocesan Youth Day app.',
  },
]

const IOS_INSTALL_STEPS = [
  {
    title: 'Open the app in Safari',
    body: 'Tap Continue below to open the Diocesan Youth Day app. On iPhone and iPad, use Safari so you can add it to your Home Screen.',
  },
  {
    title: 'Tap the Share button',
    body: 'In Safari, tap the Share icon — a square with an arrow pointing up. On iPhone it is at the bottom; on iPad it is at the top.',
  },
  {
    title: 'Add to Home Screen',
    body: 'Scroll the share sheet and tap Add to Home Screen. Keep the name as it is, then tap Add.',
  },
  {
    title: 'Open from your Home Screen',
    body: 'The app icon will appear on your Home Screen. Tap it anytime to open Diocesan Youth Day like a regular app.',
  },
]

function startAndroidDownload() {
  const link = document.createElement('a')
  link.href = ANDROID_APK_URL
  link.download = 'app-dyd2026.apk'
  link.rel = 'noopener noreferrer'
  document.body.appendChild(link)
  link.click()
  link.remove()
}

function InstallModal({
  lead,
  steps,
  footerNote,
  actionLabel,
  actionHref,
  onAction,
  onClose,
}) {
  const titleId = useId()
  const actionRef = useRef(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    actionRef.current?.focus()

    function onKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  return (
    <div className="install-overlay" onClick={onClose}>
      <div
        className="install-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="install-dialog-body">
          <h2 id={titleId} className="install-title">
            How to Install
          </h2>
          <p className="install-lead">{lead}</p>

          <ol className="install-steps">
            {steps.map((step, index) => (
              <li key={step.title} className="install-step">
                <span className="install-step-num" aria-hidden="true">
                  {index + 1}
                </span>
                <div className="install-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="install-dialog-footer">
          {footerNote}
          {actionHref ? (
            <a ref={actionRef} className="install-action-btn" href={actionHref}>
              {actionLabel}
            </a>
          ) : (
            <button
              ref={actionRef}
              type="button"
              className="install-action-btn"
              onClick={onAction}
            >
              {actionLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

function App() {
  const [guide, setGuide] = useState(null)

  function handleAndroidClick() {
    startAndroidDownload()
    setGuide('android')
  }

  function closeGuide() {
    setGuide(null)
  }

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
          <button
            type="button"
            className="download-btn"
            aria-haspopup="dialog"
            aria-expanded={guide === 'android'}
            onClick={handleAndroidClick}
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
            Download Android App
          </button>
          <button
            type="button"
            className="download-btn"
            aria-haspopup="dialog"
            aria-expanded={guide === 'ios'}
            onClick={() => setGuide('ios')}
          >
            <svg
              className="apple-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="currentColor"
                d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
              />
            </svg>
            Download IOS App
          </button>
        </div>
      </div>

      {guide === 'android' ? (
        <InstallModal
          lead="Your download should start automatically. Follow these steps on your Android phone."
          steps={ANDROID_INSTALL_STEPS}
          footerNote={
            <p className="install-fallback">
              If the download did not start,{' '}
              <a
                href={ANDROID_APK_URL}
                download="app-dyd2026.apk"
                target="_blank"
                rel="noopener noreferrer"
              >
                click here
              </a>
              .
            </p>
          }
          actionLabel="Close"
          onAction={closeGuide}
          onClose={closeGuide}
        />
      ) : null}

      {guide === 'ios' ? (
        <InstallModal
          lead="Follow these steps on your iPhone or iPad. Tap Continue when you are ready to open the app."
          steps={IOS_INSTALL_STEPS}
          actionLabel="Continue"
          actionHref={IOS_APP_URL}
          onClose={closeGuide}
        />
      ) : null}
    </main>
  )
}

export default App
