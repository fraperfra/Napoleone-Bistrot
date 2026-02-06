import React, { useState } from 'react';
import { useCMS } from '../../context/CMSContext';
import { Lock, ChefHat } from 'lucide-react';

interface AdminLoginProps {
  onLoginSuccess?: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useCMS();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      setError('');
      if (onLoginSuccess) onLoginSuccess();
    } else {
      setError('Password non corretta');
    }
  };

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-darkGreen/5 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-darkGreen rounded-full flex items-center justify-center mx-auto mb-4 text-gold shadow-lg">
            <ChefHat size={40} />
          </div>
          <h1 className="font-serif text-3xl text-darkGreen font-bold mb-2">Napoleone CMS</h1>
          <p className="text-darkGreen/60 text-sm">Accedi all'area riservata</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-darkGreen/60 mb-2">
              Password Amministratore
            </label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 pl-12 bg-cream/30 rounded-xl border border-darkGreen/10 focus:border-gold outline-none text-darkGreen transition-all"
                placeholder="••••••••"
              />
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-darkGreen/40" size={20} />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center bg-red-50 p-2 rounded-lg border border-red-100">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-4 bg-darkGreen text-white rounded-xl font-bold uppercase tracking-widest hover:bg-gold hover:text-darkGreen transition-all shadow-lg"
          >
            Accedi
          </button>
        </form>
        
        <div className="mt-8 text-center">
           <a href="/" className="text-xs text-darkGreen/40 hover:text-darkGreen underline">Torna al sito web</a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
