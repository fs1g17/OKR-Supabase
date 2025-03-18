export interface OkrListType {
  id: number;
  name: string;
}

export interface NewOkrType {
  id: number;
  name: string;
  okr: OkrData;
}

export interface OkrType {
  name: string;
  okr: OkrData;
}

export interface BackendResponse<T> {
  message: string;
  data: T
}
