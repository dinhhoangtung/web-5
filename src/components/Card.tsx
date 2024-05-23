export type Item = {
  id: number;
  name: string;
  href: string;
  releasedDate: string;
};

export interface CardProps {
  title: string; // required
  list: Item[];
}

const Card = (props: CardProps) => {
  const { title, list } = props;

  return (
    <div className="rounded-lg shadow-xl border order-gray-400  gap-3 items-center ">
      <h2 className="text-[13px] font-bold text-[#08c] py-[10px] px-[15px] bg-gradiant-to- r from-slate-600 to-white rounded-t-lg border border-gray-400">
        {title}
      </h2>

      <ul className="font-size px-[5px] py-[10px] item-center text-align: justify ">
        {list.map((item) => (
          <li key={item.id}>
            <a
              href="{item.href}"
              className="w-[268px] h-[31px] leading-6 text-xs text-[#333333] hover:text-[#2968dd] hover:underline pl-[12px]"
            >
              {item.name}
            </a>
            <span className=" leading-3 text-[#666666] text-xs">
              ({item.releasedDate})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
