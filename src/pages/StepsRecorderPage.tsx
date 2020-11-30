import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DataPicker from '../components/DatePicker';
import { TableData } from '../types';
import Button from '../components/Button';
import Input from '../components/Input';
import Table from '../components/Table';
import styled from 'styled-components';
import { AppState } from '../reducers';
import { nanoid } from 'nanoid';

const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  max-width: 600px;
  margin: 50px auto;
  padding-left: 15px;
  padding-right: 15px;
`;

const FormWrapper = styled.form`
  max-width: 400px;
  display: flex;
  justify-content: space-around;
  margin: auto;
`;

const StepsRecorderPage = () => {
  const tableData = useSelector(
    ({ app: { tableData } }: AppState) => tableData
  );
  const date = useSelector(({ app: { date } }: AppState) => date);
  const steps = useSelector(({ app: { steps } }: AppState) => steps);

  const hasDate = (data: TableData[], date: string) =>
    data.find((item) => item.date === date);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setDate('');
    // setSteps('');
    if (hasDate(tableData, date)) {
      const newData = tableData.reduce((acc: TableData[], curr: TableData) => {
        if (curr.date === date) {
          return [
            ...acc,
            {
              ...curr,
              steps: Number(curr.steps) + Number(steps),
            },
          ];
        }
        return [...acc, curr];
      }, []);
      return newData;
    }
    return setTableData([
      ...tableData,
      {
        id: nanoid(),
        date: date,
        steps: steps,
      },
    ]);
  };

  const handleStepsChange = (value: number): void => {
    console.log(value);
  };

  const handleDelete = (id: string): TableData[] => {
    return tableData.filter((entry: TableData) => entry.id !== id);
  };

  const handleDateInput = ({
    currentTarget: { value },
  }: React.FormEvent<HTMLInputElement>): void => {
    console.log(value);
  };

  const handleStepsInput = ({
    currentTarget: { value },
  }: React.FormEvent<HTMLInputElement>): void => {
    console.log(value);
  };

  return (
    <Container>
      <FormWrapper onSubmit={handleSubmit}>
        <label htmlFor="date">
          <DataPicker date={date} onInput={handleDateInput} />
        </label>
        <label htmlFor="hours">
          <Input steps={steps} onInput={handleStepsInput} />
        </label>
        <Button value={'ADD'} />
      </FormWrapper>
      <Table
        date={date}
        steps={steps}
        data={tableData}
        onInput={handleStepsChange}
        onDelete={handleDelete}
      />
    </Container>
  );
};

export default StepsRecorderPage;
