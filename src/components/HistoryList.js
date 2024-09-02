import { useRecordState } from "../states";
import HistoryListItem from "./HistoryListItem";

export default function HistoryList() {
  const recordState = useRecordState();
  return (
    <>
      <ul className="flex-1">
        {recordState.recordHistory.map((el, index) => {
          return (
            <>
              <HistoryListItem history={el} index={recordState.recordHistory.length - index}/>
            </>
          );
        })}
      </ul>
    </>
  );
}
