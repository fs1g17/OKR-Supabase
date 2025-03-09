export function getNodeById(root: DataNode, id: number): DataNode | null {
  if (root.id === id) return root;

  if (root.children.length === 0) return null;

  return (
    root.children
      .map((node) => getNodeById(node, id))
      .find((node) => node !== null) ?? null
  );
}

export function updateNodeById(id: number, root: DataNode, data: Omit<DataNode, "children">): void {
  const node = getNodeById(root, id);

  if(!node) return;

  node.data = data.data;
}
