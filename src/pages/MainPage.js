import { useState } from "react";
import { nf } from "../utils";

function MainPage() {
  const goalCount = 10000;
  const [doneCount, setDoneCount] = useState(0);
  const restCount = goalCount - doneCount;
  const [addCount, setAddCount] = useState(0);
  const increaseCount = (num) => {
    setAddCount(addCount + num);
  };
  const decreaseCount = (num) => {
    setAddCount(addCount - num);
  };

  const resetCount = () => {
    setAddCount(0);
  };

  const commitCount = () => {
    setDoneCount(doneCount + addCount);
    setAddCount(0);
  };

  return (
    <>
      <div className="flex flex-1 justify-center items-center">
        <div>
          <h1 className="text-xl font-bold">현황</h1>
          <div>남은 횟수 : {nf(restCount)}회</div>
          <div>실행 횟수 : {nf(doneCount)}회</div>
          <div className="mt-5">
            <h1 className="text-xl font-bold">기록</h1>
            <div className="flex gap-2 items-center">
              <span>{addCount}</span>
              <button
                className="btn btn-primary text-white"
                onClick={commitCount}
              >
                적용
              </button>
              <button
                className="btn btn-primary text-white"
                onClick={resetCount}
              >
                취소
              </button>
            </div>
            <div className="flex gap-2 mt-3">
              <button
                className="btn btn-primary text-white"
                onClick={() => increaseCount(10)}
              >
                + 10
              </button>
              <button
                className="btn btn-primary text-white"
                onClick={() => increaseCount(1)}
              >
                + 1
              </button>
              <button
                className="btn btn-primary text-white"
                onClick={() => decreaseCount(10)}
              >
                - 10
              </button>
              <button
                className="btn btn-primary text-white"
                onClick={() => decreaseCount(1)}
              >
                - 1
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
