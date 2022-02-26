import React, { useMemo } from 'react';

export type DataListInputArgs = {
  value: string;
  onValueChange: (newValue: string) => void;
  list: string[];
};

export default function DataListInput({
  value,
  onValueChange,
  list,
}: DataListInputArgs) {
  const listComponents = useMemo(
    () =>
      list.map((v) => (
        <option key={v} value={v}>
          {v}
        </option>
      )),
    [list]
  );
  return (
    <>
      <input
        list="dataList"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
      <datalist id="dataList">{listComponents}</datalist>
    </>
  );
}
