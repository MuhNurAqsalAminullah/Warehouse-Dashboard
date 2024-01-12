import React from "react";
import * as AiIcons from "react-icons/ai";

const CardEdit = ({ handleEdit }) => {
  return (
    <div className="z-[1010] fixed top-[0] bg-black/[0.5] w-screen h-screen sm:flex sm:justify-center items-center">
      <div className="bg-white sm:w-[90%] md:w-[70%] rounded-md">
        <div className="sm:py-5 border-b border-[#9A9FCD]/[.3] px-5 flex justify-between items-center">
          <h1 className="uppercase font-semibold text-[#9A9FCD]">
            Edit barang masuk
          </h1>
          <AiIcons.AiOutlineCloseCircle
            onClick={handleEdit}
            className="sm:text-[24px] text-[#5051F9] cursor-pointer"
          />
        </div>

        <form className="p-5">
          <div className="lg:flex lg:justify-between lg:items-center lg:gap-x-3">
            <div className="lg:w-full">
              <label className="text-[#9A9FCD]">Nama</label> <br />
              <input
                type="text"
                placeholder="Enter nama produk"
                className="border border-[#9A9FCD]/[.3] w-full sm:py-2 sm:pl-2 rounded-md placeholder:text-[#9A9FCD]/[.5] outline-none"
              />
            </div>
            <br className="lg:hidden" />
            <div className="lg:w-full">
              <label className="text-[#9A9FCD]">Produsen</label> <br />
              <input
                type="text"
                placeholder="Enter nama produsen"
                className="border border-[#9A9FCD]/[.3] w-full sm:py-2 sm:pl-2 rounded-md placeholder:text-[#9A9FCD]/[.5] outline-none"
              />
            </div>
          </div>
          <br />
          <div className="lg:flex lg:justify-between lg:items-center lg:gap-x-3">
            <div className="lg:w-full">
              <label className="text-[#9A9FCD]">Harga Produk</label> <br />
              <input
                type="text"
                placeholder="Enter harga produk"
                className="border border-[#9A9FCD]/[.3] w-full sm:py-2 sm:pl-2 rounded-md placeholder:text-[#9A9FCD]/[.5] outline-none"
              />
            </div>
            <br className="lg:hidden" />
            <div className="lg:w-full">
              <label className="text-[#9A9FCD]">Tanggal Masuk</label> <br />
              <input
                type="date"
                className="border border-[#9A9FCD]/[.3] w-full sm:py-2 sm:pl-2 rounded-md outline-none"
              />
            </div>
          </div>
          <br />
          <label className="text-[#9A9FCD]">Jumlah Stock</label> <br />
          <input
            type="number"
            placeholder="Enter jumlah stock"
            className="border border-[#9A9FCD]/[.3] sm:w-full lg:w-1/2 sm:py-2 sm:pl-2 rounded-md placeholder:text-[#9A9FCD]/[.5] outline-none"
          />
          <div className="flex justify-end mt-5">
            <button className="bg-[#5051F9] text-white py-2 px-10 rounded-md">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardEdit;
