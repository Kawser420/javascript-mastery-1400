import React, { useEffect, useRef, useState } from 'react';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose, onSwitchToLogin }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [name, setName] = useState('');
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

  const handleSubmit = () => {
    if (!name || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
    setError('');
    // Mock signup logic
    alert('Signup successful! Please log in.');
    onClose();
    onSwitchToLogin();
  };

  return (
    <dialog ref={dialogRef} className="modal" onClose={onClose}>
      <div className="modal-box">
        <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        <h3 className="font-bold text-2xl">Create an Account</h3>
        {error && <div className="alert alert-error mt-4">{error}</div>}
        <div className="form-control mt-4">
          <label className="label"><span className="label-text">Full Name</span></label>
          <input type="text" placeholder="John Doe" className="input input-bordered" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="form-control mt-4">
          <label className="label"><span className="label-text">Email</span></label>
          <input type="email" placeholder="email@example.com" className="input input-bordered" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="form-control mt-4">
          <label className="label"><span className="label-text">Password</span></label>
          <input type="password" placeholder="Create a password (min. 6 chars)" className="input input-bordered" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="modal-action">
          <button className="btn btn-primary" onClick={handleSubmit}>Sign Up</button>
        </div>
        <p className="text-center mt-4">
          Already have an account?
          <a href="#" className="link link-primary ml-1" onClick={(e) => { e.preventDefault(); onSwitchToLogin(); }}>Login</a>
        </p>
      </div>
       <form method="dialog" className="modal-backdrop">
        <button onClick={() => {setName(''); setEmail(''); setPassword(''); setError('');}}>close</button>
      </form>
    </dialog>
  );
};

export default SignupModal;
