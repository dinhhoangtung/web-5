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
    <div>
      <h2>{titleNew}</h2>
      <ul>
        {listNew.map((news) => (
          <li key={news.id}>
            <div>{news.img}</div>
            <div>
              <div>
                <a href="{news.link}">{news.nameNews}</a>
              </div>
              <div>
                <span>{news.date}</span>
                <span>{news.time}</span>
              </div>
              <h3>{news.note}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Card2;
