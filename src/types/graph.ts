interface DataNode {
  id: number;
  parentId: number;
  data: {
    objective: string;
    keyResults: string[]
  };
  children: DataNode[];
}

interface OkrData {
  counter: number;
  data: DataNode;
}
