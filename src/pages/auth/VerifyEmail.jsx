export default function VerifyEmail() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-6">
        <h2 className="text-center text-2xl font-bold text-gray-800">Verify your email</h2>
        <p className="text-center text-gray-600">
          We've sent a verification email to your address. Please check your inbox and click the verification link to continue.
        </p>
        <div className="text-center">
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            Resend verification email
          </a>
        </div>
        <p className="text-center text-sm text-gray-500">
          Already verified? <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</a>
        </p>
      </div>
    </div>
  );
}