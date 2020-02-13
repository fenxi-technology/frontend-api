
export interface ISensor {
  codeName: string;
  tableName: string;
  sensorFunc: string;
  type: string;
  description: string;
  imgaddr: string;
}

export interface IResponse {
  code: number;
  summary: string;
  data: ISensor[];
}

export interface IOneResponse {
  code: number;
  summary: string;
  data: ISensor;
}

