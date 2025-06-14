import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setMessage('');

        try {
            const response = await fetch('http://localhost:8000/auth/jwt/create/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                const errorMessage = errorData.detail || Object.values(errorData)[0][0];
                throw new Error(errorMessage);
            }

            const data = await response.json();
            localStorage.setItem('accessToken', data.access);
            localStorage.setItem('refreshToken', data.refresh);
            setMessage('Login successful!');
            navigate('/');
        } catch (err) {
            setError(err.message || 'Login failed.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#c7e7c3] flex items-center justify-center p-8 font-['Inter']">
            <div className="w-full max-w-md bg-[#e4f1db] rounded-3xl shadow-inner p-10 drop-shadow-lg">
                <h2 className="text-3xl font-bold text-[#305832] mb-6 select-none">Welcome Back</h2>
                <p className="mb-8 text-[#405940] select-none">
                    Login to continue managing payments with <span className="font-semibold">Avocado</span>
                </p>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block mb-2 text-[#406639] font-medium">
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-[#d8e9c5] border border-[#9bbd88] text-[#2f4b2d] placeholder-[#a9c68e] focus:outline-none focus:ring-2 focus:ring-[#9bbd88]"
                            placeholder="Enter your username"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block mb-2 text-[#406639] font-medium">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-3 pr-12 rounded-lg bg-[#d8e9c5] border border-[#9bbd88] text-[#2f4b2d] placeholder-[#a9c68e] focus:outline-none focus:ring-2 focus:ring-[#9bbd88]"
                                placeholder="Enter your password"
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
                    </div>

                    {error && <p className="text-red-700 font-semibold text-sm">{error}</p>}
                    {message && <p className="text-green-700 font-semibold text-sm">{message}</p>}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-[#90be6d] hover:bg-[#7cb243] rounded-lg text-white font-semibold transition disabled:opacity-50"
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>

                <p className="mt-8 text-center text-[#4b662d] select-none">
                    Don't have an account?{' '}
                    <a href="/signup" className="font-semibold underline hover:text-[#305832]">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
