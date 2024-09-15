import { Box, Tab, Tabs } from "@mui/material";
import { useArrayTabState } from "../states";

export default function ArrayTab() {
  const arrayTabState = useArrayTabState();
  return <>
  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          variant="fullWidth"
          value={arrayTabState.tabData.tab}
          onChange={arrayTabState.handleChange}
          aria-label="basic tabs example"
        >
          <Tab label={<i className="fa-regular fa-clock">&nbsp;기록순 ▲</i>}/>
          <Tab label={<i className="fa-regular fa-clock">&nbsp;기록순 ▼</i>}/>
          <Tab label={<i className="fa-solid fa-pen">&nbsp;날짜순 ▲</i>}/>
          <Tab label={<i className="fa-solid fa-pen">&nbsp;날짜순 ▼</i>}/>
        </Tabs>
      </Box>
  </>
}