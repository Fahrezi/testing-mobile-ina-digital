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
  data: T | undefined;
  error: string;
}
