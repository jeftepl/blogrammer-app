import { useState, useLayoutEffect } from "react";
import RippleContainer from "./RippleContainer";

type DebounceRippleCleanUpProps = {
  rippleCount: number;
  duration: number;
  cleanUpFunction: () => void;
};

type RippleArray = {
  x: number;
  y: number;
  size: number;
};

type RippleProps = {
  duration?: number;
  color?: string;
};

const useDebouncedRippleCleanUp = ({
  rippleCount,
  duration,
  cleanUpFunction,
}: DebounceRippleCleanUpProps) => {
  useLayoutEffect(() => {
    let bounce: ReturnType<typeof setTimeout> | undefined;
    if (rippleCount > 0) {
      bounce = setTimeout(() => {
        cleanUpFunction();
        if (bounce !== undefined) {
          clearTimeout(bounce);
        }
      }, duration * 4);
    }

    return () => {
      if (bounce !== undefined) {
        clearTimeout(bounce);
      }
    };
  }, [rippleCount, duration, cleanUpFunction]);
};

const Ripple = ({ duration = 850, color = "gray" }: RippleProps) => {
  const [rippleArray, setRippleArray] = useState<RippleArray[]>([]);

  const rippleCount = rippleArray.length;
  const cleanUpFunction = () => setRippleArray([]);

  useDebouncedRippleCleanUp({ rippleCount, duration, cleanUpFunction });

  const addRipple = (event: React.MouseEvent<HTMLDivElement>) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();

    const size = Math.max(rippleContainer.width, rippleContainer.height);
    const x = event.pageX - rippleContainer.x - size / 2;
    const y = event.pageY - rippleContainer.y - size / 2;
    const newRipple = { x, y, size };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <RippleContainer duration={duration} color={color} onMouseDown={addRipple}>
      {rippleArray.map((ripple, index) => (
        <span
          key={`span${index}`}
          style={{
            top: ripple.y,
            left: ripple.x,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
    </RippleContainer>
  );
};

export default Ripple;
