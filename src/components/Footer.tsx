
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <nav>
                <h6 className="footer-title">Problem Categories</h6> 
                <a href="#problems" className="link link-hover">Beginner Basics</a>
                <a href="#problems" className="link link-hover">Functions & Scope</a>
                <a href="#problems" className="link link-hover">Arrays & Strings</a>
                <a href="#problems" className="link link-hover">Objects & Prototypes</a>
                <a href="#problems" className="link link-hover">ES6+ Features</a>
            </nav> 
            <nav>
                <h6 className="footer-title">Company</h6> 
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
            </nav> 
            <nav>
                <h6 className="footer-title">Legal</h6> 
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
            </nav> 
            <form>
                <h6 className="footer-title">Newsletter</h6> 
                <fieldset className="form-control w-80">
                <label className="label">
                    <span className="label-text">Enter your email address</span>
                </label> 
                <div className="join">
                    <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
                    <button className="btn btn-primary join-item">Subscribe</button>
                </div>
                </fieldset>
            </form>
             <aside className="footer-center grid-flow-col-dense col-span-full mt-8 pt-8 border-t border-base-300">
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-start">
                   <p>Copyright © {new Date().getFullYear()} - All right reserved by JS Mastery Hub</p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.296 1.634 4.208 3.803 4.649-.625.17-1.284.26-1.96.26-.305 0-.6-.03- .89-.086.635 1.884 2.473 3.268 4.653 3.308-1.625 1.27-3.666 2.022-5.88 2.022-.382 0-.76-.022-1.13-.066 2.099 1.35 4.596 2.13 7.343 2.13 8.814 0 13.633-7.305 13.633-13.633 0-.207-.005-.413-.013-.618.94-.678 1.75-1.52 2.4-2.5z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                </div>
            </aside>
        </footer>
    );
};

export default Footer;
