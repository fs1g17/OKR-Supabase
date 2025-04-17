import OkrChart from "../okr/[id]/components/OkrChart";

const initialNodes: DataNode = {
  id: 0,
  parentId: 0,
  data: {
    objective: "Test",
    keyResults: []
  },
  children: []
}

const initialData: OkrData = {
  counter: 1,
  data: initialNodes
}

export default function Page() {
  return(
    <OkrChart id={""} initialData={initialData} />
  )
}