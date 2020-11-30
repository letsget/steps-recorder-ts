import React, { FC } from 'react';

interface DateProps {
  onInput: () => void;
  date: string;
}

const DataPicker: FC<DateProps> = ({ onInput, date }) => (
  <input
    className="input"
    required
    type="date"
    onChange={onInput}
    value={date}
  />
);
export default DataPicker;
