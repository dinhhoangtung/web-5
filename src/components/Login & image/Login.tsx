import React, { useState } from "react";

const Login: React.FC = () => {
  const [name, setname] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Tên người dùng", name);
    console.log("Password:", password);
    // Thực hiện các bước đăng nhập tại đây
  };

  return (
    <div className=" p-5 flex items-center justify-center bg-gray-100 border-slate-950">
      <div className="bg-white border-slate-950 rounded-lg shadow-lg w-96">
        <div className="border flex p-3">
          <h2 className="pl-3 text-2xl font-bold  text-blue-500">Đăng nhập</h2>
        </div>
        <form onSubmit={handleSubmit} className="p-8">
          <div className="mb-4 ">
            <label
              className="block font-sans text-sm font-bold text-[#333] mb-2"
              htmlFor="name"
            >
              Tên người dùng *
            </label>
            <input
              type="name"
              id="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 border-slate-950"
              required
            />
            <div className="font-sans text-sm text-[#333]">
              Dùng tài khoản chứng thực
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block font-sans text-sm font-bold text-[#333] mb-2"
              htmlFor="password"
            >
              Mật khẩu *
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 border-slate-950"
              required
            />
            <div className="font-sans text-sm text-[#333]">
              Mật khẩu chứng thực{" "}
            </div>
          </div>
          <button
            type="submit"
            className=" bg-[#e6e6e6] font-sans text-sm   text-black px-6 py-1 rounded-md  transition duration-200"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
