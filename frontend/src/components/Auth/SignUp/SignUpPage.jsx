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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-['Inter']">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-3xl p-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Create Your Account</h2>

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="w-full px-4 py-3 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            className="w-full px-4 py-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border rounded-lg"
          />
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 pr-12 border rounded-lg"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
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
            className="w-full px-4 py-3 border rounded-lg"
          />

          <div className="flex justify-between space-x-2">
            {['student', 'researcher', 'professional'].map(opt => (
              <label
                key={opt}
                className={`flex-1 text-center border rounded-lg py-2 cursor-pointer ${role === opt ? 'bg-green-600 text-white font-semibold' : 'bg-white'
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

          {error && <div className="bg-red-100 border text-red-700 p-2 rounded">{error}</div>}
          {message && <div className="bg-green-100 border text-green-700 p-2 rounded">{message}</div>}

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>

          <p className="text-sm text-center text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-green-600 font-medium">
              Log In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
