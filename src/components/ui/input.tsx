import React, {useState} from 'react';

const EmailSignup = () => {
  const [email, setEmail] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    setStatus('Redirecting...');

    const formData = new FormData(form);
    const email = formData.get("email") as string;
    window.location.href = `https://lanewayhacks.fillout.com/t/8Uqg1mjPknus?ref=${encodeURIComponent(
      "website")}&email=${encodeURIComponent(email)}`;

    setTimeout(() => {
      setStatus('Timeout? Try again :c');
      setEmail('');
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg ml-auto mt-2 relative z-10">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 bg-[#382a42] px-4 py-3 text-hack-white
                     placeholder:text-[#8B7AA1] border border-[#4D3E59]
                     focus:outline-none focus:ring-2 focus:ring-hack-button
                     transition-all duration-300"
        />
        <button
          type="submit"
          className="bg-hack-button px-6 py-3 text-hack-white
                     hover:bg-[#8B7AA1] transition-colors duration-300
                     font-medium shadow-lg shadow-[#281c30]/50"
        >
          Subscribe
        </button>
      </div>
      {status && (
        <p className="mt-2 text-sm text-hack-white">{status}</p>
      )}
    </form>
  );
};

export default EmailSignup;