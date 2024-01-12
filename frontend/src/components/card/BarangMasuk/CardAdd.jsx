import React, { useEffect, useState } from "react";
import * as AiIcons from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  createTambahStokBarangMasukAsync,
  getAllItemAsync,
} from "../../../features/item/itemThunks";

// Barang Masuk
const CardAdd = ({ handleAdd }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [jumlah_stok_masuk, setJumlah_stok_masuk] = useState("");

  const handleAddStok = (e, id) => {
    e.preventDefault();

    const newStok = {
      name,
      jumlah_stok_masuk,
    };

    dispatch(createTambahStokBarangMasukAsync(newStok));

    setName("");
    setJumlah_stok_masuk("");
  };

  const data = useSelector((state) => state.item.list);

  useEffect(() => {
    dispatch(getAllItemAsync());
  }, [dispatch]);

  return (
    <div className="z-[1010] fixed top-[0] bg-black/[0.5] w-screen h-screen sm:flex sm:justify-center items-center">
      <div className="bg-white sm:w-[90%] md:w-[70%] rounded-md">
        <div className="sm:py-5 border-b border-[#9A9FCD]/[.3] px-5 flex justify-between items-center">
          <h1 className="uppercase font-semibold text-[#9A9FCD]">
            Tambahkan barang masuk
          </h1>
          <AiIcons.AiOutlineCloseCircle
            onClick={handleAdd}
            className="sm:text-[24px] md:text-[28px] text-[#5051F9] cursor-pointer"
          />
        </div>

        <form onSubmit={handleAddStok} className="p-5">
          <div className="lg:flex lg:justify-between lg:items-center lg:gap-x-3">
            <div className="lg:w-full">
              <label className="text-[#9A9FCD]">Nama</label> <br />
              <input
                type="text"
                placeholder="Enter nama produk"
                onChange={(e) => setName(e.target.value)}
                list="barang"
                className="border border-[#9A9FCD]/[.3] w-full sm:py-2 sm:pl-2 rounded-md placeholder:text-[#9A9FCD]/[.5] outline-none"
              />
              <datalist id="barang">
                {data.map((option) => (
                  <option>{option.name}</option>
                ))}
              </datalist>
            </div>
            <br className="lg:hidden" />
            <div className="lg:w-full">
              <label className="text-[#9A9FCD]">Jumlah Stok Masuk</label> <br />
              <input
                type="number"
                placeholder="Enter nama produsen"
                onChange={(e) => setJumlah_stok_masuk(e.target.value)}
                className="border border-[#9A9FCD]/[.3] w-full sm:py-2 sm:pl-2 rounded-md placeholder:text-[#9A9FCD]/[.5] outline-none"
              />
            </div>
          </div>
          <div className="flex justify-end mt-5">
            <button
              type="submit"
              className="bg-[#5051F9] text-white py-2 px-10 rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardAdd;
