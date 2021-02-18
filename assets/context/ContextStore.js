import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import ContextReducer from './ContextReducer'
import {
  TODAY,
  LAST_7_DAYS,
  LAST_14_DAYS,
  LAST_30_DAYS,
  CURRENT_MONTH,
  PREVIOUS_MONTH,
  PREVIOUS_QUARTER,
  ALL,
  CUSTOM,
} from './constant'
import moment from 'moment'

let initialDate = null
try {
  initialDate = JSON.parse(sessionStorage.getItem('dateFilter'))
} catch (e) {
  initialDate = null
}

if (!initialDate) {
  initialDate = {
    preset: TODAY,
    startDate: moment().startOf('day'),
    endDate: moment().endOf('day'),
  }
}

const initialState = {
  app: {
    sideNavCollapse: false,
  },
  dateFilter: {
    preset: initialDate.preset,
    startDate: moment(initialDate.startDate),
    endDate: moment(initialDate.endDate),
  },
  globalError: null,
}

const ContextStore = ({ children }) => {
  const [state, dispatch] = useReducer(ContextReducer, initialState)

  React.useEffect(() => {
    let dateFilter = {}
    if (state.dateFilter.preset === CUSTOM) {
      dateFilter = {
        ...state.dateFilter,
      }
    } else {
      dateFilter = {
        preset: state.dateFilter.preset,
      }
    }
    sessionStorage.setItem('dateFilter', JSON.stringify(dateFilter))
  }, [state.dateFilter])

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  )
}

ContextStore.propTypes = {
  children: PropTypes.element,
}

export const Context = createContext(initialState)
export default ContextStore
