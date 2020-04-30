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
    const node = ref.current;
    node.addEventListener("mouseenter", onEnter)
    node.addEventListener("mouseleave", onLeave)
    return (() => {
      node.removeEventListener("mouseenter", onEnter)
      node.removeEventListener("mouseleave", onLeave)
    })
  }, [])

  return [hover, ref]
}

export default useHover;