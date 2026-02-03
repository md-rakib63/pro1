import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="hero py-20 px-4">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <div className="badge badge-primary badge-outline mb-4 p-4 font-semibold uppercase tracking-widest">
              Smart Task Management
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight">
              আপনার কাজগুলোকে <br />
              <span className="text-primary italic">সঠিকভাবে সাজান</span>
            </h1>
            <p className="py-8 text-lg text-slate-600 leading-relaxed">
              আপনার প্রতিদিনের টাস্ক ম্যানেজ করার জন্য সবচেয়ে সহজ এবং শক্তিশালী সমাধান। 
              Vite, React এবং Firebase এর সমন্বয়ে তৈরি।
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/register" className="btn btn-primary btn-lg rounded-full px-10 shadow-xl shadow-primary/20">
                ফ্রি শুরু করুন
              </Link>
              <Link to="/login" className="btn btn-outline btn-lg rounded-full px-10">
                লগইন করুন
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card bg-white shadow-sm border border-slate-100 p-8 hover:shadow-xl transition-all">
          <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <h3 className="text-xl font-bold mb-3 text-slate-800">রিয়েল-টাইম সিঙ্ক</h3>
          <p className="text-slate-500">ফায়ারবেস ডাটাবেজের মাধ্যমে আপনার টাস্কগুলো যেকোনো ডিভাইস থেকে এক্সেস করুন।</p>
        </div>

        <div className="card bg-white shadow-sm border border-slate-100 p-8 hover:shadow-xl transition-all">
          <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </div>
          <h3 className="text-xl font-bold mb-3 text-slate-800">সম্পূর্ণ সুরক্ষিত</h3>
          <p className="text-slate-500">Firebase Authentication এর মাধ্যমে আপনার পাসওয়ার্ড এবং ডেটা থাকবে ১০০% নিরাপদ।</p>
        </div>

        <div className="card bg-white shadow-sm border border-slate-100 p-8 hover:shadow-xl transition-all">
          <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </div>
          <h3 className="text-xl font-bold mb-3 text-slate-800">সহজ ডিজাইন</h3>
          <p className="text-slate-500">কোনো বাড়তি ঝামেলা নেই। একদম ক্লিন এবং ইউজার-ফ্রেন্ডলি ইন্টারফেস।</p>
        </div>
      </div>
    </div>
  );
};

export default Home;