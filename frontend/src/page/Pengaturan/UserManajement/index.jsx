import React from "react";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import TableContent from "./TableContent";

const getData = () => [
  {
    id: 1,
    nickname: "Jhon Administrator",
    name: "Jhon Safitra",
    email: "administrator@gmail.com",
    role: "administrator",
    no_hp: "081222888945",
    alamat: "jl. apa saja disni",
  },
  {
    id: 2,
    nickname: "Zayd Kepala Gudang",
    name: "Zayd Robin",
    email: "kepala_gudang@gmail.com",
    role: "kepala gudang",
    no_hp: "081295889545",
    alamat: "jl. apa saja disni",
  },
  {
    id: 3,
    nickname: "Radin Admin 1",
    name: "Radin samsul",
    email: "admin1@gmail.com",
    role: "admin",
    no_hp: "081223958123",
    alamat: "jl. apa saja disni",
  },
  {
    id: 4,
    nickname: "Denis Admin 2",
    name: "Denis Firmansa",
    email: "admin2@gmail.com",
    role: "admin",
    no_hp: "081221288698",
    alamat: "jl. apa saja disni",
  },
  {
    id: 5,
    nickname: "Citra Admin 3",
    name: "Citra Pelangi",
    email: "admin3@gmail.com",
    role: "admin",
    no_hp: "084522881235",
    alamat: "jl. apa saja disni",
  },
  {
    id: 6,
    nickname: "Zetton Admin 4",
    name: "Ridwan Zetton",
    email: "admin4@gmail.com",
    role: "admin",
    no_hp: "081961728945",
    alamat: "jl. apa saja disni",
  },
];

const UserManajement = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "id",
      },
      {
        Header: "Nickname",
        accessor: "nickname",
      },
      {
        Header: "name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Role",
        accessor: "role",
      },
      {
        Header: "No. HP",
        accessor: "no_hp",
      },
      {
        Header: "Alamat",
        accessor: "alamat",
      },
      {
        Header: "Act",
        Cell: (prop) => (
          <div className="flex justify-center sm:gap-x-2">
            <BiIcons.BiMessageAltDetail className="text-[18px] text-green-500" />
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
              User Manajement
            </h1>
          </div>
          <p className="text-[#9A9FCD] sm:text-xs md:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div className=" bg-white shadow-md rounded-md mt-5 mb-5">
          <div className="p-5 border-b-2 border-[#9A9FCD]/[.3]">
            <h2 className="text-lg text-[#9A9FCD]">Data List User</h2>
          </div>

          <div>
            <TableContent columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManajement;
