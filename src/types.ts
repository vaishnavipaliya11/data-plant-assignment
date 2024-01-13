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
  repeat?: object;
  id?: string | number;
}
export interface FormInputTypes {
  title: string;
  frequency: string;
  timing: string;
  subject: string;
  repeat: Record<string, any>;
  description: string;
  id: string;
}
export interface EditSchedulePayload {
  id: string;
  payload: FormInputTypes;
}
