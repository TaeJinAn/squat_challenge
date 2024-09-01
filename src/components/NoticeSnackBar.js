import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";
import { useSnackBarState } from "../states";

export default function NoticeSnackBar() {
  const snackBarState = useSnackBarState();
  return (
    <>
      <Snackbar onClose={snackBarState.handleClose} open={snackBarState.snackbar.open} autoHideDuration={6000}>
        <Alert onClose={snackBarState.handleClose} severity="success" variant="filled">
          {snackBarState.snackbar.msg}
        </Alert>
      </Snackbar>
    </>
  );
}
