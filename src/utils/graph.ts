export function getNodeById(root: DataNode, id: number): DataNode | null {
  if (root.id === id) return root;

  if (root.children.length === 0) return null;

  return (
    root.children
      .map((node) => getNodeById(node, id))
      .find((node) => node !== null) ?? null
  );
}

export function updateNodeObjectiveById(id: number, root: DataNode, objective: string): void {
  const node = getNodeById(root, id);

  if(!node) return;

  node.data.objective = objective;
}

export function addKeyResultById(id: number, root: DataNode, keyResult: string): void {
  const node = getNodeById(root, id);

  if (!node) return;

  node.data.keyResults.push(keyResult);
}

export function updateKeyResultById(id: number, root: DataNode, keyResult: string, keyResultNumber: number): void {
  const node = getNodeById(root, id);

  if (!node) return;

  node.data.keyResults[keyResultNumber] = keyResult;
}

export function updateNodeById(id: number, root: DataNode, data: Omit<DataNode, "children">): void {
  const node = getNodeById(root, id);

  if(!node) return;

  node.data = data.data;
}

export function addChildToNodeById(id: number, okrData: OkrData, data: Omit<DataNode, "children">): void {
  const node = getNodeById(okrData.data, id);

  if(!node) return; 

  node.children.push({
    id: okrData.counter,
    data: data.data,
    children: []
  });
  okrData.counter += 1;
}
