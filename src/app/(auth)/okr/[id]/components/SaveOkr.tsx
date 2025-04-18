"use client";

import { Button } from "@/components/ui/button";
import { saveOkr } from "@/supabase/supabase";
import { useState } from "react";

export default function SaveOkr({ id, value }: { id: number; value: OkrData }) {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    saveOkr({ id, value })
      .then(() => console.log("successfully saved!"))
      .finally(() => setLoading(false));
  };
  return (
    <Button onClick={handleClick} disabled={loading}>
      {loading ? "Saving..." : "Save"}
    </Button>
  );
}
