import { useState } from "react";
const Item_List = [
  {
    id: 1,
    title: "Trang chủ",
    link: "/",
  },
  {
    id: 2,
    title: "Giới thiệu ",
    submenuList: [
      {
        id: 20,
        title: "Thông tin- Thông báo",
        link: "/",
      },
      {
        id: 21,
        title: "Tin tức CNTT",
        link: "/",
      },
      {
        id: 22,
        title: "Hướng dẫn ",
        link: "/",
      },
    ],
  },
  {
    id: 3,
    title: "Thông tin- Thông báo",
    submenuList: [
      {
        id: 12,
        title: "Thông tin- Thông báo",
        link: "/",
      },
      {
        id: 13,
        title: "Tin tức CNTT",
        link: "/",
      },
      {
        id: 14,
        title: "Hướng dẫn ",
        link: "/",
      },
    ],
  },
  {
    id: 4,
    title: "Tin tức CNTT",
    link: "/",
  },
  {
    id: 5,
    title: "Hướng dẫn ",
    link: "/",
  },
  {
    id: 6,
    title: "Tài liệu ",
    link: "/",
  },
  {
    id: 7,
    title: "Thủ thuật",
    link: "/",
  },
  {
    id: 8,
    title: "Liên hệ",
    link: "/",
  },
];
const NavBar = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const handleClick = (menuId: number) => {
    if (menuId === isOpen) {
      setIsOpen(null);
    } else {
      setIsOpen(menuId);
    }
  };

  return (
    <nav className=" flex container mx-auto bg-blue-500 rounded-md  gap-5 ">
      {Item_List.map((itemItem) => (
        <div key={itemItem.id} className="relative inline-block text-left">
          <div>
            <button
              type="button"
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm  ring-inset ring-gray-300 "
              id="menu-button"
              onClick={() => handleClick(itemItem.id)}
            >
              {itemItem.link ? (
                <a href={itemItem.link}>{itemItem.title}</a>
              ) : (
                <p>{itemItem.title}</p>
              )}
            </button>
          </div>

          {itemItem.submenuList &&
            itemItem.submenuList.length > 0 &&
            isOpen === itemItem.id && (
              <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {itemItem.submenuList.map((subItemItem) => (
                    <a
                      key={subItemItem.id}
                      href={subItemItem.link}
                      className="text-gray-700 block px-4 py-2 text-sm"
                      id={subItemItem.id.toString()}
                    >
                      {subItemItem.title}
                    </a>
                  ))}
                </div>
              </div>
            )}
        </div>
      ))}
    </nav>
  );
};

export default NavBar;
