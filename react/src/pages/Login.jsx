import { Eye, EyeOff } from 'lucide-react'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { axiosClient } from '../api';
import { useStateContext } from '../context/ContextProvider';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const {setUser, setToken } = useStateContext();
  
  const emailRef = useRef();
  const passwordRef = useRef();

  // login form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    
    axiosClient.post("/login", payload)
    .then(({ data  }) => {
      setUser(data.user),
      setToken(data.token)
    })
    .catch((err) => {
      setLoading(false);
      const response = err.response;
      console.error('Login error:', err);
      console.log('Backend response:', response?.data);
      if (response && response.status === 422) {
        setErrors(response.data.errors);
        if(response.data.errors) {
          setErrors(response.data.errors);
        } else {
          setErrors({
            email: [response.data.message]
          });
        }
      } else {
        setErrors({
          general: 'Something went wrong. Please try again later.'
        });
      }
    })
  }

  return (
    <div className="container flex items-center justify-center h-screen">
      <div className="p-6 bg-white shadow-2xl rounded-2xl card w-100">
        <h1 className="mt-4 text-2xl text-center">Login in to your account</h1>

        {errors.general && (
          <div className="p-2 mt-4 text-sm text-red-600 bg-red-100 rounded">
            {errors.general}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6">
          {/* Gmail input field */}                                                                                                                         
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
            )
          }

          {/* Password input field */}
          <label className="block mt-5 mb-1 text-sm font-bold text-gray-900">Password:</label>
          <div className="relative">
            <input
              ref={passwordRef}
              type={showPassword ? "text" : "password"} 
              className={`w-full px-3 py-2 font-medium text-gray-900 border rounded ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">{errors.email[0]}</p>
            )}

            {/* Show/hide password icon */}
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 flex items-center text-gray-500 right-3"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>

          {/* Button field */}
          {/* <div className="flex items-center justify-center mt-6"> */}
            <button 
              disabled={loading}
              className="w-full px-2 py-2 mt-6 font-bold text-white bg-[#212121] rounded hover:bg-opacity-90 disabled:opacity-70"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          {/* </div> */}
          <div className="flex items-center justify-center mt-3">
            <p className="text-md">
              Don&apos;t have an account?  
              <Link to="/signup" className="text-blue-600 hover:text-blue-800"> Singup here.</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
