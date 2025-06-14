import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [role, setRole] = useState('student');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch('http://localhost:8000/auth/users/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          username,
          email,
          password,
          date_of_birth: dob,
          role
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.detail || Object.values(errorData)[0][0] || 'Signup failed.';
        throw new Error(errorMessage);
      }

      setMessage('Signup successful! Redirecting to login...');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err.message || 'Unexpected error during signup.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#c7e7c3] flex items-center justify-center p-6 font-['Inter']">
      <div className="w-full max-w-sm bg-[#e4f1db] rounded-3xl shadow-inner p-6 drop-shadow-lg">
        <h2 className="text-2xl font-bold text-[#305832] mb-4 select-none">Create Your Account</h2>

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-[#d8e9c5] border border-[#9bbd88] text-[#2f4b2d] placeholder-[#a9c68e] focus:outline-none focus:ring-2 focus:ring-[#9bbd88]"
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-[#d8e9c5] border border-[#9bbd88] text-[#2f4b2d] placeholder-[#a9c68e] focus:outline-none focus:ring-2 focus:ring-[#9bbd88]"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-[#d8e9c5] border border-[#9bbd88] text-[#2f4b2d] placeholder-[#a9c68e] focus:outline-none focus:ring-2 focus:ring-[#9bbd88]"
          />
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 pr-12 rounded-lg bg-[#d8e9c5] border border-[#9bbd88] text-[#2f4b2d] placeholder-[#a9c68e] focus:outline-none focus:ring-2 focus:ring-[#9bbd88]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#4b662d] hover:text-[#2f4b2d]"
              aria-label="Toggle Password Visibility"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <input
            type="date"
            placeholder="Date of Birth"
            value={dob}
            onChange={e => setDob(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-[#d8e9c5] border border-[#9bbd88] text-[#2f4b2d] placeholder-[#a9c68e] focus:outline-none focus:ring-2 focus:ring-[#9bbd88]"
          />

          <div className="flex justify-between space-x-2">
            {['student', 'researcher', 'professional'].map(opt => (
              <label
                key={opt}
                className={`flex-1 text-center border rounded-lg py-2 cursor-pointer select-none ${role === opt
                  ? 'bg-[#90be6d] text-white font-semibold'
                  : 'bg-white text-[#305832]'
                  }`}
              >
                <input
                  type="radio"
                  name="role"
                  value={opt}
                  checked={role === opt}
                  onChange={() => setRole(opt)}
                  className="hidden"
                />
                {opt.charAt(0).toUpperCase() + opt.slice(1)}
              </label>
            ))}
          </div>

          {error && <p className="text-red-700 font-semibold text-sm">{error}</p>}
          {message && <p className="text-green-700 font-semibold text-sm">{message}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#90be6d] hover:bg-[#7cb243] rounded-lg text-white font-semibold transition disabled:opacity-50"
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-6 text-center text-[#4b662d] select-none">
          Already have an account?{' '}
          <a href="/login" className="font-semibold underline hover:text-[#305832]">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
