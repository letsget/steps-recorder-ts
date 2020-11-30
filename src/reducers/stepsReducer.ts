import {
  SET_DATE,
  SET_STEPS,
  SET_DELETE,
  SET_EDIT_MODE,
  SET_EDIT_STEPS,
  SET_EDIT_DATE,
} from '../actions';
import { SyncAction, TableData } from '../types';

interface StepsState {
  date: string;
  steps: string;
  tableData: TableData[];
  isInEditMode: boolean;
  sortedData: TableData[];
}

const initialState: StepsState = {
  date: '',
  steps: '',
  tableData: [
    {
      id: '0',
      date: '2019-08-20',
      steps: 14,
    },
    {
      id: '1',
      date: '2020-07-19',
      steps: 9,
    },
    {
      id: '2',
      date: '2006-06-18',
      steps: 8,
    },
  ],
  isInEditMode: false,
  sortedData: [],
};

const stepsReducer = (
  state: StepsState = initialState,
  { type, payload }: SyncAction
) => {
  switch (type) {
    case SET_DATE:
      return {
        ...state,
        date: payload,
      };

    case SET_STEPS:
      return {
        ...state,
        steps: payload,
      };

    case SET_DELETE:
      return {
        ...state,
        tableData: payload,
      };

    case SET_EDIT_MODE:
      return {
        ...state,
        isInEditMode: payload,
      };

    case SET_EDIT_STEPS:
      return {
        ...state,
        steps: payload,
      };

    case SET_EDIT_DATE:
      return {
        ...state,
        date: payload,
      };

    default:
      return state;
  }
};

export { stepsReducer };
