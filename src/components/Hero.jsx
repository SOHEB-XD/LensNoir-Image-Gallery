import ScrollReveal from "./ScrollReveal";

const Hero = () => {

    const Icons = {
    Camera: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>,
    Grid: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>,
    ArrowRight: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>,
    Instagram: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>,
    Twitter: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 12.5S.2 5.3 4.1 3.2c-1 1.1-2 2.4-2 2.4 1.3-1.8 3.7-2.7 7-2.7 2.1 0 4.5.8 6.7 2.3 1.9-1.3 4-2.5 4-2.5z"/></svg>,
    Mail: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
    Menu: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>,
    X: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>,
    Search: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
};

    return (
        <section className="h-screen w-full flex items-center justify-end px-8 md:px-17 relative">
            <div className="text-right z-10 max-w-4xl">
                <ScrollReveal>
                    <div className="inline-flex items-center gap-3 mb-8 border-b border-white/20 pb-2 ml-auto">
                        <Icons.Camera />
                        <span className="text-xs font-mono text-gray-400 uppercase tracking-[0.2em]">Visual Archives Vol. 04</span>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-[0.85] tracking-widest">
                        CAPTURED <br/> <span className="font-thin text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-700">SILENCE</span>
                    </h1>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                    <p className="text-gray-400 text-sm md:text-lg font-light leading-relaxed max-w-md ml-auto mb-7">
                        A monochromatic exploration of light, shadow, and form. 
                        Curating moments that exist between the noise.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={600}>
                    <button onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })} className="group relative px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-[0.15em] overflow-hidden hover:pr-12 transition-all duration-300">
                        <span className="relative z-10">Enter Gallery</span>
                        <div className="absolute right-0 top-0 h-full w-0 bg-gray-200 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                            <Icons.ArrowRight />
                        </span>
                    </button>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Hero