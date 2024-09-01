import { useState } from "react";
import confetti from "canvas-confetti";
import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const myConfetti = confetti.create(document.querySelector("#canvas-confetti"), {
  resize: true,
  useWorker: true,
});

const modalOpenAtom = atom({
  key: "app/modalOpenAtom",
  default: false,
});

const snackBarAtom = atom({
  key: "app/snackOpenAtom",
  default: {
    open: false,
    duration : 6000,
    msg : "",
    severity: "success"
  },
});

const restCountAtom = atom({
  key: "app/restCountAtom",
  default: 10000,
  effects_UNSTABLE: [persistAtom],
});

export function useRecordState() {
  const goalCount = 10000;
  const [recordCount, setRecordCount] = useState(0);
  const [restCount, setRestCount] = useRecoilState(restCountAtom);

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

  const commitCount = () => {
    setRestCount(restCount - recordCount);
    setRecordCount(0);
  };

  return {
    goalCount,
    restCount,
    recordCount,
    setRecordCount,
    changeRecordCount,
    commitCount,
  };
}

export function useModalOpenState() {
  const [open, setOpen] = useRecoilState(modalOpenAtom);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return {
    open,
    handleOpen,
    handleClose,
  };
}

export function useSnackBarState() {
  const [snackbar, setSnackbar] = useRecoilState(snackBarAtom);
  const handleOpen = () => setSnackbar({...snackbar, open: true});
  const handleClose = () => setSnackbar({...snackbar, open: false});
  const openSnackbar = (msg, duration, severity) => {
    setSnackbar({open:true, duration: duration, severity: severity, msg:msg});
  }
  return {
    snackbar,
    handleOpen,
    handleClose,
    openSnackbar
  }
}
