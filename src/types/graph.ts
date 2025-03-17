interface DataNode {
  id: number;
  data: {
    objective: string;
    description: string;
  };
  children: DataNode[];
}

interface OkrData {
  name: string;
  counter: number;
  data: DataNode;
}
