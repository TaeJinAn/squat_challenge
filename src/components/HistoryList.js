import { useRecordState } from "../states";
import HistoryListItem from "./HistoryListItem";

export default function HistoryList() {
  const recordState = useRecordState();
  return (
    <>
      <ul className="flex-1">
        {recordState.recordHistory.map((el, index) => {
          const id = recordState.recordHistory.length - index;
          return (
            <>
              <HistoryListItem history={el} id={id}/>
            </>
          );
        })}
      </ul>
    </>
  );
}
