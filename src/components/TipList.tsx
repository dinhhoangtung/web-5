import React from 'react';

interface Tip {
  title: string;
  date: string;
}

const tips: Tip[] = [
  { title: 'Sử dụng OpenVPN', date: '18-07-2021' },
  { title: 'Sửa lỗi Windows 10 bằng 1 cú click chuột với FixWin', date: '13-09-2020' },
  { title: 'Sử dụng hệ thống Microsoft Azure thay cho Microsoft Imagine (DreamSpark) cũ', date: '04-09-2019' },
  { title: 'Cách cập nhật Windows 10 lên Windows 10 May 2019 (1903)', date: '25-05-2019' },
  { title: 'Kết nối wifi UIT trên điện thoại Android', date: '27-02-2019' },
];

const TipsList: React.FC = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-lg font-semibold text-blue-600">HƯỚNG DẪN - THỦ THUẬT</h2>
        <ul className="mt-4">
          {tips.map((tip, index) => (
            <li key={index} className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-sm text-gray-700">{tip.title}</span>
              <span className="text-sm text-gray-500">({tip.date})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TipsList;
