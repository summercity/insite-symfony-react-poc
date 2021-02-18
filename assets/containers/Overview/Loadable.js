/**
 * Asynchronously loads the component for Overview
 */

import React from 'react'
import loadable from 'Utils/loadable'
import LoadingIndicator from 'Components/LoadingIndicator'

export default loadable(() => import('./index'), {
  fallback: <LoadingIndicator />,
})
