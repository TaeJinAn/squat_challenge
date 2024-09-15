import HistoryList from "../components/HistoryList";
import ModifyModal from "../components/ModifyModal";
import NoticeSnackBar from "../components/NoticeSnackBar";
import OptionDrawer from "../components/OptionDrawer";
import { useRecordState } from "../states";

function HistoryPage() {
  const recordState = useRecordState();
  return (
    <>
      <div className="flex flex-1 justify-center items-center">
        {recordState.recordHistory.length == 0 ? (
          <div className="flex-1 flex justify-center items-center">
            기록이 없습니다. U.U
          </div>
        ) : (
          <HistoryList />
        )}
      </div>
      <OptionDrawer />
      <ModifyModal />
      <NoticeSnackBar />
    </>
  );
}

export default HistoryPage;
