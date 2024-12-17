import { useCallback, useRef } from "react";
export const useThrottling = (callback, delay) => {
    const throttleRef = useRef(false);
    return useCallback((...args) => {
        if (!throttleRef.current) {
            callback(...args);
            throttleRef.current = true;
            setTimeout(() => {
                throttleRef.current = false;
            }, delay);
        }
    }, [callback, delay]);
};
