import Login from "./Login";
import Slideshow from "./introductionImage";

function LoginAndImage() {
  return (
    <div className=" grid grid-col-4 ">
      <div className="flex flex-col col-span-1">
        <Login />
      </div>
      <div className="flex flex-col col-span-3">
        <Slideshow />
      </div>
    </div>
  );
}
export default LoginAndImage;
