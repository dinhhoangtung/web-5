import Card, { Item } from "./Card";
import Card2, { News } from "./Card2";
const MOCK_DATA = [
  {
    id: 1,
    title: "Sử dụng OpenVPN",
    link: "https://phongdl.uit.edu.vn/su-dung-openvpn",
    date: "18-07-2021",
  },
  {
    id: 2,
    title: "Sửa lỗi Windows 10 bằng 1 cú click chuột với FixWin ",
    link: "https://phongdl.uit.edu.vn/sua-loi-windows-10-bang-1-cu-click-chuot-voi-fixwin",
    date: "18-07-2021",
  },
  {
    id: 3,
    title:
      "Sử dụng hệ thống Microsoft Azure thay cho Microsoft Imagine (DreamSpark) cũ",
    link: "https://phongdl.uit.edu.vn/su-dung-he-thong-microsoft-azure-thay-cho-microsoft-imagine-dreamspark-cu",
    date: "18-07-2021",
  },
  {
    id: 4,
    title: "Cách cập nhật Windows 10 lên Windows 10 May 2019 (1903) ",
    link: "https://phongdl.uit.edu.vn/cach-cap-nhat-windows-10-len-windows-10-may-2019-1903",
    date: "18-07-2021",
  },
  {
    id: 5,
    title: "Kết nối wifi UIT trên điện thoại Android",
    link: "https://phongdl.uit.edu.vn/ket-noi-wifi-uit-tren-dien-thoai-android",
    date: "18-07-2021",
  },
];
const MOCK_DATA_2 = [
  {
    id: 1,
    title:
      "Dịch vụ DNS 1.1.1.1 mới của Cloudflare, bảo mật hơn, lướt web nhanh hơn",
    link: "https://phongdl.uit.edu.vn/su-dung-openvpn",
    date: "18-07-2021",
  },
  {
    id: 2,
    title: "Hiểu rõ hơn về mã độc tống tiền Wanna.Cry ",
    link: "https://phongdl.uit.edu.vn/sua-loi-windows-10-bang-1-cu-click-chuot-voi-fixwin",
    date: "18-07-2021",
  },
  {
    id: 3,
    title:
      "Microsoft công bố ra mắt bản Windows 10 Anniversary Update vào ngày 2/8",
    link: "https://phongdl.uit.edu.vn/su-dung-he-thong-microsoft-azure-thay-cho-microsoft-imagine-dreamspark-cu",
    date: "18-07-2021",
  },
  {
    id: 4,
    title: "Bão Thần Sấm đổ bộ, viễn thông Philippines tê liệt  ",
    link: "https://phongdl.uit.edu.vn/cach-cap-nhat-windows-10-len-windows-10-may-2019-1903",
    date: "18-07-2021",
  },
  {
    id: 5,
    title: "Truy cập vào kho 300 quyển ebook miễn phí của Microsoft",
    link: "https://phongdl.uit.edu.vn/ket-noi-wifi-uit-tren-dien-thoai-android",
    date: "18-07-2021",
  },
];
const MOCK_DATA_3 = [
  {
    id: 1,
    title: "Website trường",
    link: "https://phongdl.uit.edu.vn/su-dung-openvpn",
    date: "18-07-2021",
  },
  {
    id: 2,
    title: "Phòng đào tạo đại học  ",
    link: "https://phongdl.uit.edu.vn/sua-loi-windows-10-bang-1-cu-click-chuot-voi-fixwin",
    date: "18-07-2021",
  },
  {
    id: 3,
    title: "Phòng đào tạo sau đại học ",
    link: "https://phongdl.uit.edu.vn/su-dung-he-thong-microsoft-azure-thay-cho-microsoft-imagine-dreamspark-cu",
    date: "18-07-2021",
  },
  {
    id: 4,
    title: "Phòng công tác Sinh viên ",
    link: "https://phongdl.uit.edu.vn/cach-cap-nhat-windows-10-len-windows-10-may-2019-1903",
    date: "18-07-2021",
  },
  {
    id: 5,
    title: "Phòng Quản Trị thiết bị",
    link: "https://phongdl.uit.edu.vn/ket-noi-wifi-uit-tren-dien-thoai-android",
    date: "18-07-2021",
  },
  {
    id: 6,
    title: "Webmail",
    link: "https://phongdl.uit.edu.vn/ket-noi-wifi-uit-tren-dien-thoai-android",
    date: "18-07-2021",
  },
];
const MOCK_DATA_Card2 = [
  {
    id: 1,
    img: "abc",
    nameNews: "Sử dụng OpenVPN",
    link: "https://phongdl.uit.edu.vn/su-dung-openvpn",
    date: "18-07-2021",
    time: "10:10pm",
    note: "Note1",
  },
  {
    id: 2,
    img: "abc",
    nameNews: "Hiểu rõ hơn về mã độc tống tiền Wanna.Cry  ",
    link: "https://phongdl.uit.edu.vn/sua-loi-windows-10-bang-1-cu-click-chuot-voi-fixwin",
    date: "18-07-2021",
    time: "10:10pm",
    note: "Note2",
  },
  {
    id: 3,
    img: "bcd",
    nameNews: "Kết nối wifi sử dụng tài khoản chứng thực UIT trên Windows 7 ",
    link: "https://phongdl.uit.edu.vn/su-dung-he-thong-microsoft-azure-thay-cho-microsoft-imagine-dreamspark-cu",
    date: "18-07-2021",
    time: "10:10pm",
    note: "Note3",
  },
  {
    id: 4,
    img: "xyz",
    nameNews: "Hướng dẫn tạo website trên Google sites",
    link: "https://phongdl.uit.edu.vn/cach-cap-nhat-windows-10-len-windows-10-may-2019-1903",
    date: "18-07-2021",
    time: "10:10pm",
    note: "Note4",
  },
  {
    id: 5,
    img: "def",
    nameNews: "Hướng dẫn sử dụng website môn học (moodle)",
    link: "https://phongdl.uit.edu.vn/ket-noi-wifi-uit-tren-dien-thoai-android",
    date: "18-07-2021",
    time: "10:10pm",
    note: "Note5",
  },
];
const Content = () => {
  const transformedData: Item[] = MOCK_DATA.map((item) => ({
    id: item.id,
    name: item.title,
    href: item.link,
    releasedDate: item.date,
  }));
  const transformedData2: Item[] = MOCK_DATA_2.map((item) => ({
    id: item.id,
    name: item.title,
    href: item.link,
    releasedDate: item.date,
  }));
  const transformedData3: Item[] = MOCK_DATA_3.map((item) => ({
    id: item.id,
    name: item.title,
    href: item.link,
    releasedDate: item.date,
  }));
  return (
    <>
      <div className="">
        <div className="container mx-auto ">
          <div className=" grid grid-cols-3 gap-5 ">
            {/* left col */}
            <div className=" h-auto flex flex-col col-span-1 ">
              <Card title="HƯỚNG DẪN - THỦ THUẬT" list={transformedData} />
              <Card title="TIN TỨC CNTT" list={transformedData2} />
              <Card title="LIÊN KẾT WEBSITE" list={transformedData3} />
            </div>
            {/* right */}
            <div className="col-span-2">
              <Card2
                titleNew="PHÒNG DỮ LIỆU & CNTT"
                listNew={MOCK_DATA_Card2}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Content;
