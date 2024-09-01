import { Button } from "@mui/material";
import { useState } from "react";
import EditCountModal from "../components/EditCountModal";
import CountNumber from "../components/CountNumber";



function MainPage() {
  const goalCount = 10000;
  const [doneCount, setDoneCount] = useState(0);
  const restCount = goalCount - doneCount;
  const [addCount, setAddCount] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="flex flex-1 justify-center items-center flex-col">
        <div className="font-mono text-[120px] text-blue-400">
          <CountNumber start={restCount} duration={2}/>
        </div>
        <div>
          <Button variant="contained" onClick={handleOpen}>
            기록
          </Button>
          <EditCountModal open={open} handleClose={handleClose} />
        </div>
      </div>
    </>
  );
}

export default MainPage;
