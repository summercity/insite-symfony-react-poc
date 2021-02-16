import React from "react";
import moment from "moment";
import DateRangeContext from "./../../context/DateRangeContext";
import { Select, DatePicker as AntDatePicker } from "antd";
const { Option } = Select;
const { RangePicker } = AntDatePicker;

const DatePicker = () => {
  const { setStartDate, setEndDate, startDate, endDate } = React.useContext(
    DateRangeContext
  );
  const [isDatePickerVisible, setIsDatePickerVisible] = React.useState(false);

  const handleChange = (date, dateString) => {
    setStartDate(date[0].startOf("day"));
    setEndDate(date[1].endOf("day"));
  };

  const handlePresetChange = (e) => {
    const now = moment();
    switch (e) {
      case TODAY:
        setStartDate(now.startOf("day"));
        setEndDate(now.endOf("day"));
        break;
      case LAST_7_DAYS:
        setStartDate(now.clone().subtract(7, "days").startOf("day"));
        setEndDate(now.endOf("day"));
        break;
      case LAST_14_DAYS:
        setStartDate(now.clone().subtract(14, "days").startOf("day"));
        setEndDate(now.endOf("day"));
        break;
      case LAST_30_DAYS:
        setStartDate(now.clone().subtract(30, "days").startOf("day"));
        setEndDate(now.endOf("day"));
        break;
      case CURRENT_MONTH:
        setStartDate(now.clone().startOf("month"));
        setEndDate(now.endOf("month"));
        break;
      case PREVIOUS_MONTH:
        const lastMonth = now.subtract(1, "months");
        setStartDate(lastMonth.clone().startOf("month"));
        setEndDate(lastMonth.endOf("month"));
        break;
      case PREVIOUS_QUARTER:
        const lastQuarter = now.subtract(1, "quarters");
        setStartDate(lastQuarter.clone().startOf("quarter"));
        setEndDate(lastQuarter.endOf("quarter"));
        break;
      case ALL:
        setStartDate(null);
        setEndDate(null);
        break;
      case CUSTOM:
        setIsDatePickerVisible(true);
        break;
    }
  };

  const TODAY = "TODAY";
  const LAST_7_DAYS = "LAST_7_DAYS";
  const LAST_14_DAYS = "LAST_14_DAYS";
  const LAST_30_DAYS = "LAST_30_DAYS";
  const CURRENT_MONTH = "CURRENT_MONTH";
  const PREVIOUS_MONTH = "PREVIOUS_MONTH";
  const PREVIOUS_QUARTER = "PREVIOUS_QUARTER";
  const ALL = "ALL";
  const CUSTOM = "CUSTOM";

  return (
    <>
      <Select
        style={{ width: 180 }}
        defaultValue={TODAY}
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
      {!!isDatePickerVisible && <RangePicker onChange={handleChange} />}
    </>
  );
};

export default DatePicker;
