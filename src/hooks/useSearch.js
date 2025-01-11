import { useState } from "react";

export default function useSearch() {
  const [input, setInput] = useState("");

  return { setInput, input };
}
