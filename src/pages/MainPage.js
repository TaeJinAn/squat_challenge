import { Button } from "@mui/material";
import AddCountModal from "../components/AddCountModal";
import CountNumber from "../components/CountNumber";
import { useModalOpenState, useRecordState } from "../states";
import NoticeSnackBar from "../components/NoticeSnackBar";

function MainPage() {
  const recordState = useRecordState();
  const modalState = useModalOpenState();
  return (
    <>
      <div className="flex flex-1 justify-center items-center flex-col">
        <div className="font-mono text-[120px] text-blue-400">
          <CountNumber
            start={recordState.goalCount}
            end={recordState.restCount}
            duration={2}
            format={5}
          />
        </div>
        <div>
          <Button variant="contained" onClick={modalState.handleOpen}>
            기록
          </Button>
          <AddCountModal />
          <NoticeSnackBar />
        </div>
      </div>
    </>
  );
}

export default MainPage;
