import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
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
        <div className="min-h-screen bg-gradient-to-tr from-green-100 to-white flex items-center justify-center p-6 font-['Inter']">
            <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
                {/* Left Side - Form */}
                <div className="p-10">
                    <div className="mb-6">
                        <h2 className="text-4xl font-bold text-gray-800 mb-2">Welcome Back</h2>
                        <p className="text-sm text-gray-500">Login to continue managing payments with Avocado</p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-5">
                        <div>
                            <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-1">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 outline-none"
                            />
                        </div>

                        {error && <div className="text-red-600 text-sm font-medium">{error}</div>}
                        {message && <div className="text-green-600 text-sm font-medium">{message}</div>}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition disabled:opacity-50"
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-600">
                        Don't have an account?{' '}
                        <a href="/signup" className="text-green-600 font-semibold hover:underline">
                            Sign up
                        </a>
                    </p>
                </div>

                {/* Right Side - Visual */}
                <div className="hidden md:flex bg-gradient-to-br from-green-700 to-green-900 text-white p-10 flex-col justify-between">
                    <div>
                        <h1 className="text-4xl font-extrabold leading-tight mb-4">Avocado</h1>
                        <p className="text-sm text-green-100">Streamlined financial freedom starts here.</p>
                    </div>
                    <div className="text-sm text-green-200 text-right">© 2025 Avocado</div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
