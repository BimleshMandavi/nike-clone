import { Avatar, Box, Button } from "@mui/material";
import { useSelector } from "react-redux";
import HomeSlider from "../../pages/home/HomeSlider";
import UserNav from "../userPorfile/UserNav";

function Profile() {
  const { user } = useSelector((state) => state.auth);
  console.log("user:", user);

  const getFormattedDate = (dateString) => {
    const date = new Date(dateString);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return `${monthNames[monthIndex]} ${year}`;
  };
  return (
    <div className="m-0 p-0 h-full w-full pl-8 pr-8 text-xl mt-10">
      <UserNav />
      <div className="profile-body mt-10 pb-[48px]">
        <div className="profile-avtar ">
          <Box sx={{ display: "flex", alignItems: "center", height: "80px" }}>
            <Avatar variant="solid" className="size-2xl" />
            <div className=" flex pl-8 flex-col">
              <div className="flex gap-2 text-lg">
                <h1 className="text-3xl">{user?.firstName}</h1>
                <h1 className="text-3xl">{user?.lastName}</h1>
              </div>
              <div className="text-slate-600">
                {`Nike Member Since ${getFormattedDate(user?.createdAt)}`}
              </div>
            </div>
          </Box>
        </div>
      </div>
      <div className="intrested-area flex justify-between pb-[24px]">
        <h2 className="text-3xl">Interests</h2>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            border: "2px solid grey",
            borderRadius: "20px",
          }}
        >
          <Button size="sm">Edit</Button>
        </Box>
      </div>
      <div className="other-anchor-area flex pl-[16px] gap-[20px] border-b-2 pb-8 flex-wrap">
        <a className="no-underline " href="">
          All
        </a>
        <a className="no-underline" href="">
          Sports
        </a>
        <a className="no-underline" href="">
          Products
        </a>
        <a className="no-underline" href="">
          Teams
        </a>
        <a className="no-underline" href="">
          Athletes
        </a>
        <a className="no-underline" href="">
          Cities
        </a>
      </div>
      <div className="mt-[16px]">
        Add your interests to shop a collection of products that are based on
        what you`re into.
      </div>
      <div className="pt-10 h-full w-full">
        <HomeSlider />
      </div>
    </div>
  );
}

export default Profile;
