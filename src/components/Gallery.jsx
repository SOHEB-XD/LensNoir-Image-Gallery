import ScrollReveal from "./ScrollReveal";

const Gallery = () => {
    // Placeholder Unsplash Images (Architecture/Abstract)
    const images = [
        { id: 1, url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop', title: 'Urban Canyon', tag: 'Architecture' },
        { id: 2, url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop', title: 'Silent Waters', tag: 'Nature' },
        { id: 3, url: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=800&auto=format&fit=crop', title: 'Tokyo Noir', tag: 'Street' },
        { id: 4, url: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=800&auto=format&fit=crop', title: 'Dark Matter', tag: 'Abstract' },
        { id: 5, url: 'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&w=800&auto=format&fit=crop', title: 'Steel & Glass', tag: 'Structure' },
        { id: 6, url: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=800&auto=format&fit=crop', title: 'Frost', tag: 'Texture' },
    ];

    return (
        <section id="gallery" className="py-32 px-8 md:px-16 bg-[#050505] relative z-10">
            <div className="max-w-[1400px] mx-auto">
                
                {/* Header */}
                <div className="flex justify-between items-end mb-24 border-b border-white/10 pb-8">
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-6xl font-thin text-white tracking-tight">
                            LATEST <span className="font-bold">EXPOSURES</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <div className="hidden md:flex gap-8 text-xs font-mono text-gray-500 uppercase tracking-widest">
                            <span className="text-white cursor-pointer border-b border-white pb-1">All</span>
                            <span className="hover:text-white cursor-pointer transition-colors">Architecture</span>
                            <span className="hover:text-white cursor-pointer transition-colors">Portrait</span>
                            <span className="hover:text-white cursor-pointer transition-colors">Experimental</span>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((img, idx) => (
                        <ScrollReveal key={img.id} delay={idx * 100}>
                            <div className="group relative aspect-[3/4] overflow-hidden cursor-none">
                                {/* Image */}
                                <img 
                                    src={img.url} 
                                    alt={img.title}
                                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                                />
                                
                                {/* Overlay Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/80 to-transparent">
                                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{img.tag}</span>
                                    <h3 className="text-2xl font-bold text-white uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.title}</h3>
                                </div>

                                {/* Hover Border Effect */}
                                <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-500 m-4"></div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <button className="text-sm font-bold text-white uppercase tracking-[0.2em] hover:text-gray-400 transition-colors border-b border-white/20 pb-2">
                        Load More Archives
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Gallery