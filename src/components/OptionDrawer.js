import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  SwipeableDrawer,
} from "@mui/material";
import { useOptionDrawerState } from "../states";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function OptionDrawer() {
  const optionDrawerState = useOptionDrawerState();
  const onClickDelBtn = () => {};
  const onClickEditBtn = () => {};
  return (
    <>
      <SwipeableDrawer
        anchor="bottom"
        open={optionDrawerState.open}
        onClose={optionDrawerState.handleClose}
        onOpen={optionDrawerState.handleOpen}
      >
        <List className="text-xl">
          <ListItem>
            <span className="text-blue-500">{optionDrawerState.index}</span>회차
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemButton
              className="items-baseline flex gap-2"
              onClick={onClickDelBtn}
            >
              <i className="fa-solid fa-trash-can"></i>
              <span className="block">삭제</span>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              className="items-baseline flex gap-2"
              onClick={onClickEditBtn}
            >
              <i className="fa-solid fa-pen-to-square"></i>
              <span className="block">수정</span>
            </ListItemButton>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </>
  );
}
