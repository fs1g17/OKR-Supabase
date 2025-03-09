interface DataNode {
  id: number;
  data: {
    title: string;
    description: string;
  };
  children: DataNode[];
}
