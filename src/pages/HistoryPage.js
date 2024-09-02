import HistoryList from "../components/HistoryList";
import OptionDrawer from "../components/OptionDrawer";

function HistoryPage() {
  return (
    <>
      <div className="flex flex-1 justify-center items-center">
        <HistoryList className="flex-1"/>
      </div>
      <OptionDrawer />
    </>
  );
}

export default HistoryPage;
