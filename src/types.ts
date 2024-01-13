export interface DataTableTypes {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

export interface scheduleDataTableTypes {
  title: string;
  description: string;
  subject: string | number;
  frequency: string;
  timing: string;
  repeat?:object
}
export interface FormInputTypes {
  title: string;
  frequency: string;
  timing: string;
  subject: string;
  repeat: Record<string, any>;
}
export interface EditSchedulePayload {
  id: string;
  payload: scheduleDataTableTypes
}