import OkrChart from "../okr/[id]/components/OkrChart";

const initialNodes: DataNode = {
  id: 0,
  data: {
    objective: "Test",
    keyResults: []
  },
  children: []
}

const initialData: OkrData = {
  counter: 0,
  data: initialNodes
}

export default function Page() {
  return(
    <OkrChart id={""} initialData={initialData} />
  )
}