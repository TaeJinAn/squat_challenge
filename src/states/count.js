import { useState } from "react";
import confetti from "canvas-confetti";
import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
import { dateToStr } from "../utils/commonUtil";
import { produce } from "immer";

const { persistAtom } = recoilPersist();

const { persistAtom: recordHistoryPersist } = recoilPersist();

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
    duration: 6000,
    msg: "",
    severity: "success",
  },
});

const restCountAtom = atom({
  key: "app/restCountAtom",
  default: 10000,
  effects_UNSTABLE: [persistAtom],
});

const recordHistoryAtom = atom({
  key: "app/recordHistoryAtom",
  default: [],
  effects_UNSTABLE: [recordHistoryPersist],
});

const optionDrawerAtom = atom({
  key: "app/optionDrawerAtom",
  default: false,
});

const recordIdAtom = atom({
  key: "app/recordIdAtom",
  default: null,
});

const recordCountAtom = atom({
  key: "app/recordCountAtom",
  default: 0,
});

export function useRecordState() {
  const goalCount = 10000;
  const [recordCount, setRecordCount] = useRecoilState(recordCountAtom);
  const [restCount, setRestCount] = useRecoilState(restCountAtom);
  const [recordHistory, setRecordHistory] = useRecoilState(recordHistoryAtom);

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
    const record = {
      recordCount: recordCount,
      regDate: dateToStr(new Date()),
    };
    setRecordHistory([record, ...recordHistory]);
    setRestCount(restCount - recordCount);
    setRecordCount(0);
  };

  const removeRecord = (id) => {
    const index = recordHistory.length - id;
    const targetCount = recordHistory[index].recordCount;
    console.log("targetCount",targetCount);
    setRestCount(restCount + targetCount);
    setRecordHistory(
      produce(recordHistory, (draft) => {
        draft.splice(index, 1);
      })
    );
  };

  return {
    goalCount,
    restCount,
    recordCount,
    setRecordCount,
    changeRecordCount,
    commitCount,
    recordHistory,
    removeRecord
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
  const handleOpen = () => setSnackbar({ ...snackbar, open: true });
  const handleClose = () => setSnackbar({ ...snackbar, open: false });
  const openSnackbar = (msg, duration, severity) => {
    console.log(severity);
    setSnackbar({
      open: true,
      duration: duration,
      severity: severity,
      msg: msg,
    });
  };
  return {
    snackbar,
    handleOpen,
    handleClose,
    openSnackbar,
  };
}

export function useOptionDrawerState() {
  const [open, setOpen] = useRecoilState(optionDrawerAtom);
  const [recordId, setRecordId] = useRecoilState(recordIdAtom);
  const handleOpen = (id) => {
    setOpen(true);
    setRecordId(id);
  };
  const handleClose = () => setOpen(false);
  return {
    open,
    recordId,
    handleClose,
    handleOpen,
  };
}
