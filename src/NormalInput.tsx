import React from 'react';

export type NormalInputArgs = {
  value: string;
  onValueChange: (newValue: string) => void;
};

export default function NormalInput({ value, onValueChange }: NormalInputArgs) {
  return (
    <>
      <input value={value} onChange={(e) => onValueChange(e.target.value)} />
    </>
  );
}
