export interface OkrListType {
  id: number;
  name: string;
}

export interface OkrListResponse {
  message: string;
  data: OkrListType[];
}
