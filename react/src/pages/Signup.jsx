import { Eye, EyeOff } from 'lucide-react'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { axiosClient } from '../api';
import { useStateContext } from '../context/ContextProvider';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const {setUser, setToken } = useStateContext();
  
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: confirmPasswordRef.current.value
    }

    axiosClient.post("/signup", payload)
    .then(({data}) => {
      setUser(data.user)
      setToken(data.token)
    })
    .catch((err) => {
      setLoading(false);
      const response = err.response;
      console.error('Signup error:', err);
      if (response && response.status === 422) {
        setErrors(response.data.errors);
      } else {
        setErrors({
          general: 'Something went wrong. Please try again later.'
        });
      }
    });
    console.log(payload);
  }

  return (
    <div className="container flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md p-6 bg-white shadow-2xl rounded-2xl">
        <h1 className="mt-4 text-2xl font-bold text-center">Create your account</h1>
        
        {errors.general && (
          <div className="p-2 mt-4 text-sm text-red-600 bg-red-100 rounded">
            {errors.general}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-900">Full Name:</label>
            <input 
              ref={nameRef}
              className={`w-full px-3 py-2 font-medium text-gray-900 border rounded shadow appearance-none ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name[0]}</p>
            )}
          </div>

          <div>
            <label className="block mb-2 text-sm font-bold text-gray-900">Email Address:</label>
            <input 
              ref={emailRef}
              type="email"
              className={`w-full px-3 py-2 font-medium text-gray-900 border rounded shadow appearance-none ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email[0]}</p>
            )}
          </div>

          <div>
            <label className="block mb-2 text-sm font-bold text-gray-900">Password:</label>
            <div className="relative">
              <input
                ref={passwordRef}
                type={showPassword ? "text" : "password"}
                className={`w-full px-3 py-2 font-medium text-gray-900 border rounded ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 flex items-center text-gray-500 right-3"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">{errors.password[0]}</p>
            )}
          </div>

          <div>
            <label className="block mb-2 text-sm font-bold text-gray-900">Confirm Password:</label>
            <div className="relative">
              <input
                ref={confirmPasswordRef}
                type={showPassword ? "text" : "password"}
                className={`w-full px-3 py-2 font-medium text-gray-900 border rounded ${
                  errors.password_confirmation ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 flex items-center text-gray-500 right-3"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
            {errors.password_confirmation && (
              <p className="mt-1 text-xs text-red-500">{errors.password_confirmation[0]}</p>
            )}
          </div>

          <button 
            disabled={loading}
            className="w-full px-2 py-2 mt-6 font-bold text-white bg-[#212121] rounded hover:bg-opacity-90 disabled:opacity-70"
          >
            {loading ? 'Signing up...' : 'Sign up'}
          </button>

          <div className="text-center">
            <p className="text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 hover:text-blue-800">
                Login here.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}