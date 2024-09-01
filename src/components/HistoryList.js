import { useRecordState } from "../states";

export default function HistoryList() {
  const recordState = useRecordState();
  return (
    <>
      <ul>
        {recordState.recordHistory.map((el, index) => {
          return (
            <>
              <li>
                {el.recordCount} regDate : {el.regDate}
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
