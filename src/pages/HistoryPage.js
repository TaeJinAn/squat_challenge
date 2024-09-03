import HistoryList from "../components/HistoryList";
import NoticeSnackBar from "../components/NoticeSnackBar";
import OptionDrawer from "../components/OptionDrawer";

function HistoryPage() {
  return (
    <>
      <div className="flex flex-1 justify-center items-center">
        <HistoryList className="flex-1"/>
      </div>
      <OptionDrawer />
      <NoticeSnackBar />
    </>
  );
}

export default HistoryPage;
