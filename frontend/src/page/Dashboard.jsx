import React from "react";
import * as RxIcons from "react-icons/rx";
import * as TbIcons from "react-icons/tb";
import * as CiIcons from "react-icons/ci";
import * as FaIcons from "react-icons/fa";

const Dashboard = () => {
  return (
    <div>
      <div className="sm:h-[150px] bg-[#5051F9] sm:w-screen md:h-[200px] md:absolute z-[1]">
        <div className="sm:px-5 sm:pt-24  lg:pl-[300px] md:pt-28 border border-white">
          <div className="sm:flex sm:items-center sm:gap-x-3">
            <RxIcons.RxDashboard className="text-[25px] text-white" />
            <h1 className="text-xl text-white">Dashboard</h1>
          </div>

          <div className="sm:flex sm:flex-col sm:gap-y-3 md:flex-row md:justify-between sm:mt-10 md:mt-5 w-full md:bg-white md:py-5 md:px-14 md:shadow-xl lg:px-20 rounded-md">
            <div className="sm:flex sm:items-center sm:justify-around sm:bg-white sm:rounded sm:shadow-xl sm:py-3 md:shadow-none md:py-0 md:justify-between md:w-[25%] lg:w-[20%]">
              <TbIcons.TbPackage className="text-[#5051F9] text-[30px]" />
              <div>
                <p className="text-[#9A9FCD] text-[16px]">Data Barang</p>
                <p className="text-[#9A9FCD] text-[16px]">10</p>
              </div>
            </div>
            <div className="sm:flex sm:items-center sm:justify-around sm:bg-white sm:rounded sm:shadow-xl sm:py-3 md:shadow-none md:py-0 md:justify-between md:w-[25%] lg:w-[20%]">
              <CiIcons.CiInboxIn className="text-green-500 text-[30px]" />
              <div>
                <p className="text-[#9A9FCD] text-[16px]">Barang Masuk</p>
                <p className="text-[#9A9FCD] text-[16px]">10</p>
              </div>
            </div>
            <div className="sm:flex sm:items-center sm:justify-around sm:bg-white sm:rounded sm:shadow-xl sm:py-3 md:shadow-none md:py-0 md:justify-between md:w-[25%] lg:w-[20%]">
              <CiIcons.CiInboxOut className="text-red-500 text-[30px]" />
              <div>
                <p className="text-[#9A9FCD] text-[16px]">Barang Keluar</p>
                <p className="text-[#9A9FCD] text-[16px]">10</p>
              </div>
            </div>
          </div>

          <div className="sm:flex sm:flex-col sm:gap-y-3 sm:mt-3 md:flex-row md:justify-between md:mt-5 w-full">
            <div className="sm:flex sm:items-center sm:p-2 bg-white shadow-xl md:p-3 rounded-md md:w-[48%]">
              <div className="bg-[#1DA7FF] h-full flex justify-center items-center p-3 rounded-md sm:mr-2 lg:mr-3">
                <TbIcons.TbPackage className="text-white text-[30px]" />
              </div>
              <div>
                <p className="text-[#9A9FCD] text-[16px]">Satuan Barang</p>
                <p className="text-[#9A9FCD] text-[16px]">10</p>
              </div>
            </div>
            <div className="sm:flex sm:items-center sm:p-2 bg-white shadow-xl md:p-3 rounded-md md:w-[48%]">
              <div className="bg-green-500 h-full flex justify-center items-center p-3 rounded-md sm:mr-2 lg:mr-3">
                <FaIcons.FaUserCircle className="text-white text-[30px]" />
              </div>
              <div>
                <p className="text-[#9A9FCD] text-[16px]">Data User</p>
                <p className="text-[#9A9FCD] text-[16px]">10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
