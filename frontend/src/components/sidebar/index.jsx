import React from "react";
import * as RxIcons from "react-icons/rx";
import * as TbIcons from "react-icons/tb";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";

// item sidebar with role login
const ItemSidebar = ({ role }) => {
  if (role === "admin") {
    return (
      <div className="px-3">
        <NavLink
          to={"/dashboard"}
          className="lg:flex lg:items-center lg:gap-x-3 bg-[#5051F9] lg:py-3 lg:px-2 rounded-md"
        >
          <RxIcons.RxDashboard className="lg:text-[20px] text-white" />
          <p className="lg:text-[16px] text-white">Dashboard</p>
        </NavLink>

        <div>
          <p className="text-[#5F6388] py-3 mt-3">Master</p>
          <ul>
            <li>
              <NavLink
                to={"data-barang"}
                className={({ isActive }) =>
                  isActive
                    ? "lg:flex lg:items-center lg:gap-x-3 lg:py-3 lg:px-2 bg-[#5051F9] rounded-md text-white"
                    : "lg:flex lg:items-center lg:gap-x-3 lg:py-3 lg:px-2 text-[#9A9FCD]"
                }
              >
                <TbIcons.TbPackage className="lg:text-[20px]" />
                <p className="lg:text-[16px]">Data Barang</p>
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[#5F6388] py-3 mt-3">Transaksi</p>
          <ul>
            <li>
              <NavLink
                to={"barang-masuk"}
                className={({ isActive }) =>
                  isActive
                    ? "lg:flex lg:items-center lg:gap-x-3 lg:py-3 lg:px-2 bg-[#5051F9] rounded-md text-white"
                    : "lg:flex lg:items-center lg:gap-x-3 lg:py-3 lg:px-2 text-[#9A9FCD]"
                }
              >
                <TbIcons.TbTruckLoading className="lg:text-[20px]" />
                <p className="lg:text-[16px]">Barang Masuk</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"barang-keluar"}
                className={({ isActive }) =>
                  isActive
                    ? "lg:flex lg:items-center lg:gap-x-3 lg:py-3 lg:px-2 bg-[#5051F9] rounded-md text-white"
                    : "lg:flex lg:items-center lg:gap-x-3 lg:py-3 lg:px-2 text-[#9A9FCD]"
                }
              >
                <TbIcons.TbTruckDelivery className="lg:text-[20px]" />
                <p className="lg:text-[16px]">Barang Keluar</p>
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[#5F6388] py-3 mt-3">Laporan</p>
          <ul>
            <li>
              <NavLink
                to={"laporan-barang-masuk"}
                className={({ isActive }) =>
                  isActive
                    ? "lg:flex lg:items-center lg:gap-x-3 lg:py-3 lg:px-2 bg-[#5051F9] rounded-md text-white"
                    : "lg:flex lg:items-center lg:gap-x-3 lg:py-3 lg:px-2 text-[#9A9FCD]"
                }
              >
                <FaIcons.FaFileImport className="lg:text-[20px]" />
                <p className="lg:text-[16px]">Laporan Barang Masuk</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"laporan-barang-keluar"}
                className={({ isActive }) =>
                  isActive
                    ? "lg:flex lg:items-center lg:gap-x-3 lg:py-3 lg:px-2 bg-[#5051F9] rounded-md text-white"
                    : "lg:flex lg:items-center lg:gap-x-3 lg:py-3 lg:px-2 text-[#9A9FCD]"
                }
              >
                <FaIcons.FaFileExport className="lg:text-[20px]" />
                <p className="lg:text-[16px]">Laporan Barang Keluar</p>
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[#5F6388] py-3 mt-3">Pengaturan</p>
          <ul>
            <li>
              <NavLink
                to={"profile"}
                className={({ isActive }) =>
                  isActive
                    ? "lg:flex lg:items-center lg:gap-x-3 lg:py-3 lg:px-2 bg-[#5051F9] rounded-md text-white"
                    : "lg:flex lg:items-center lg:gap-x-3 lg:py-3 lg:px-2 text-[#9A9FCD]"
                }
              >
                <FaIcons.FaRegUser className="lg:text-[20px]" />
                <p className="lg:text-[16px]">Profile</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"user-manajement"}
                className={({ isActive }) =>
                  isActive
                    ? "lg:flex lg:items-center lg:gap-x-3 lg:py-3 lg:px-2 bg-[#5051F9] rounded-md text-white"
                    : "lg:flex lg:items-center lg:gap-x-3 lg:py-3 lg:px-2 text-[#9A9FCD]"
                }
              >
                <FaIcons.FaUserCog className="lg:text-[20px]" />
                <p className="lg:text-[16px]">User Manajemen</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="px-3">
        <NavLink
          to={"/dashboard"}
          className="lg:flex lg:items-center lg:gap-x-3 bg-[#5051F9] lg:py-3 lg:px-2 rounded-md"
        >
          <RxIcons.RxDashboard className="lg:text-[20px] text-white" />
          <p className="lg:text-[16px] text-white">Dashboard</p>
        </NavLink>

        <div>
          <p className="text-[#5F6388] py-3 mt-3">Master</p>
          <ul>
            <li>
              <NavLink
                to={"data-barang"}
                className={({ isActive }) =>
                  isActive
                    ? "lg:flex lg:items-center lg:gap-x-3 lg:py-3 lg:px-2 bg-[#5051F9] rounded-md text-white"
                    : "lg:flex lg:items-center lg:gap-x-3 lg:py-3 lg:px-2 text-[#9A9FCD]"
                }
              >
                <TbIcons.TbPackage className="lg:text-[20px]" />
                <p className="lg:text-[16px]">Data Barang</p>
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[#5F6388] py-3 mt-3">Transaksi</p>
          <ul>
            <li>
              <NavLink
                to={"barang-masuk"}
                className={({ isActive }) =>
                  isActive
                    ? "lg:flex lg:items-center lg:gap-x-3 lg:py-3 lg:px-2 bg-[#5051F9] rounded-md text-white"
                    : "lg:flex lg:items-center lg:gap-x-3 lg:py-3 lg:px-2 text-[#9A9FCD]"
                }
              >
                <TbIcons.TbTruckLoading className="lg:text-[20px]" />
                <p className="lg:text-[16px]">Barang Masuk</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"barang-keluar"}
                className={({ isActive }) =>
                  isActive
                    ? "lg:flex lg:items-center lg:gap-x-3 lg:py-3 lg:px-2 bg-[#5051F9] rounded-md text-white"
                    : "lg:flex lg:items-center lg:gap-x-3 lg:py-3 lg:px-2 text-[#9A9FCD]"
                }
              >
                <TbIcons.TbTruckDelivery className="lg:text-[20px]" />
                <p className="lg:text-[16px]">Barang Keluar</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const role = useSelector((state) => state.auth.role);
  const roleAction = useSelector((state) => state.auth.role);
  const role = roleAction.payload;

  // if (role === "admin") {
  //   console.log("Halaman admin");
  // } else if (role === "user") {
  //   console.log("Halaman user");
  // } else {
  //   console.log("Halaman lain atau role belum terisi");
  // }

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="bg-white sm:hidden lg:block lg:w-[280px] lg:h-screen lg:fixed z-[999]">
      <div className="flex flex-col justify-between h-full">
        <div className="overflow-y-auto">
          {/* Title Sidebar */}
          <div className=" p-5 lg:flex lg:gap-x-3">
            <img
              src={require("../../assets/image/logo.png")}
              className="lg:w-[24px]"
              alt=""
            />
            <h6 className="uppercase text-[#5051F9] font-bold">
              octom <span className="text-[#1DA7FF]">warehouse.</span>
            </h6>
          </div>

          <ItemSidebar role={role} />
        </div>

        <div className="px-3 cursor-pointer">
          <button
            onClick={handleLogout}
            className="lg:flex lg:items-center lg:gap-x-3 lg:py-5 lg:px-2 "
          >
            <MdIcons.MdOutlineLogout className="lg:text-[20px] text-[#9A9FCD]" />
            <p className="lg:text-[16px] text-[#9A9FCD]">Logout</p>
          </button>
        </div>
      </div>
      {/* <h1>Hello World Sidebar</h1> */}
    </div>
  );
};

export default Sidebar;
