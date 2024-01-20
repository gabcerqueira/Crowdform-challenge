export type Operation = {
  title: string;
  type: OperationType;
  amount: number;
};

export enum OperationType {
  INCOME = 'INCOME',
  OUTCOME = 'OUTCOME',
}
