import { Button, Modal } from "@mui/material";
import { useModalOpenState, useOptionDrawerState, useRecordState } from "../states";
import { useEffect } from "react";

export default function RecordModal({ msg, initialCount = 0, onCommit }) {
  const recordState = useRecordState();
  const modalState = useModalOpenState();
  const optionDrawerState = useOptionDrawerState();
  useEffect(() => {
    recordState.setRecordCount(initialCount || 0);
  }, [initialCount]);

  const onClickCancelBtn = () => {
    recordState.setRecordCount(0);
    modalState.handleClose();
  };

  return (
    <>
      <Modal
        open={modalState.open}
        onClose={() => {
          modalState.handleClose();
          optionDrawerState.handleClose();
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex !justify-center !items-center"
      >
        <div className="absolute bg-white shadow-xl p-4 rounded-lg w-full max-w-lg">
          <div className="flex justify-center">
            <div>{msg}</div>
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
              <Button variant="contained" color="primary" onClick={onCommit}>
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
