import React from "react";
import moment from "moment";

const now = moment();
const startDate = now.startOf("day");
const endDate = now.endOf("day");

const DateRangeContext = React.createContext({ startDate, endDate });
export const DateRangeContextProvider = ({ children }) => {
  const [startDate, setStartDate] = React.useState(now.startOf("day"));
  const [endDate, setEndDate] = React.useState(now.endOf("day"));
  return (
    <DateRangeContext.Provider
      value={{ startDate, setStartDate, endDate, setEndDate }}
    >
      {children}
    </DateRangeContext.Provider>
  );
};

export default DateRangeContext;
