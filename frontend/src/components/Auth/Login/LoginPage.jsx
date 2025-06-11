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
            const djangoApiUrl = 'http://localhost:8000/auth/jwt/create/';

            const response = await fetch(djangoApiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: username, password: password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                const errorMessage = errorData.detail || Object.values(errorData)[0][0] || 'Login failed. Please check your credentials.';
                throw new Error(errorMessage);
            }

            const data = await response.json();
            setMessage('Login successful! Welcome.');
            console.log('Login successful:', data);

            localStorage.setItem('accessToken', data.access);
            localStorage.setItem('refreshToken', data.refresh);

            // Redirect to dashboard
            navigate('/');

        } catch (err) {
            setError(err.message || 'An unexpected error occurred during login.');
            console.error('Login error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-['Inter']">
            <div className="bg-white rounded-3xl shadow-xl flex flex-col lg:flex-row w-full max-w-6xl overflow-hidden">

                {/* Left Section: Login Form */}
                <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                    <div className="mb-8">
                        <span className="text-gray-400 text-lg font-medium">Fillianata</span>
                    </div>

                    <div className="mb-6">
                        <div className="bg-green-600 rounded-full w-14 h-14 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Get Started</h2>
                    <p className="text-gray-500 mb-8">Welcome to Fillianata - Let's create your account</p>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out"
                                placeholder="yourusername"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <a href="#" className="text-sm text-green-600 hover:text-green-700 font-medium">
                                    Forgot?
                                </a>
                            </div>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative" role="alert">
                                <span className="block sm:inline">{error}</span>
                            </div>
                        )}
                        {message && (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative" role="alert">
                                <span className="block sm:inline">{message}</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={loading}
                        >
                            {loading ? 'Logging In...' : 'Sign Up'}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-gray-500 text-sm">
                            Already have an account?{' '}
                            <a href="/signup" className="text-green-600 hover:text-green-700 font-medium">
                                Log In
                            </a>
                        </p>
                    </div>
                </div>

                {/* Right Section: Image and Text */}
                <div className="w-full lg:w-1/2 bg-gradient-to-br from-green-700 to-green-900 p-8 sm:p-12 lg:p-16 flex flex-col justify-between text-white rounded-t-none rounded-b-3xl lg:rounded-l-none lg:rounded-r-3xl">
                    <div className="text-right mb-8">
                        <span className="text-green-200 text-lg font-medium opacity-75">Fillianata</span>
                    </div>
                    <div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight mb-8 drop-shadow-md">
                            Enter the Future of Payments, today
                        </h1>
                    </div>

                    <div className="relative w-full h-64 mt-auto flex items-end justify-center">
                        <div className="bg-white rounded-xl shadow-lg w-full max-w-sm h-48 p-6 relative">
                            <div className="absolute top-4 left-4 bg-green-600 rounded-full w-8 h-8 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div className="flex items-center justify-end">
                                <svg className="h-10 w-10 text-gray-300 transform rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM5 9a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="text-gray-800 text-3xl font-bold mt-4">$12,347.23</div>
                            <div className="text-gray-500 text-sm mt-1">Combined balance</div>

                            <div className="flex justify-between items-center mt-4 text-gray-700 text-sm">
                                <span>Primary Card</span>
                                <span>$2,546.64</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-500 text-xs">
                                <span>3495 **** **** 6917</span>
                                <span className="font-bold">VISA</span>
                            </div>
                            <div className="mt-3 text-right">
                                <button className="text-green-600 text-xs font-semibold px-3 py-1 rounded-full border border-green-600 hover:bg-green-600 hover:text-white transition-colors duration-200">
                                    View All
                                </button>
                            </div>
                        </div>

                        <div className="absolute left-6 bottom-4 bg-green-600 rounded-xl shadow-lg w-20 h-32 flex items-center justify-center p-2 transform -translate-x-1/2 -translate-y-1/2">
                            <svg className="h-10 w-10 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
