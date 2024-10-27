import SideNavbar from "../components/SideNavbar";
import Content from "../components/Content";
import ControlPanel from "../components/ControlPanel";

const HomeScreen = () => {
  return (
    <>
      <div className=" w-full ">
        <ControlPanel />
      </div>
      <div className="flex w-full h-full">
        <div className="w-1/4">
          {/* 25% width for SideNavbar */}
          <SideNavbar />
        </div>
        <div className="w-3/4">
          {/* 75% width for Content */}
          <Content />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
