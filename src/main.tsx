import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { Router } from 'waku/router/client'

import { ErrorBoundary } from './error-boundary'

const rootElement = (
  <StrictMode>
    <ErrorBoundary fallback={String}>
      <Router />
    </ErrorBoundary>
  </StrictMode>
)

if (import.meta.env.WAKU_HYDRATE)
  hydrateRoot(document.body, rootElement)
else
  createRoot(document.body).render(rootElement)
