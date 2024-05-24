export type News = {
  id: number;
  img: string;
  nameNews: string;
  link: string;
  date: string;
  time: string;
  note: string;
};
export interface Card2Props {
  titleNew: string;
  listNew: News[];
}
const Card2 = (props: Card2Props) => {
  const { titleNew, listNew } = props;
  return (
    <div className="rounded-lg shadow-xl border border-gray-400 border-b-4  gap-7 items-center">
      <h2 className="text-[13px] font-bold text-[#08c] py-[10px] px-[15px] bg-gradiant-to- r from-slate-600 to-white rounded-t-lg border border-gray-400">
        {titleNew}
      </h2>
      <ul className="font-size px-[5px] py-[10px] item-center text-align: justify gap-3 ">
        {listNew.map((news) => (
          <li key={news.id}>
            <div className="flex gap-10 items-center">
              <div>
                <div>{news.img}</div>
              </div>
              <div className="gap-10 border-b-2">
                <div>
                  <a
                    href="{news.link}"
                    className="text-[#08c] text-align: center font-sans text-sm  hover:underline "
                  >
                    {news.nameNews}
                  </a>
                </div>
                <div className="">
                  <span className="text-xs text-[#666] font-sans gap-3">
                    ({news.date}
                  </span>
                  <span className="text-xs text-[#666] font-sans gap-3">
                    {news.time})
                  </span>
                </div>
                <h3>{news.note}</h3>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Card2;
