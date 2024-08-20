import { HashRouter } from "react-router-dom";
import App from "./App";
import { RecoilRoot } from "recoil";

function Root() {
  return (
    <>
      <HashRouter>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </HashRouter>
    </>
  );
}

export default Root;
