import React, { useContext, useMemo } from 'react'
import moment from 'moment'
import { Context } from 'Context/ContextStore'
import { SET_DATE_FILTER } from 'Context/constant'
import { Select, DatePicker as AntDatePicker } from 'antd'

const { Option } = Select
const { RangePicker } = AntDatePicker

const TODAY = 'TODAY'
const LAST_7_DAYS = 'LAST_7_DAYS'
const LAST_14_DAYS = 'LAST_14_DAYS'
const LAST_30_DAYS = 'LAST_30_DAYS'
const CURRENT_MONTH = 'CURRENT_MONTH'
const PREVIOUS_MONTH = 'PREVIOUS_MONTH'
const PREVIOUS_QUARTER = 'PREVIOUS_QUARTER'
const ALL = 'ALL'
const CUSTOM = 'CUSTOM'

const DatePicker = () => {
  const [state, dispatch] = useContext(Context)
  const { dateFilter } = state
  const [preset, setPreset] = React.useState(TODAY)
  const [isDatePickerVisible, setIsDatePickerVisible] = React.useState(false)

  const handleChange = (date, dateString) => {
    if (!date) {
      const now = moment()
      dispatch({
        type: SET_DATE_FILTER,
        payload: {
          ...dateFilter,
          preset: TODAY,
          startDate: now.clone().startOf('day'),
          endDate: now.endOf('day'),
        },
      })
      setPreset(TODAY)
    } else {
      dispatch({
        type: SET_DATE_FILTER,
        payload: {
          ...dateFilter,
          preset: CUSTOM,
          startDate: date[0].startOf('day'),
          endDate: date[1].endOf('day'),
        },
      })
    }
  }

  const handlePresetChange = (e) => {
    const now = moment()
    setPreset(e)
    switch (e) {
      case TODAY:
        dispatch({
          type: SET_DATE_FILTER,
          payload: {
            ...dateFilter,
            preset: TODAY,
            startDate: now.startOf('day'),
            endDate: now.endOf('day'),
          },
        })
        break
      case LAST_7_DAYS:
        dispatch({
          type: SET_DATE_FILTER,
          payload: {
            ...dateFilter,
            preset: LAST_7_DAYS,
            startDate: now.clone().subtract(7, 'days').startOf('day'),
            endDate: now.endOf('day'),
          },
        })
        break
      case LAST_14_DAYS:
        dispatch({
          type: SET_DATE_FILTER,
          payload: {
            ...dateFilter,
            preset: LAST_14_DAYS,
            startDate: now.clone().subtract(14, 'days').startOf('day'),
            endDate: now.endOf('day'),
          },
        })
        break
      case LAST_30_DAYS:
        dispatch({
          type: SET_DATE_FILTER,
          payload: {
            ...dateFilter,
            preset: LAST_30_DAYS,
            startDate: now.clone().subtract(30, 'days').startOf('day'),
            endDate: now.endOf('day'),
          },
        })
        break
      case CURRENT_MONTH:
        dispatch({
          type: SET_DATE_FILTER,
          payload: {
            ...dateFilter,
            preset: CURRENT_MONTH,
            startDate: now.clone().startOf('month'),
            endDate: now.endOf('month'),
          },
        })
        break
      case PREVIOUS_MONTH:
        const lastMonth = now.subtract(1, 'months')
        dispatch({
          type: SET_DATE_FILTER,
          payload: {
            ...dateFilter,
            preset: PREVIOUS_MONTH,
            startDate: lastMonth.clone().startOf('month'),
            endDate: lastMonth.endOf('month'),
          },
        })
        break
      case PREVIOUS_QUARTER:
        const lastQuarter = now.subtract(1, 'quarters')
        dispatch({
          type: SET_DATE_FILTER,
          payload: {
            ...dateFilter,
            preset: PREVIOUS_QUARTER,
            startDate: lastQuarter.clone().startOf('quarter'),
            endDate: lastQuarter.endOf('quarter'),
          },
        })
        break
      case ALL:
        dispatch({
          type: SET_DATE_FILTER,
          payload: {
            ...dateFilter,
            preset: ALL,
            startDate: moment('1970-01-01').startOf('day'),
            endDate: moment('2999-01-01').endOf('day'),
          },
        })
        break
      case CUSTOM:
        setIsDatePickerVisible(true)
        break
    }
  }

  return useMemo(() => {
    return (
      <>
        <Select
          style={{ width: 180 }}
          defaultValue={TODAY}
          value={preset}
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
        {!!isDatePickerVisible && (
          <RangePicker style={{ marginLeft: 15 }} onChange={handleChange} />
        )}
      </>
    )
  }, [dateFilter, preset, dispatch])
}

export default DatePicker
