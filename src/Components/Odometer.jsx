import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Odometer.css";

export default function Odometer({ targetNumber = 5000, duration = 2 }) {
    const [count, setCount] = useState(0);
    const numberRef = useRef(null);
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    gsap.fromTo(
                        numberRef.current,
                        { innerText: 0 },
                        {
                            innerText: targetNumber,
                            duration: duration,
                            ease: "power2.out",
                            snap: { innerText: 1 },
                            onUpdate: function () {
                                setCount(Math.round(this.targets()[0].innerText));
                            },
                        }
                    );
                    observerRef.current.disconnect(); // Stop observing after animation starts
                }
            },
            { threshold: 0.5 } // Start when at least 50% of the element is visible
        );

        observerRef.current.observe(numberRef.current);

        return () => observerRef.current.disconnect(); // Cleanup observer on unmount
    }, [targetNumber, duration]);

    return (
        <div>
        <div className="odometer-container" ref={numberRef}>
            <p className="odometer">{count}</p>
        </div>
        </div>
    );
}
