import { useArrayTabState, useRecordState } from "../states";
import ArrayTab from "./ArrayTab";
import HistoryListItem from "./HistoryListItem";

export default function HistoryList() {
  const recordState = useRecordState();
  const arrayTabState = useArrayTabState();
  const tab = arrayTabState.tabData.tab;

  const sortRecord = (records, tab) => {
    let comparison = 0;
    return [...records].sort((a, b) => {
      switch (tab) {
        case 0:
          comparison = a.recordCount - b.recordCount;
          break;
        case 1:
          comparison = b.recordCount - a.recordCount;
          break;
        case 3:
          comparison = new Date(a.regDate) - new Date(b.regDate);
          break;
          case 4:
          comparison = new Date(b.regDate) - new Date(a.regDate);
          break;
      }
      return comparison;
    });
  };

  return (
    <>
      <ul className="flex-1">
        <ArrayTab />
        {sortRecord(recordState.recordHistory, tab).map((el, index) => {
          return (
            <>
              <HistoryListItem history={el}/>
            </>
          );
        })}
      </ul>
    </>
  );
}
