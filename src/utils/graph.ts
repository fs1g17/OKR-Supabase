export function getNodeById(root: DataNode, id: number): DataNode | null {
  if (root.id === id) return root;

  if (root.children.length === 0) return null;

  return (
    root.children
      .map((node) => getNodeById(node, id))
      .find((node) => node !== null) ?? null
  );
}

export function updateNodeObjectiveById(
  id: number,
  root: DataNode,
  objective: string
): void {
  const node = getNodeById(root, id);

  if (!node) return;

  node.data.objective = objective;
}

export function addKeyResultById(
  id: number,
  root: DataNode,
  keyResult: string
): void {
  const node = getNodeById(root, id);

  if (!node) return;

  node.data.keyResults.push(keyResult);
}

export function updateKeyResultById(
  id: number,
  root: DataNode,
  keyResult: string,
  keyResultNumber: number
): void {
  const node = getNodeById(root, id);

  if (!node) return;

  node.data.keyResults[keyResultNumber] = keyResult;
}

export function updateNodeById(
  id: number,
  root: DataNode,
  data: Omit<DataNode, "children">
): void {
  const node = getNodeById(root, id);

  if (!node) return;

  node.data = data.data;
}

export function addChildToNodeById(
  id: number,
  okrData: OkrData,
  objective: string
): void {
  const node = getNodeById(okrData.data, id);

  if (!node) return;

  node.children.push({
    id: okrData.counter,
    parentId: id,
    data: {
      objective,
      keyResults: [],
    },
    children: [],
  });
  okrData.counter += 1;
}

export function removeNodeById(id: number, okrData: OkrData): void {
  console.log("called remove Node");
  const node = getNodeById(okrData.data, id);
  if (!node) return;

  console.log({ node });

  const parent = getNodeById(okrData.data, node.parentId);
  if (!parent) return;

  console.log({ parent });

  parent.children = parent.children.filter((child) => child.id !== id);
}
