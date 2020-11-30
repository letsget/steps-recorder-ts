// ACTIONS AND TYPES
export const SET_DATE = 'SET_DATE';
export const SET_STEPS = 'SET_STEPS';
export const SET_DELETE = 'SET_DELETE';
export const SET_EDIT_MODE = 'SET_EDIT_MODE';
export const SET_EDIT_STEPS = 'SET_EDIT_STEPS';
export const SET_EDIT_DATE = 'SET_EDIT_DATE';

export const setDate = (date: string) => ({
  type: SET_DATE,
  payload: date,
});

export const setSteps = (steps: number) => ({
  type: SET_STEPS,
  payload: steps,
});

export const setDelete = (id: string) => ({
  type: SET_DELETE,
  payload: id,
});

export const setEditMode = (mode: boolean) => ({
  type: SET_EDIT_MODE,
  payload: mode,
});

export const setEditSteps = (steps: number) => ({
  type: SET_EDIT_STEPS,
  payload: steps,
});

export const setEditDate = (date: string) => ({
  type: SET_EDIT_DATE,
  payload: date,
});
