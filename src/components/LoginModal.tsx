
import React, { useEffect, useRef, useState } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignup: () => void;
  onLogin: (email: string) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onSwitchToSignup, onLogin }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    // Mock login logic
    onLogin(email);
  };

  const handleClose = () => {
    setEmail('');
    setPassword('');
    setError('');
    onClose();
  }

  return (
    <dialog ref={dialogRef} className="modal" onClose={handleClose}>
      <div className="modal-box">
        <button onClick={handleClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        <h3 className="font-bold text-2xl">Login to Your Account</h3>
        <form onSubmit={handleSubmit}>
            {error && <div className="alert alert-error mt-4">{error}</div>}
            <div className="form-control mt-4">
            <label className="label"><span className="label-text">Email</span></label>
            <input type="email" placeholder="email@example.com" className="input input-bordered" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-control mt-4">
            <label className="label"><span className="label-text">Password</span></label>
            <input type="password" placeholder="Enter your password" className="input input-bordered" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="modal-action">
            <button className="btn btn-primary" type="submit">Login</button>
            </div>
        </form>
        <p className="text-center mt-4">
          Don't have an account?
          <a href="#" className="link link-primary ml-1" onClick={(e) => {e.preventDefault(); onSwitchToSignup();}}>Sign up</a>
        </p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={handleClose}>close</button>
      </form>
    </dialog>
  );
};

export default LoginModal;
