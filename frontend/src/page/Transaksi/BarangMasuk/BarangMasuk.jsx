import React, { useEffect, useState } from "react";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import TableContent from "./TableContent";
import CardAdd from "../../../components/card/BarangMasuk/CardAdd";
import CardEdit from "../../../components/card/BarangMasuk/CardEdit";
import { useDispatch, useSelector } from "react-redux";
import { getAllBarangMasukAsync } from "../../../features/item/itemThunks";
import moment from "moment/moment";

const BarangMasuk = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.barangMasuk.list);

  useEffect(() => {
    dispatch(getAllBarangMasukAsync());
  }, [dispatch]);

  const [add, setAdd] = useState();
  const [edit, setEdit] = useState();

  const handleAdd = () => {
    setAdd(!add);
  };

  const handleEdit = () => {
    setEdit(!edit);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        id: "row",
        Cell: ({ row, flatRows }) => {
          return flatRows.indexOf(row) + 1;
        },
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Tanggal Masuk",
        accessor: (d) => {
          return moment(d.createdAt).format("L");
        },
      },
      {
        Header: "Jumlah Stok",
        accessor: "jumlah_stok_masuk",
      },
      {
        Header: "Act",
        Cell: (prop) => (
          <div className="flex justify-center sm:gap-x-2 md:gap-x-5">
            {/* <FiIcons.FiEdit
              onClick={handleEdit}
              className="text-[18px] text-green-500 cursor-pointer"
            /> */}
            <AiIcons.AiOutlineDelete className="text-[18px] text-red-500 cursor-pointer" />
          </div>
        ),
      },
    ],
    []
  );

  return (
    <div>
      <div className="sm:px-5 sm:pt-24 lg:pl-[300px] md:pt-28 sm:w-screen">
        <div>
          <div className="sm:flex sm:items-center sm:gap-x-3">
            {/* <TbIcons.TbPackage className="text-[25px] text-[#5051F9]" /> */}
            <h1 className="text-2xl font-bold text-[#5051F9]">Barang Masuk</h1>
          </div>
          <p className="text-[#9A9FCD] sm:text-xs md:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div className=" bg-white shadow-md rounded-md mt-5 mb-5">
          <div className="p-5 border-b-2 border-[#9A9FCD]/[.3]">
            <h2 className="text-lg text-[#9A9FCD]">Data List Barang Masuk</h2>
          </div>

          <div>
            <TableContent handleAdd={handleAdd} columns={columns} data={data} />
          </div>
        </div>
      </div>
      {add ? <CardAdd handleAdd={handleAdd} /> : null}
      {edit ? <CardEdit handleEdit={handleEdit} /> : null}
    </div>
  );
};

export default BarangMasuk;
