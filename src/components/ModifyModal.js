import { useModalOpenState, useOptionDrawerState, useRecordState, useSnackBarState } from "../states";
import RecordModal from "./RecordModal";

export default function ModifyModal() {
  const recordState = useRecordState();
  const modalState = useModalOpenState();
  const snackbarState = useSnackBarState();
  const optionDrawerState = useOptionDrawerState();
  const id = optionDrawerState.recordId;

  if(id == null || id == undefined){
    return;
  }

  const index = recordState.recordHistory.length - id;
  const history = recordState.recordHistory[index];

  if (history == null || history == undefined) {
    return;
  }

  const squatCount = history.recordCount;

  const onCommit = () => {
    recordState.modifyRecord(id);
    snackbarState.openSnackbar(
      `${id}번 세트의 기록을 ${recordState.recordCount}회로 수정하셨습니다.`
    );
    modalState.handleClose();
  };
  return (
    <>
      <RecordModal
        msg={id + "번 세트의 기록을 몇 회로 수정하시겠습니까?"}
        initialCount={squatCount}
        onCommit={onCommit}
      />
    </>
  );
}
