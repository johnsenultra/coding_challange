// Import necessary components and libraries
import { Eye, EyeOff } from 'lucide-react'; // Icons for showing/hiding password
import { useRef, useState } from 'react'; // React hooks for managing state and references
import { Link } from 'react-router-dom'; // For navigation between routes
import { axiosClient } from '../api'; // Custom Axios client for making API requests
import { useStateContext } from '../context/ContextProvider'; // Global state context for user and token

// Login component definition
export default function Login() {
  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);

  // State to manage validation errors
  const [errors, setErrors] = useState({});

  // State to manage loading state during form submission
  const [loading, setLoading] = useState(false);

  // Access global state context for setting user and token
  const { setUser, setToken } = useStateContext();

  // Refs to access the email and password input fields
  const emailRef = useRef();
  const passwordRef = useRef();

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Set loading state to true to indicate the form is being submitted
    setLoading(true);

    // Prepare the payload with email and password from the input fields
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    // Make a POST request to the login endpoint
    axiosClient
      .post('/login', payload)
      .then(({ data }) => {
        // On successful login, update the global user and token state
        setUser(data.user);
        setToken(data.token);
      })
      .catch((err) => {
        // On error, reset the loading state
        setLoading(false);

        // Extract the response from the error
        const response = err.response;
        console.error('Login error:', err); // Log the error for debugging

        // Handle validation errors (status code 422)
        if (response && response.status === 422) {
          // Set errors from the backend response
          setErrors(response.data.errors || { email: [response.data.message] });
        } else {
          // Handle other errors (e.g., network issues)
          setErrors({
            general: 'Something went wrong. Please try again later.',
          });
        }
      });
  };

  // Render the login form
  return (
    <div className="container flex items-center justify-center h-screen">
      <div className="p-6 bg-white shadow-2xl rounded-2xl card w-100">
        {/* Form title */}
        <h1 className="mt-4 text-2xl text-center">Login to your account</h1>

        {/* Display general errors (e.g., network issues) */}
        {errors.general && (
          <div className="p-2 mt-4 text-sm text-red-600 bg-red-100 rounded">
            {errors.general}
          </div>
        )}

        {/* Login form */}
        <form onSubmit={handleSubmit} className="mt-6">
          {/* Email input field */}
          <label className="block mb-2 text-sm font-bold text-gray-900">Email Address:</label>
          <input
            ref={emailRef} // Ref to access the email input
            type="email" // Input type for email
            className={`w-full px-3 py-2 font-medium text-gray-900 border rounded shadow appearance-none ${
              errors.email ? 'border-red-500' : 'border-gray-300' // Add red border if there's an error
            }`}
          />
          {/* Display email validation errors */}
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email[0]}</p>}

          {/* Password input field */}
          <label className="block mt-5 mb-1 text-sm font-bold text-gray-900">Password:</label>
          <div className="relative">
            <input
              ref={passwordRef} // Ref to access the password input
              type={showPassword ? 'text' : 'password'} // Toggle between text and password type
              className={`w-full px-3 py-2 font-medium text-gray-900 border rounded ${
                errors.password ? 'border-red-500' : 'border-gray-300' // Add red border if there's an error
              }`}
            />
            {/* Display password validation errors */}
            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password[0]}</p>}

            {/* Button to toggle password visibility */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
              className="absolute inset-y-0 flex items-center text-gray-500 right-3"
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />} {/* Show Eye or EyeOff icon */}
            </button>
          </div>

          {/* Submit button */}
          <button
            disabled={loading} // Disable the button when loading
            className="w-full px-2 py-2 mt-6 font-bold text-white bg-[#212121] rounded hover:bg-opacity-90 disabled:opacity-70"
          >
            {loading ? 'Logging in...' : 'Login'} {/* Show loading text when submitting */}
          </button>

          {/* Link to signup page */}
          <div className="flex items-center justify-center mt-3">
            <p className="text-md">
              Don&apos;t have an account?{' '}
              <Link to="/signup" className="text-blue-600 hover:text-blue-800">
                Signup here.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}