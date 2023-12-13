import React from "react";
import { isMobileOnly } from "react-device-detect";

export default function OnClickOutside(props: {
  children: React.ReactNode;
  action: () => void;
}) {
  const { children, action } = props;
  const childrenRef = React.useRef();

  const childrenClone = React.cloneElement(children as any, {
    ref: (ref: any) => {
      childrenRef.current = ref;
    },
  });

  React.useEffect(() => {
    // @ts-ignore
    function handleClickOutside(event) {
      // @ts-ignore
      if (childrenRef.current && !childrenRef.current.contains(event.target)) {
        action();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [childrenRef]);

  if (isMobileOnly) return <>{children}</>

  return <>{childrenClone}</>;
}
