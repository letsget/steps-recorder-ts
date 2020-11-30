export interface SyncAction {
  type: string;
  payload?: any;
}

export interface TableData {
  id: string;
  date: string;
  steps: number;
}
