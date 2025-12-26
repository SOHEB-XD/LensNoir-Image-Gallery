

const Footer = () => {

    const Icons = {
        Camera: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></svg>,
        Grid: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></svg>,
        ArrowRight: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>,
        Instagram: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>,
        Twitter: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 12.5S.2 5.3 4.1 3.2c-1 1.1-2 2.4-2 2.4 1.3-1.8 3.7-2.7 7-2.7 2.1 0 4.5.8 6.7 2.3 1.9-1.3 4-2.5 4-2.5z" /></svg>,
        Mail: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>,
        Menu: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>,
        X: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 18 18" /></svg>,
        Search: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
    };

    return (


        <footer className="py-20 bg-black text-center relative z-10 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Brand */}
                <div className="text-left">
                    <h3 className="text-2xl font-bold text-white tracking-widest mb-2">LENSNOIR</h3>
                    <p className="text-xs text-gray-600 font-mono uppercase tracking-widest">Digital Photography Portfolio</p>
                </div>

                {/* Links */}
                <div className="flex gap-8">
                    <a href="https://www.instagram.com/soheb.xd_/" target="_blank" className="p-3 border border-white/10 hover:bg-white hover:text-black transition-all rounded-full text-white"><Icons.Instagram /></a>
                    <a href="https://www.sohebportfolio.online/" target="_blank" className="p-3 border border-white/10 hover:bg-white hover:text-black transition-all rounded-full text-white"><Icons.Twitter /></a>
                    <a href="https://mailto:soheb8976@gmail.com" target="_blank" className="p-3 border border-white/10 hover:bg-white hover:text-black transition-all rounded-full text-white"><Icons.Mail /></a>
                </div>

                {/* Copyright */}
                <div className="text-right">
                    <p className="text-[10px] text-gray-700 font-mono uppercase tracking-widest">
                        © 2025 LensNoir Studio.<br />Built By Soheb.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer