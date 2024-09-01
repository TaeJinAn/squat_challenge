import { Button, Modal } from "@mui/material";
import { useState } from "react";
import CountNumber from "./CountNumber";
import confetti from "canvas-confetti";

const myConfetti = confetti.create(document.querySelector("#canvas-confetti"), {
  resize: true,
  useWorker: true,
});

export default function EditCountModal({ open, handleClose }) {
  const [recordCount, setRecordCount] = useState(0);

  const changeRecordCount = (num) => {
    if (num > 0) {
      myConfetti({
        particleCount: num * 20,
        spread: 160,
      });
    }
    recordCount + num < 0
      ? setRecordCount(0)
      : setRecordCount(recordCount + num);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex !justify-center !items-center"
      >
        <div className="absolute bg-white shadow-xl p-4 rounded-lg w-full max-w-lg">
          <div className="flex justify-center">
            <div>이번에 몇회 하셨나요?</div>
          </div>
          <div className="font-mono text-[120px] text-blue-400 justify-center flex">
            {String(recordCount).padStart(2, "0")}
          </div>
          <div className="mt-5">
            <div className="flex gap-2 justify-center">
              <Button
                variant="contained"
                color="primary"
                onClick={() => changeRecordCount(10)}
              >
                + 10
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => changeRecordCount(1)}
              >
                + 1
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => changeRecordCount(-10)}
              >
                - 10
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => changeRecordCount(-1)}
              >
                - 1
              </Button>
            </div>
            <div className="flex gap-2 justify-center items-center mt-3">
              <Button variant="contained" color="primary">
                적용
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => setRecordCount(0)}
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
