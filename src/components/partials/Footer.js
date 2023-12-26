import React from 'react';

const Footer = () => {
    return (
        <footer class="py-1 bg-theme mt-auto">
                    <div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <small class="text-silver">Copyright &copy; Julie Store {new Date().getFullYear()} | Version: 0.1.0 Beta</small>
                            
                                {/* <a href="#">Privacy Policy</a>
                                &middot; */}
                                <small className={'text-silver'} href="#">Design & Developed by <a className={'text-white'} href="https://aquacy.github.io"> Aquacy</a></small>
                        
                        </div>
                    </div>
                </footer>
    );
};

export default Footer;