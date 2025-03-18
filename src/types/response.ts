export interface OkrType {
  id: number;
  name: string;
  okr: OkrData;
}

export interface BackendResponse<T> {
  message: string;
  data: T
}
