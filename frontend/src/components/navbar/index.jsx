import React, { useState } from "react";
import * as IoIcons from "react-icons/io";
import * as RxIcons from "react-icons/rx";
import * as TbIcons from "react-icons/tb";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

// item sidebar with role login
const ItemNavbar = ({ role }) => {
  if (role === "admin") {
    return (
      <div>
        <div className="sm:flex sm:items-center sm:gap-x-3 bg-[#5051F9] sm:py-3 sm:px-2 sm:my-2 rounded-md">
          <RxIcons.RxDashboard className="sm:text-[20px] text-white" />
          <p className="sm:text-[16px] text-white">Dashboard</p>
        </div>

        <div>
          <p className="text-[#5F6388] py-3 mt-3">Master</p>
          <ul>
            <li className="sm:flex sm:items-center sm:gap-x-3 sm:py-3 sm:px-2">
              <TbIcons.TbPackage className="sm:text-[20px] text-[#9A9FCD]" />
              <p className="sm:text-[16px] text-[#9A9FCD]">Data Barang</p>
            </li>
            <li className="sm:flex sm:items-center sm:gap-x-3 sm:py-3 sm:px-2">
              <MdIcons.MdOutlineSell className="sm:text-[20px] text-[#9A9FCD]" />
              <p className="sm:text-[16px] text-[#9A9FCD]">Barang Satuan</p>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[#5F6388] py-3 mt-3">Transaksi</p>
          <ul>
            <li className="sm:flex sm:items-center sm:gap-x-3 sm:py-3 sm:px-2">
              <TbIcons.TbTruckLoading className="sm:text-[20px] text-[#9A9FCD]" />
              <p className="sm:text-[16px] text-[#9A9FCD]">Barang Masuk</p>
            </li>
            <li className="sm:flex sm:items-center sm:gap-x-3 sm:py-3 sm:px-2">
              <TbIcons.TbTruckDelivery className="sm:text-[20px] text-[#9A9FCD]" />
              <p className="sm:text-[16px] text-[#9A9FCD]">Barang Keluar</p>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[#5F6388] py-3 mt-3">Laporan</p>
          <ul>
            <li className="sm:flex sm:items-center sm:gap-x-3 sm:py-3 sm:px-2">
              <TbIcons.TbListCheck className="sm:text-[20px] text-[#9A9FCD]" />
              <p className="sm:text-[16px] text-[#9A9FCD]">Laporan Stok</p>
            </li>
            <li className="sm:flex sm:items-center sm:gap-x-3 sm:py-3 sm:px-2">
              <FaIcons.FaFileImport className="sm:text-[20px] text-[#9A9FCD]" />
              <p className="sm:text-[16px] text-[#9A9FCD]">
                Laporan Barang Masuk
              </p>
            </li>
            <li className="sm:flex sm:items-center sm:gap-x-3 sm:py-3 sm:px-2">
              <FaIcons.FaFileExport className="sm:text-[20px] text-[#9A9FCD]" />
              <p className="sm:text-[16px] text-[#9A9FCD]">
                Laporan Barang Keluar
              </p>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[#5F6388] py-3 mt-3">Pengaturan</p>
          <ul>
            <li className="sm:flex sm:items-center sm:gap-x-3 sm:py-3 sm:px-2">
              <FaIcons.FaUserCog className="sm:text-[20px] text-[#9A9FCD]" />
              <p className="sm:text-[16px] text-[#9A9FCD]">User Manajemen</p>
            </li>
            <li className="sm:flex sm:items-center sm:gap-x-3 sm:py-3 sm:px-2">
              <FaIcons.FaRegUser className="sm:text-[20px] text-[#9A9FCD]" />
              <p className="sm:text-[16px] text-[#9A9FCD]">Profile</p>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="sm:flex sm:items-center sm:gap-x-3 bg-[#5051F9] sm:py-3 sm:px-2 sm:my-2 rounded-md">
          <RxIcons.RxDashboard className="sm:text-[20px] text-white" />
          <p className="sm:text-[16px] text-white">Dashboard</p>
        </div>

        <div>
          <p className="text-[#5F6388] py-3 mt-3">Master</p>
          <ul>
            <li className="sm:flex sm:items-center sm:gap-x-3 sm:py-3 sm:px-2">
              <TbIcons.TbPackage className="sm:text-[20px] text-[#9A9FCD]" />
              <p className="sm:text-[16px] text-[#9A9FCD]">Data Barang</p>
            </li>
            <li className="sm:flex sm:items-center sm:gap-x-3 sm:py-3 sm:px-2">
              <MdIcons.MdOutlineSell className="sm:text-[20px] text-[#9A9FCD]" />
              <p className="sm:text-[16px] text-[#9A9FCD]">Barang Satuan</p>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[#5F6388] py-3 mt-3">Transaksi</p>
          <ul>
            <li className="sm:flex sm:items-center sm:gap-x-3 sm:py-3 sm:px-2">
              <TbIcons.TbTruckLoading className="sm:text-[20px] text-[#9A9FCD]" />
              <p className="sm:text-[16px] text-[#9A9FCD]">Barang Masuk</p>
            </li>
            <li className="sm:flex sm:items-center sm:gap-x-3 sm:py-3 sm:px-2">
              <TbIcons.TbTruckDelivery className="sm:text-[20px] text-[#9A9FCD]" />
              <p className="sm:text-[16px] text-[#9A9FCD]">Barang Keluar</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

const Navbar = () => {
  const [burger, setBurger] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const role = useSelector((state) => state.auth.role);
  const roleAction = useSelector((state) => state.auth.role);
  const role = roleAction.payload;

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/login");
  };

  const burgerToggle = () => {
    setBurger(!burger);
  };
  return (
    <div>
      <div className="sm:fixed sm:w-full lg:right-[20px] lg:pl-[320px] sm:z-[555]">
        <div className="bg-white sm:flex sm:justify-between sm:items-center sm:py-5 sm:px-5 lg:py-3 lg:mt-5 rounded-md lg:shadow-md">
          <div className="md:flex md:items-center md:gap-x-3 ">
            <img
              src={require("../../assets/image/logo.png")}
              className="lg:hidden"
              alt=""
            />
            <h6 className="sm:hidden md:block lg:hidden uppercase text-[#5051F9] font-bold">
              octom <span className="text-[#1DA7FF]">warehouse.</span>
            </h6>
          </div>
          <div className="sm:flex sm:items-center sm:gap-x-3">
            <IoIcons.IoMdNotificationsOutline className="sm:text-[30px] lg:text-[25px] text-[#5051F9]" />
            <IoIcons.IoMdMenu
              className="sm:text-[30px] text-[#5051F9] lg:hidden"
              onClick={burgerToggle}
            />
            <div>
              <img
                src={require("../../assets/image/user.jpeg")}
                className="sm:hidden lg:block lg:w-[30px] rounded-full border-2 border-[#5051F9]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          burger
            ? "pt-20 px-5 h-screen sm:w-[80%] md:w-1/2 fixed bg-white overflow-y-auto sm:translate-x-0 sm:ease-in sm:duration-300 z-[444]"
            : "pt-20 px-5 h-screen sm:w-[80%] md:w-1/2 fixed bg-white overflow-y-auto sm:translate-x-[-100%] sm:ease-in sm:duration-300 z-[98]"
        }
      >
        <ItemNavbar role={role} />
        {/* <div>
          <div className="sm:flex sm:items-center sm:gap-x-3 bg-[#5051F9] sm:py-3 sm:px-2 sm:my-2 rounded-md">
            <RxIcons.RxDashboard className="sm:text-[20px] text-white" />
            <p className="sm:text-[16px] text-white">Dashboard</p>
          </div>

          <div>
            <p className="text-[#5F6388] py-3 mt-3">Master</p>
            <ul>
              <li className="sm:flex sm:items-center sm:gap-x-3 sm:py-3 sm:px-2">
                <TbIcons.TbPackage className="sm:text-[20px] text-[#9A9FCD]" />
                <p className="sm:text-[16px] text-[#9A9FCD]">Data Barang</p>
              </li>
              <li className="sm:flex sm:items-center sm:gap-x-3 sm:py-3 sm:px-2">
                <MdIcons.MdOutlineSell className="sm:text-[20px] text-[#9A9FCD]" />
                <p className="sm:text-[16px] text-[#9A9FCD]">Barang Satuan</p>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[#5F6388] py-3 mt-3">Transaksi</p>
            <ul>
              <li className="sm:flex sm:items-center sm:gap-x-3 sm:py-3 sm:px-2">
                <TbIcons.TbTruckLoading className="sm:text-[20px] text-[#9A9FCD]" />
                <p className="sm:text-[16px] text-[#9A9FCD]">Barang Masuk</p>
              </li>
              <li className="sm:flex sm:items-center sm:gap-x-3 sm:py-3 sm:px-2">
                <TbIcons.TbTruckDelivery className="sm:text-[20px] text-[#9A9FCD]" />
                <p className="sm:text-[16px] text-[#9A9FCD]">Barang Keluar</p>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[#5F6388] py-3 mt-3">Laporan</p>
            <ul>
              <li className="sm:flex sm:items-center sm:gap-x-3 sm:py-3 sm:px-2">
                <TbIcons.TbListCheck className="sm:text-[20px] text-[#9A9FCD]" />
                <p className="sm:text-[16px] text-[#9A9FCD]">Laporan Stok</p>
              </li>
              <li className="sm:flex sm:items-center sm:gap-x-3 sm:py-3 sm:px-2">
                <FaIcons.FaFileImport className="sm:text-[20px] text-[#9A9FCD]" />
                <p className="sm:text-[16px] text-[#9A9FCD]">
                  Laporan Barang Masuk
                </p>
              </li>
              <li className="sm:flex sm:items-center sm:gap-x-3 sm:py-3 sm:px-2">
                <FaIcons.FaFileExport className="sm:text-[20px] text-[#9A9FCD]" />
                <p className="sm:text-[16px] text-[#9A9FCD]">
                  Laporan Barang Keluar
                </p>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[#5F6388] py-3 mt-3">Pengaturan</p>
            <ul>
              <li className="sm:flex sm:items-center sm:gap-x-3 sm:py-3 sm:px-2">
                <FaIcons.FaUserCog className="sm:text-[20px] text-[#9A9FCD]" />
                <p className="sm:text-[16px] text-[#9A9FCD]">User Manajemen</p>
              </li>
              <li className="sm:flex sm:items-center sm:gap-x-3 sm:py-3 sm:px-2">
                <FaIcons.FaRegUser className="sm:text-[20px] text-[#9A9FCD]" />
                <p className="sm:text-[16px] text-[#9A9FCD]">Profile</p>
              </li>
            </ul>
          </div>
        </div> */}

        <button
          onClick={handleLogout}
          className="sm:flex sm:items-center sm:gap-x-3 sm:py-5 sm:px-2"
        >
          <MdIcons.MdOutlineLogout className="sm:text-[20px] text-[#9A9FCD]" />
          <p className="sm:text-[16px] text-[#9A9FCD]">Logout</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
