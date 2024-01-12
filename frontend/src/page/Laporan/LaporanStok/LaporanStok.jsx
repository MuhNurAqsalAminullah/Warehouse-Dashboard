import React from "react";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import TableContent from "./TableContent";

const getData = () => [
  {
    id: 1,
    name: "Barang 1",
    harga: "10000",
    tgl_masuk: "01/06/2022",
    tgl_keluar: "20/06/2022",
    jumlah_stok: "100",
    produsen: "Pt ada ada ji itu",
  },
  {
    id: 2,
    name: "Barang 2",
    harga: "10000",
    tgl_masuk: "01/06/2022",
    tgl_keluar: "20/06/2022",
    jumlah_stok: "120",
    produsen: "Pt ada ada ji itu",
  },
  {
    id: 3,
    name: "Barang 3",
    harga: "10000",
    tgl_masuk: "01/06/2022",
    tgl_keluar: "20/06/2022",
    jumlah_stok: "300",
    produsen: "Pt ada ada ji itu",
  },
  {
    id: 4,
    name: "Barang 4",
    harga: "10000",
    tgl_masuk: "01/06/2022",
    tgl_keluar: "20/06/2022",
    jumlah_stok: "104",
    produsen: "Pt ada ada ji itu",
  },
  {
    id: 5,
    name: "Barang 5",
    harga: "10000",
    tgl_masuk: "01/06/2022",
    tgl_keluar: "20/06/2022",
    jumlah_stok: "155",
    produsen: "Pt ada ada ji itu",
  },
  {
    id: 6,
    name: "Barang 6",
    harga: "10000",
    tgl_masuk: "01/06/2022",
    tgl_keluar: "20/06/2022",
    jumlah_stok: "155",
    produsen: "Pt ada ada ji itu",
  },
  {
    id: 7,
    name: "Barang 7",
    harga: "10000",
    tgl_masuk: "01/06/2022",
    tgl_keluar: "20/06/2022",
    jumlah_stok: "175",
    produsen: "Pt ada ada ji itu",
  },
  {
    id: 8,
    name: "Barang 8",
    harga: "10000",
    tgl_masuk: "01/06/2022",
    tgl_keluar: "20/06/2022",
    jumlah_stok: "158",
    produsen: "Pt ada ada ji itu",
  },
  {
    id: 9,
    name: "Barang 9",
    harga: "10000",
    tgl_masuk: "01/06/2022",
    tgl_keluar: "20/06/2022",
    jumlah_stok: "95",
    produsen: "Pt ada ada ji itu",
  },
  {
    id: 10,
    name: "Barang 10",
    harga: "10000",
    tgl_masuk: "01/06/2022",
    tgl_keluar: "20/06/2022",
    jumlah_stok: "100",
    produsen: "Pt ada ada ji itu",
  },
];

const LaporanStok = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Jumlah Stok",
        accessor: "jumlah_stok",
      },
      {
        Header: "Produsen",
        accessor: "produsen",
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

  const data = React.useMemo(() => getData(), []);
  return (
    <div>
      <div className="sm:px-5 sm:pt-24 lg:pl-[300px] md:pt-28 sm:w-screen">
        <div>
          <div className="sm:flex sm:items-center sm:gap-x-3">
            {/* <TbIcons.TbPackage className="text-[25px] text-[#5051F9]" /> */}
            <h1 className="text-2xl font-bold text-[#5051F9]">
              Laporan Stok Barang
            </h1>
          </div>
          <p className="text-[#9A9FCD] sm:text-xs md:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div className=" bg-white shadow-md rounded-md mt-5 mb-5">
          <div className="p-5 border-b-2 border-[#9A9FCD]/[.3]">
            <h2 className="text-lg text-[#9A9FCD]">Data List Stok Barang</h2>
          </div>

          <div>
            <TableContent columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaporanStok;
