const Footer = () => {
  return (
    <footer className="bg-neutral-900 border-t border-gray-800 mt-auto py-8 text-center">
      <div className="container mx-auto px-4">
        {/* লোগো বা নাম */}
        <div className="mb-4">
          <h2 className="text-white text-xl font-bold tracking-tight">
            Todo<span className="text-primary">App</span>
          </h2>
        </div>

        {/* কপিরাইট টেক্সট */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} <span className="text-white font-medium">TodoApp</span>. 
          All rights reserved.
        </p>
        
        {/* ছোট একটি ডেকোরেশন লাইন */}
        <div className="mt-4 flex justify-center gap-4 text-gray-500 text-xs">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;