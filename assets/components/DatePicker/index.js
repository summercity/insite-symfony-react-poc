import React, { useContext, useMemo, useEffect, useCallback } from 'react'
import moment from 'moment'
import { Context } from 'Context/ContextStore'
import { SET_DATE_FILTER } from 'Context/constant'
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
  DEFAULT_FORMAT,
} from './constant'

import { Select, DatePicker as AntDatePicker } from 'antd'

const { Option } = Select
const { RangePicker } = AntDatePicker

const DatePicker = () => {
  const [state, dispatch] = useContext(Context)
  const { dateFilter } = state

  useEffect(() => {
    const initialState = JSON.parse(sessionStorage.getItem('dateFilter'))
    initialState &&
      dispatch({
        type: SET_DATE_FILTER,
        payload: initialState,
      })
  }, [dispatch])

  useEffect(() => {
    let dateFilter = {}
    if (state.dateFilter.preset === CUSTOM) {
      dateFilter = {
        ...state.dateFilter,
      }
    } else {
      dateFilter = {
        ...state.dateFilter,
        preset: state.dateFilter.preset,
      }
    }
    sessionStorage.setItem('dateFilter', JSON.stringify(dateFilter))
  }, [state.dateFilter])

  const handleChange = useCallback(
    (date) => {
      dispatch({
        type: SET_DATE_FILTER,
        payload: {
          preset: CUSTOM,
          startDate: date[0].format(DEFAULT_FORMAT),
          endDate: date[1].format(DEFAULT_FORMAT),
        },
      })
    },
    [dispatch]
  )

  const handlePresetChange = useCallback(
    (e) => {
      const now = moment()
      switch (e) {
        case TODAY:
          dispatch({
            type: SET_DATE_FILTER,
            payload: {
              preset: TODAY,
              startDate: now.startOf('day').format(DEFAULT_FORMAT),
              endDate: now.endOf('day').format(DEFAULT_FORMAT),
            },
          })
          break
        case LAST_7_DAYS:
          dispatch({
            type: SET_DATE_FILTER,
            payload: {
              preset: LAST_7_DAYS,
              startDate: now
                .clone()
                .subtract(7, 'days')
                .startOf('day')
                .format(DEFAULT_FORMAT),
              endDate: now.endOf('day').format(DEFAULT_FORMAT),
            },
          })
          break
        case LAST_14_DAYS:
          dispatch({
            type: SET_DATE_FILTER,
            payload: {
              preset: LAST_14_DAYS,
              startDate: now
                .clone()
                .subtract(14, 'days')
                .startOf('day')
                .format(DEFAULT_FORMAT),
              endDate: now.endOf('day').format(DEFAULT_FORMAT),
            },
          })
          break
        case LAST_30_DAYS:
          dispatch({
            type: SET_DATE_FILTER,
            payload: {
              preset: LAST_30_DAYS,
              startDate: now
                .clone()
                .subtract(30, 'days')
                .startOf('day')
                .format(DEFAULT_FORMAT),
              endDate: now.endOf('day').format(DEFAULT_FORMAT),
            },
          })
          break
        case CURRENT_MONTH:
          dispatch({
            type: SET_DATE_FILTER,
            payload: {
              preset: CURRENT_MONTH,
              startDate: now.clone().startOf('month').format(DEFAULT_FORMAT),
              endDate: now.endOf('month').format(DEFAULT_FORMAT),
            },
          })
          break
        case PREVIOUS_MONTH:
          const lastMonth = now.subtract(1, 'months')
          dispatch({
            type: SET_DATE_FILTER,
            payload: {
              preset: PREVIOUS_MONTH,
              startDate: lastMonth
                .clone()
                .startOf('month')
                .format(DEFAULT_FORMAT),
              endDate: lastMonth.endOf('month').format(DEFAULT_FORMAT),
            },
          })
          break
        case PREVIOUS_QUARTER:
          const lastQuarter = now.subtract(1, 'quarters')
          dispatch({
            type: SET_DATE_FILTER,
            payload: {
              preset: PREVIOUS_QUARTER,
              startDate: lastQuarter
                .clone()
                .startOf('quarter')
                .format(DEFAULT_FORMAT),
              endDate: lastQuarter.endOf('quarter').format(DEFAULT_FORMAT),
            },
          })
          break
        case ALL:
          dispatch({
            type: SET_DATE_FILTER,
            payload: {
              preset: ALL,
              startDate: moment('1970-01-01')
                .startOf('day')
                .format(DEFAULT_FORMAT),
              endDate: moment('2999-01-01').endOf('day').format(DEFAULT_FORMAT),
            },
          })
          break
        case CUSTOM:
          dispatch({
            type: SET_DATE_FILTER,
            payload: {
              preset: CUSTOM,
              // Reset
              startDate: now.startOf('day').format(DEFAULT_FORMAT),
              endDate: now.endOf('day').format(DEFAULT_FORMAT),
            },
          })
          break
      }
    },
    [dispatch]
  )

  return useMemo(() => {
    return (
      <>
        <Select
          style={{ width: 180 }}
          defaultValue={dateFilter.preset}
          value={dateFilter.preset}
          onChange={handlePresetChange}
        >
          <Option key={1} value={TODAY}>
            Today
          </Option>
          <Option key={2} value={LAST_7_DAYS}>
            Past 7 Days
          </Option>
          <Option key={3} value={LAST_14_DAYS}>
            Past 14 Days
          </Option>
          <Option key={4} value={LAST_30_DAYS}>
            Past 30 Days
          </Option>
          <Option key={5} value={CURRENT_MONTH}>
            Current Month
          </Option>
          <Option key={6} value={PREVIOUS_MONTH}>
            Previous Month
          </Option>
          <Option key={7} value={PREVIOUS_QUARTER}>
            Previous Quarter
          </Option>
          <Option key={8} value={ALL}>
            All Recorded Data
          </Option>
          <Option key={9} value={CUSTOM}>
            Custom Range
          </Option>
        </Select>
        {dateFilter.preset === CUSTOM && (
          <RangePicker
            format={[DEFAULT_FORMAT, DEFAULT_FORMAT]}
            style={{ marginLeft: 15 }}
            onChange={handleChange}
            value={[
              moment(dateFilter.startDate, DEFAULT_FORMAT),
              moment(dateFilter.endDate, DEFAULT_FORMAT),
            ]}
          />
        )}
      </>
    )
  }, [dateFilter, handleChange, handlePresetChange])
}

export default DatePicker
