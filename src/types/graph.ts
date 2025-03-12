interface DataNode {
  id: number;
  data: {
    objective: string;
    description: string;
  };
  children: DataNode[];
}

interface OkrData {
  counter: number;
  data: DataNode;
}
