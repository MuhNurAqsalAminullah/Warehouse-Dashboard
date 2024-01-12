import React, { Fragment } from "react";
import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  usePagination,
} from "react-table";

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    // <span>
    //   Search:{" "}
    <div className="sm:ml-5 sm:mb-5 md:mb-0">
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`Search data...`}
        className="outline-none border-b-2 border-[#848484]/[.3] sm:py-2 sm:pl-2"
      />
    </div>
    // </span>
  );
}

const TableContent = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,

    page,

    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,

    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, usePagination);
  return (
    <Fragment>
      <div className="sm:my-5 md:flex md:justify-between md:items-end">
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        {/* <button className="bg-[#5051F9] text-white py-3 px-5 rounded-md sm:ml-5 md:mr-5">
          Tambah Barang
        </button> */}
      </div>

      <div className="overflow-x-auto">
        <table
          {...getTableProps()}
          border="1"
          className="sm:w-full whitespace-nowrap"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="sm:py-3 bg-[#848484]/[.1]  text-[#848484] sm:px-5 md:px-0"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="text-center">
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="sm:py-3  text-[#848484]/[.8]"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="pagination sm:py-3 sm:flex sm:justify-between sm:items-center sm:px-5 md:py-5 sm:mt-5 md:mt-2">
        <div className="sm:flex sm:flex-col md:flex-row sm:gap-y-2 md:gap-x-5">
          <span className="text-[#9A9FCD]">
            Page {/* <strong> */}
            {state.pageIndex + 1} of {pageOptions.length}
            {/* </strong>{" "} */}
          </span>
          <select
            className="outline-none text-[#9A9FCD]"
            value={state.pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 20].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            className="bg-[#5051F9] text-white sm:w-[35px] sm:h-[35px] shadow-md rounded-md"
          >
            {"<<"}
          </button>{" "}
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="bg-[#5051F9] text-white sm:w-[35px] sm:h-[35px] shadow-md rounded-md"
          >
            {"<"}
          </button>{" "}
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="bg-[#5051F9] text-white sm:w-[35px] sm:h-[35px] shadow-md rounded-md"
          >
            {">"}
          </button>{" "}
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
            className="bg-[#5051F9] text-white sm:w-[35px] sm:h-[35px] shadow-md rounded-md"
          >
            {">>"}
          </button>{" "}
        </div>
      </div>
    </Fragment>
  );
};

export default TableContent;
