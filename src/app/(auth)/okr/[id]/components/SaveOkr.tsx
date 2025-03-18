"use client";

import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useFormState } from "react-dom";
import { save } from "../actions/save";

const initialState = {
  success: false,
  message: "",
  response: null,
};

export default function SaveOkr({
  id,
  data,
  setData,
}: {
  id: string;
  data: OkrData;
  setData: (data: OkrData) => void;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(save, initialState);

  const handleSubmit = async (evt: React.FormEvent) => {
    console.log("clicked save" + id);
    evt.preventDefault();
    formAction(new FormData(formRef.current!));
  };

  if (state.response) {
    setData(state.response.data.okr);
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input name="id" value={id} className="hidden" />
      <input name="data" value={JSON.stringify(data)} className="hidden" />
      <Button type="submit">Save</Button>
    </form>
  );
}
