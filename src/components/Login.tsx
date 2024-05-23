import React, { useState } from 'react';

const Login: React.FC = () => {
  const [name, setname] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Tên người dùng', name);
    console.log('Password:', password);
    // Thực hiện các bước đăng nhập tại đây
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 border-slate-950">
      <div className="bg-white border-slate-950 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Đăng nhập</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Tên người dùng *
            </label>
            <div>
                Dùng tài khoản chứng thực 
            </div>
            <input
              type="name"
              id="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 border-slate-950"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Mật khẩu *
            </label>
            <div>Mật khẩu chứng thực </div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
