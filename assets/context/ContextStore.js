import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import ContextReducer from './ContextReducer'
import { DEFAULT_FORMAT } from 'Components/DatePicker/constant'
import moment from 'moment'

const initialState = {
  app: {
    sideNavCollapse: false,
  },
  dateFilter: {
    preset: null,
    startDate: moment().startOf('day').format(DEFAULT_FORMAT),
    endDate: moment().endOf('day').format(DEFAULT_FORMAT),
  },
  globalError: null,
}

const ContextStore = ({ children }) => {
  const [state, dispatch] = useReducer(ContextReducer, initialState)

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  )
}

ContextStore.propTypes = {
  children: PropTypes.array,
}

export const Context = createContext(initialState)
export default ContextStore
