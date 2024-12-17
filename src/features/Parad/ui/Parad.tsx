import { CreateTypes } from "canvas-confetti";
import { CSSProperties, Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from "react";
import { Confetti } from "./Confetti";

const canvasStyles: CSSProperties = {
	position: "fixed",
	pointerEvents: "none",
	width: "100%",
	height: "100%",
	top: 0,
	left: 0,
};

function getAnimationSettings(angle: number, originX: number) {
	return {
		particleCount: 4,
		angle,
		spread: 100,
		origin: { x: originX },
		colors: ["#1370B9", "#ffffff"],
	};
}

export function Parad({ setStartAnim }: { setStartAnim: Dispatch<SetStateAction<() => void>> }) {
	const refAnimationInstance = useRef<CreateTypes | null>(null);
	const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

	const getInstance = useCallback((instance: CreateTypes | null) => {
		refAnimationInstance.current = instance;
	}, []);

	const nextTickAnimation = useCallback(() => {
		if (refAnimationInstance.current) {
			refAnimationInstance.current(getAnimationSettings(60, 0));
			refAnimationInstance.current(getAnimationSettings(120, 1));
		}
	}, []);

	const startAnimation = useCallback(() => {
		if (!intervalId) {
			setIntervalId(setInterval(nextTickAnimation, 16));
		}
	}, [nextTickAnimation, intervalId]);

	const stopAnimation = useCallback(() => {
		clearInterval(intervalId ?? 0);
		setIntervalId(null);
		refAnimationInstance.current && refAnimationInstance.current.reset();
	}, [intervalId]);

	useEffect(() => {
		console.log("setStart");
		setStartAnim(() => () => {
			console.log("1");
			startAnimation();
			setTimeout(stopAnimation, 5000);
		});
	}, []);

	useEffect(() => {
		return () => {
			clearInterval(intervalId ?? 0);
		};
	}, [intervalId]);

	return <Confetti refConfetti={getInstance} style={canvasStyles} />;
}
