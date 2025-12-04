import { useState, useEffect } from 'react';
import imm from '../assets/images/oop.png';
// Assure-toi que le chemin est correct

export default function FloatingCard() {
    const [hasAppeared, setHasAppeared] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHasAppeared(true);
        }, 50);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative w-[300px] flex justify-center items-center py-16">


            {/* FloatingCard */}
            <div
                className={`
          relative z-10
          p-6
          bg-opacity-10
          w-[100px]
          rounded-xl
          shadow-lg
          transition-all duration-700 ease-out
          ${hasAppeared ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        `}
            >
                <div className="flex justify-center items-center">
                    <img
                        src={imm}
                        alt="Diagramme OOP"
                        className="w-[80px] h-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
