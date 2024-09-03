import { Button, Chip } from "@mui/material";
import "@fortawesome/fontawesome-free/css/all.min.css";
import WiseSaying from "./WiseSaying";
import { useOptionDrawerState } from "../states";

export default function HistoryListItem({ history, id }) {
  const optionDrawerState = useOptionDrawerState();
  const onClickOptionBtn = () => {
    optionDrawerState.handleOpen(id);
  };

  return (
    <>
      <li className="mt-7 mx-20">
        <div className="flex gap-2">
          <Chip label={`${id}회차`} variant="outlined" />
          <Chip
            label={`${history.regDate}`}
            variant="outlined"
            color="primary"
          />
        </div>
        <div className="mt-4 shadow rounded-[20px] flex">
          <div className="px-5 hover:text-blue-400 flex-grow flex items-center whitespace-pre-wrap leading-relaxed my-5">
            {history.recordCount}회
            {/* <WiseSaying index={index % 5 == 0 ? index / 5 : null}/> */}
          </div>
          <Button
            onClick={onClickOptionBtn}
            className="flex-shrink-0 !items-start !rounded-[0_20px_20px_0]"
            color="inherit"
          >
            <span className="text-[#dcdcdc] text-2xl h-[80px] flex items-center">
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </Button>
        </div>
      </li>
    </>
  );
}
