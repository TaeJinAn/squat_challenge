import { Button, Modal } from "@mui/material";
import { useModalOpenState, useRecordState } from "../states";

export default function EditCountModal() {
  const recordState = useRecordState();
  const modalState = useModalOpenState();

  const onClickCancelBtn = () => {
    recordState.setRecordCount(0);
    modalState.handleClose();
  }

  const onClickCommitCount = () => {
    recordState.commitCount();
    modalState.handleClose();
  }

  return (
    <>
      <Modal
        open={modalState.open}
        onClose={modalState.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex !justify-center !items-center"
      >
        <div className="absolute bg-white shadow-xl p-4 rounded-lg w-full max-w-lg">
          <div className="flex justify-center">
            <div>이번에 몇회 하셨나요?</div>
          </div>
          <div className="font-mono text-[120px] text-blue-400 justify-center flex">
            {String(recordState.recordCount).padStart(2, "0")}
          </div>
          <div className="mt-5">
            <div className="flex gap-2 justify-center">
              <Button
                variant="contained"
                color="primary"
                onClick={() => recordState.changeRecordCount(10)}
              >
                + 10
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => recordState.changeRecordCount(1)}
              >
                + 1
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => recordState.changeRecordCount(-10)}
              >
                - 10
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => recordState.changeRecordCount(-1)}
              >
                - 1
              </Button>
            </div>
            <div className="flex gap-2 justify-center items-center mt-3">
              <Button variant="contained" color="primary" onClick={onClickCommitCount}>
                적용
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={onClickCancelBtn}
              >
                취소
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
