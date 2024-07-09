export type Member = {
  id: string;
  name: string;
  status: string;
  no_bpjs: string;
  occupation: string;
  class: string;
  birthdate: string;
  faskes: string;
};
export interface APIResponse<T> {
  status: string;
  data: T;
  message: string;
}

export interface StringDictionary {
  [key: string]: string
}
