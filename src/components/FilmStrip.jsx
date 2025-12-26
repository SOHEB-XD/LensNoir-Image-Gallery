import React, { useEffect, useRef, useState } from 'react';


const FilmStrip = () => {
    const images = [
        "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=600&auto=format&fit=crop"
    ];

    // Duplicate images for infinite scroll
    const stripImages = [...images, ...images, ...images];

    return (
        <div className="h-[120vh] w-full md:w-1/2 lg:w-1/1 overflow-hidden relative opacity-60 hover:opacity-100 transition-opacity duration-700">
            {/* Gradient Mask for fading in/out */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>
            
            {/* Scrolling Container */}
            <div className="animate-film-scroll flex flex-col gap-8 w-full px-4 md:px-0">
                {stripImages.map((src, index) => (
                    <div key={index} className="w-full relative aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-700 ease-out group">
                        <img 
                            src={src} 
                            alt={`Feature ${index}`} 
                            className="w-full h-full object-cover rounded-sm border border-white/10"
                        />
                        {/* Film sprocket holes effect (aesthetic touch) */}
                        <div className="absolute left-2 top-0 bottom-0 flex flex-col justify-between py-2 pointer-events-none">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="w-1.5 h-1.5 bg-black/50 rounded-full backdrop-blur-sm"></div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes film-scroll {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-33.33%); }
                }
                .animate-film-scroll {
                    animation: film-scroll 40s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default FilmStrip