import { useState } from "react";

export default function useCards() {
  const [isShowContent, setIsShowContent] = useState(false);
  const toggleContent = () =>
    isShowContent ? setIsShowContent(false) : setIsShowContent(true);

  return { isShowContent, toggleContent };
}
