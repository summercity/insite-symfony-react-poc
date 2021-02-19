import React, { useMemo } from 'react'
import DatePicker from 'Components/DatePicker'

export default function Overview() {
  return useMemo(() => {
    return (
      <>
        <h1>Overview Component</h1>
        <DatePicker />
      </>
    )
  }, [])
}
