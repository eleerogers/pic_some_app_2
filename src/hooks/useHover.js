import {useState, useEffect, useRef} from "react";

function useHover() {
  const [hover, setHover] = useState(false);
  const ref = useRef(null);

  function onEnter() {
    setHover(true);
  }
  function onLeave() {
    setHover(false);
  }

  useEffect(() => {
    ref.current.addEventListener("mouseenter", onEnter)
    ref.current.addEventListener("mouseleave", onLeave)
    return (() => {
      ref.current.removeEventListener("mouseenter", onEnter)
      ref.current.removeEventListener("mouseleave", onLeave)
    })
  }, [])

  return [hover, ref]
}

export default useHover;