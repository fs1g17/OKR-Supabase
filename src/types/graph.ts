interface DataNode {
  id: number;
  data: {
    objective: string;
    description: string;
  };
  children: DataNode[];
}
