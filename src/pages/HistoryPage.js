import { Button } from "@mui/material";
import HistoryList from "../components/HistoryList";
import ModifyModal from "../components/ModifyModal";
import NoticeSnackBar from "../components/NoticeSnackBar";
import OptionDrawer from "../components/OptionDrawer";
import { useRecordState } from "../states";
import { NavLink } from "react-router-dom";

function HistoryPage() {
  const recordState = useRecordState();
  return (
    <>
      <div className="flex flex-1 justify-center items-center">
        {recordState.recordHistory.length == 0 ? (
          <>
            <div className="flex-1 flex-col flex justify-center items-center gap-2">
              <span>기록이 없습니다. U.U</span>
              <Button component={NavLink} to="/main" variant="contained">
                기록하러 가기
              </Button>
            </div>
          </>
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
