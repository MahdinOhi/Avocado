import React, { useState } from 'react';
import hooks from './hooks';
import LeftPanel from './LeftPanel';
import InputField from './InputField';
import UserTypeToggle from './UserTypeToggle';  
import { useToggle } from './hooks';

function SignUpPage() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', username: '',
    email: '', password: '', dateOfBirth: '', userType: 'Student'
  });
  const handle = field => e =>
    setForm(prev => ({ ...prev, [field]: e.target.value }));

  const [showPassword, toggleShow] = useToggle();
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [agreeToMarketing, setAgreeToMarketing] = useState(false);

  const handleSubmit = () => {
    if (!agreeToTerms) return alert('Please agree to Terms & Privacy');
    console.log({ form, agreeToMarketing });
    alert('Account created successfully!');
  };

  return (
    <div className="min-h-screen bg-black grid lg:grid-cols-2">
      <LeftPanel />
      <div className="bg-black flex items-center justify-center p-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Sign up now
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <InputField label="First name" value={form.firstName} onChange={handle('firstName')} placeholder="First name" required />
            <InputField label="Last name" value={form.lastName} onChange={handle('lastName')} placeholder="Last name" required />
          </div>
          <InputField label="Username" value={form.username} onChange={handle('username')} placeholder="Username" required />
          <InputField label="Email address" type="email" value={form.email} onChange={handle('email')} placeholder="Email address" required />
          <InputField label="Date of birth" type="date" value={form.dateOfBirth} onChange={handle('dateOfBirth')} required />
          <InputField
            label="Password"
            type="password"
            value={form.password}
            onChange={handle('password')}
            placeholder="Password"
            required
            showPassword={showPassword}
            onTogglePassword={toggleShow}
          />
          <p className="text-xs text-gray-500 mb-4">
            Use 8 or more characters with a mix of letters, numbers & symbols
          </p>

          <UserTypeToggle
            selectedType={form.userType}
            onTypeChange={type => setForm(prev => ({ ...prev, userType: type }))}
          />

          <div className="mb-4">
            <label className="flex items-start space-x-2">
              <input
                type="checkbox"
                checked={agreeToTerms}
                onChange={e => setAgreeToTerms(e.target.checked)}
                required
                className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-600">
                By creating an account, I agree to our{' '}
                <a href="#" className="text-blue-600 hover:underline">Terms</a> and{' '}
                <a href="#" className="text-blue-600 hover:underline">Privacy</a>.
              </span>
            </label>
          </div>

          <div className="mb-6">
            <label className="flex items-start space-x-2">
              <input
                type="checkbox"
                checked={agreeToMarketing}
                onChange={e => setAgreeToMarketing(e.target.checked)}
                className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-600">
                I consent to receive SMS & emails about features, events, promotions.
              </span>
            </label>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-lg transition-colors"
          >
            Sign up
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{' '}
            <a href="#" className="text-blue-600 hover:underline font-medium">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
