import { useState } from "react";

const MENU_LIST = [
  {
    id: 1,
    title: "Trang chủ",
    link: "/",
  },
  {
    id: 2,
    title: "Giới thiệu",
    subMenuList: [
      {
        id: 9,
        title: "Chức năng",
        link: "/chuc-nang",
      },
      {
        id: 10,
        title: "Nhiệm vụ",
        link: "/nhiem-vu",
      },
      {
        id: 11,
        title: "Nhân sự",
        link: "/nhan-su",
      },
    ],
  },
  {
    id: 3,
    title: "Thông tin - Thông báo",
    subMenuList: [
      {
        id: 12,
        title: "Chức năng",
        link: "/chuc-nang",
      },
      {
        id: 13,
        title: "Nhiệm vụ",
        link: "/nhiem-vu",
      },
      {
        id: 14,
        title: "Nhân sự",
        link: "/nhan-su",
      },
    ],
  },
  {
    id: 4,
    title: "Tin tức CNTT",
  },
  {
    id: 5,
    title: "Hướng dẫn",
    link: "/huong-dan",
  },
  {
    id: 6,
    title: "Tài liệu",
  },
  {
    id: 7,
    title: "Thủ thuật",
  },
  {
    id: 8,
    title: "Liên hệ",
    link: "/lien-he",
  },
];

const NavBar = () => {
  const [activeMenuId, setActiveMenuId] = useState<number | null>(null);

  const handleMenuClick = (menuId: number) => {
    if (menuId === activeMenuId) {
      setActiveMenuId(null);
    } else {
      setActiveMenuId(menuId);
    }
  };

  return (
    <nav className=" flex container mx-auto bg-blue-500 rounded-md  gap-5 ">
      {MENU_LIST.map((menuItem) => (
        <MenuItem
          key={menuItem.id}
          id={menuItem.id}
          title={menuItem.title}
          link={menuItem.link}
          activeMenuId={activeMenuId}
          subMenuList={menuItem.subMenuList}
          handleMenuClick={handleMenuClick}
        />
      ))}
    </nav>
  );
};

export default NavBar;

interface MenuItemProps {
  id: number;
  title: string;
  link?: string;
  activeMenuId?: number | null;
  handleMenuClick: (menuId: number) => void;
  subMenuList?: {
    id: number;
    title: string;
    link: string;
  }[];
}

const MenuItem = (props: MenuItemProps) => {
  const { id, title, link, activeMenuId, subMenuList, handleMenuClick } = props;

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          onClick={() => handleMenuClick(id)}
        >
          {link ? <a href={link}>{title}</a> : <p>{title}</p>}
        </button>
      </div>

      {subMenuList && subMenuList.length > 0 && id === activeMenuId && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {subMenuList.map((subMenuItem) => (
              <a
                key={subMenuItem.id}
                href={subMenuItem.link}
                className="text-gray-700 block px-4 py-2 text-sm"
                id={subMenuItem.id.toString()}
              >
                {subMenuItem.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
