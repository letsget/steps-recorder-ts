import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { formatDate } from '../common';
import { TableData } from '../types';
import { AppState } from '../reducers';

interface TableRowProps {
  date: string;
  steps: number;
  onDelete: (id: string) => TableData[];
  id: string;
  data: TableData[];
}

const TableRow: FC<TableRowProps> = ({ date, steps, onDelete, id, data }) => {
  const edit = useSelector(
    ({ app: { isInEditMode } }: AppState) => isInEditMode
  );

  const handleEditChange = ({
    currentTarget: { value },
  }: React.FormEvent<HTMLInputElement>): void => {
    console.log(value);
  };

  const handleDateChange = ({
    currentTarget: { value },
  }: React.FormEvent<HTMLInputElement>): void => {
    console.log(value);
  };

  const handleEdit = (): void => console.log('testing');

  const handleEditSubmit = (id: string): void => {
    const editedData = data.map((item) => {
      if (item.id === id) {
        return {
          id,
          date,
          steps,
        };
      }
      return item;
    });
    // setTableData(editedData);
    // handleEdit();
  };

  return (
    <>
      {!edit ? (
        <>
          <div className="date">{date}</div>
          <div className="steps">{steps}</div>
          <div onClick={handleEdit} className="edit">
            <i className="fas fa-user-edit" />
          </div>
          <div onClick={() => onDelete(id)} className="remove-btn">
            <i className="fas fa-times" />
          </div>
        </>
      ) : (
        <>
          <input
            style={{ width: '125px' }}
            type="date"
            value={date}
            onChange={handleDateChange}
          />
          <input
            style={{ width: '60px' }}
            type="text"
            value={date}
            onChange={handleEditChange}
          />
          <button onClick={() => handleEditSubmit(id)}>save</button>
          <button onClick={handleEdit}>cancel</button>
        </>
      )}
    </>
  );
};

export default TableRow;
