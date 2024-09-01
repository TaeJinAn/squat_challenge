import { CountUp } from "countup.js";
import { useEffect, useRef } from "react";

export default function CountNumber({ start = 0, end = 100, duration = 2 }) {
  const spanRef = useRef(null);
  const countUpRef = useRef(null);
  useEffect(() => {
    if(countUpRef.current == null){
      countUpRef.current = new CountUp(spanRef.current, end, {
        startVal: start,
        duration: 2,
      });
      countUpRef.current.start();
    }else{
      countUpRef.current.update(end);
    }
  }, [end]);

  return (
    <>
      <span ref={spanRef} className="block"></span>
    </>
  );
}
