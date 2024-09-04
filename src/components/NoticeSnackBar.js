import { Alert, Snackbar } from "@mui/material";
import { useSnackBarState } from "../states";

export default function NoticeSnackBar() {
  const snackBarState = useSnackBarState();
  return (
    <>
      <Snackbar onClose={snackBarState.handleClose} open={snackBarState.snackbar.open} autoHideDuration={snackBarState.snackbar.duration}>
        <Alert onClose={snackBarState.handleClose} severity={snackBarState.snackbar.severity} variant="filled">
          {snackBarState.snackbar.msg}
        </Alert>
      </Snackbar>
    </>
  );
}
