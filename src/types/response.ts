export interface OkrListType {
  id: number;
  name: string;
}

export interface NewOkrType {
  id: number;
  name: string;
  okr: string;
}

export interface BackendResponse<T> {
  message: string;
  data: T
}
