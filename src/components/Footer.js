import React from 'react';
function Footer() {
    return (
        <>
            <footer className="footer" style={{ position: 'fixed',display:'block',height: '1.5em', left: 0, bottom: 0, width: '100%', color: 'black', textAlign: 'center', backgroundColor: '#A0E7E5' }}>
                <div className="container"><p className="m-0 text-center">Copyright © Blog-Post 2022</p></div>
            </footer>
        </>
    );
}
export default Footer;