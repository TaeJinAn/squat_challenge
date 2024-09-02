import { getWiseSaying } from "../utils/commonUtil";

export default function WiseSaying({index}) {
  const {str, writer} = getWiseSaying().get(index);
  return (
    <>
      {str}
      <br />- {writer} -
    </>
  );
}
