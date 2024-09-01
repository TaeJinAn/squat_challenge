import { Button } from "@mui/material";
import EditCountModal from "../components/EditCountModal";
import CountNumber from "../components/CountNumber";
import { useModalOpenState, useRecordState } from "../states";



function MainPage() {
  const recordState = useRecordState();
  const modalState = useModalOpenState();
  return (
    <>
      <div className="flex flex-1 justify-center items-center flex-col">
        <div className="font-mono text-[120px] text-blue-400">
          <CountNumber start={recordState.goalCount} end={recordState.restCount} duration={2} format={5}/>
        </div>
        <div>
          <Button variant="contained" onClick={modalState.handleOpen}>
            기록
          </Button>
          <EditCountModal />
        </div>
      </div>
    </>
  );
}

export default MainPage;
