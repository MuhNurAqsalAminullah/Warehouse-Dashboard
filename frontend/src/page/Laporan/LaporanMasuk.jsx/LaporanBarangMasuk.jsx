import React, { useEffect } from "react";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import TableContent from "./TableContent";
import { useDispatch, useSelector } from "react-redux";
import { getAllBarangMasukAsync } from "../../../features/item/itemThunks";
import moment from "moment";

// const getData = () => [
//   {
//     id: 1,
//     name: "Barang 1",
//     produsen: "PT Lorem Ipsum",
//     harga: "10000",
//     tgl_masuk: "01/06/2022",
//     tgl_keluar: "20/06/2022",
//     jumlah_stok: "100",
//   },
//   {
//     id: 2,
//     name: "Barang 2",
//     produsen: "PT Lorem Ipsum",
//     harga: "10000",
//     tgl_masuk: "01/06/2022",
//     tgl_keluar: "20/06/2022",
//     jumlah_stok: "120",
//   },
//   {
//     id: 3,
//     name: "Barang 3",
//     produsen: "PT Lorem Ipsum",
//     harga: "10000",
//     tgl_masuk: "01/06/2022",
//     tgl_keluar: "20/06/2022",
//     jumlah_stok: "300",
//   },
//   {
//     id: 4,
//     name: "Barang 4",
//     produsen: "PT Lorem Ipsum",
//     harga: "10000",
//     tgl_masuk: "01/06/2022",
//     tgl_keluar: "20/06/2022",
//     jumlah_stok: "104",
//   },
//   {
//     id: 5,
//     name: "Barang 5",
//     produsen: "PT Lorem Ipsum",
//     harga: "10000",
//     tgl_masuk: "01/06/2022",
//     tgl_keluar: "20/06/2022",
//     jumlah_stok: "155",
//   },
//   {
//     id: 6,
//     name: "Barang 6",
//     produsen: "PT Lorem Ipsum",
//     harga: "10000",
//     tgl_masuk: "01/06/2022",
//     tgl_keluar: "20/06/2022",
//     jumlah_stok: "155",
//   },
//   {
//     id: 7,
//     name: "Barang 7",
//     produsen: "PT Lorem Ipsum",
//     harga: "10000",
//     tgl_masuk: "01/06/2022",
//     tgl_keluar: "20/06/2022",
//     jumlah_stok: "175",
//   },
//   {
//     id: 8,
//     name: "Barang 8",
//     produsen: "PT Lorem Ipsum",
//     harga: "10000",
//     tgl_masuk: "01/06/2022",
//     tgl_keluar: "20/06/2022",
//     jumlah_stok: "158",
//   },
//   {
//     id: 9,
//     name: "Barang 9",
//     produsen: "PT Lorem Ipsum",
//     harga: "10000",
//     tgl_masuk: "01/06/2022",
//     tgl_keluar: "20/06/2022",
//     jumlah_stok: "95",
//   },
//   {
//     id: 10,
//     name: "Barang 10",
//     produsen: "PT Lorem Ipsum",
//     harga: "10000",
//     tgl_masuk: "01/06/2022",
//     tgl_keluar: "20/06/2022",
//     jumlah_stok: "100",
//   },
//   {
//     id: 11,
//     name: "Barang 11",
//     produsen: "PT Lorem Ipsum",
//     harga: "10000",
//     tgl_masuk: "01/06/2022",
//     tgl_keluar: "20/06/2022",
//     jumlah_stok: "111",
//   },
//   {
//     id: 12,
//     name: "Barang 12",
//     produsen: "PT Lorem Ipsum",
//     harga: "10000",
//     tgl_masuk: "01/06/2022",
//     tgl_keluar: "20/06/2022",
//     jumlah_stok: "25",
//   },
//   {
//     id: 13,
//     name: "Barang 13",
//     produsen: "PT Lorem Ipsum",
//     harga: "10000",
//     tgl_masuk: "01/06/2022",
//     tgl_keluar: "20/06/2022",
//     jumlah_stok: "15",
//   },
//   {
//     id: 14,
//     name: "Barang 14",
//     produsen: "PT Lorem Ipsum",
//     harga: "10000",
//     tgl_masuk: "01/06/2022",
//     tgl_keluar: "20/06/2022",
//     jumlah_stok: "144",
//   },
//   {
//     id: 15,
//     name: "Barang 15",
//     produsen: "PT Lorem Ipsum",
//     harga: "10000",
//     tgl_masuk: "01/06/2022",
//     tgl_keluar: "20/06/2022",
//     jumlah_stok: "19",
//   },
// ];

const LaporanBarangMasuk = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.barangMasuk.list);

  useEffect(() => {
    dispatch(getAllBarangMasukAsync());
  }, [dispatch]);

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
      // {
      //   Header: "Produsen",
      //   accessor: "produsen",
      // },
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
            <FiIcons.FiEdit className="text-[18px] text-green-500" />
            <AiIcons.AiOutlineDelete className="text-[18px] text-red-500" />
          </div>
        ),
      },
    ],
    []
  );

  // const data = React.useMemo(() => getData(), []);
  return (
    <div>
      <div className="sm:px-5 sm:pt-24 lg:pl-[300px] md:pt-28 sm:w-screen">
        <div>
          <div className="sm:flex sm:items-center sm:gap-x-3">
            {/* <TbIcons.TbPackage className="text-[25px] text-[#5051F9]" /> */}
            <h1 className="text-2xl font-bold text-[#5051F9]">
              Laporan Barang Masuk
            </h1>
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
            <TableContent columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaporanBarangMasuk;
