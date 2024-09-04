import { useModalOpenState, useRecordState, useSnackBarState } from "../states";
import RecordModal from "./RecordModal";

export default function AddCountModal() {
  const recordState = useRecordState();
  const modalState = useModalOpenState();
  const snackbarState = useSnackBarState();

  const onCommit = () => {
    recordState.commitCount();
    snackbarState.openSnackbar(`이번 세트에 ${recordState.recordCount}회 수행하셨습니다.`);
    modalState.handleClose();
  }
  return (
    <>
      <RecordModal msg={"이번에 몇회 하셨나요?"} initialCount={10} onCommit={onCommit}/>
    </>
  );
}
