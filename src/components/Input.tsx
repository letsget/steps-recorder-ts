import React, { FC } from 'react';

interface InputProps {
  steps: number;
  onInput: () => void;
}

const Input: FC<InputProps> = ({ steps, onInput }) => (
  <input
    value={steps}
    min="0"
    required
    onChange={onInput}
    className="input"
    type="number"
    placeholder="Enter a number"
  />
);

export default Input;
