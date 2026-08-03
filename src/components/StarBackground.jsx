import { useState, useEffect } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        makeStars();
        // makeMeteors();

    const handleResize = () => {
        makeStars();
    };
    
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
}, []);

const makeStars = () => {
    const numStars = Math.floor(
        (window.innerHeight * window.innerWidth) / 7500);
    const newStars = [];

    for (let i = 0; i < numStars; i++) {
        newStars.push({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.5 + 0.5,
            animationDuration: Math.random() * 4 + 2,
        });
      }
        setStars(newStars);
    };

const makeMeteors = () => {
    const numMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numMeteors; i++) {
        newMeteors.push({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 20,
            size: Math.random() * 2 + 1,
            delay: Math.random() * 5,
            animationDuration: Math.random() * 4 + 2,
        });
      }
        setMeteors(newMeteors);
    };

    return (
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {stars.map((star) => (
            <div 
                key={star.id} 
                className="star animate-pulse-subtle" 
                style={{
                    width: star.size + "px",
                    height: star.size + "px",
                    left: star.x + "%",
                    top: star.y + "%",
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + "s",
              }}
            />
        ))}

        {meteors.map((meteor) => (
            <div 
              key={meteor.id} 
              className="meteor animate-meteor" 
              style={{
                width: meteor.size * 40 + "px",
                height: meteor.size * 1.5 + "px",
                left: meteor.x + "%",
                top: meteor.y + "%",
                animationDelay: meteor.delay + "s",
                animationDuration: meteor.animationDuration + "s",
              }}
            />
        ))}
    </div>
    );
};