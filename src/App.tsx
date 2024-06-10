import Content from "./components/MainCard/Content";
import Header from "./components/Header/Header";
import NavBar from "./components/MainNavBar/NavBar";

import LoginAndCard from "./components/Login & Card/Login&Card";

function App() {
  return (
    <div className="container mx-auto w-[1190px] ">
      <Header />
      <NavBar />
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <LoginAndCard />
        </div>
        <div className="col-span-3">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
