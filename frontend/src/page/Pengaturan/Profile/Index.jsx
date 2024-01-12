import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="sm:px-5 sm:pt-24 lg:pl-[300px] md:pt-28 sm:w-screen">
        <div className="sm:flex sm:items-center sm:gap-x-3">
          {/* <TbIcons.TbPackage className="text-[25px] text-[#5051F9]" /> */}
          <h1 className="text-2xl font-bold text-[#5051F9]">Profile</h1>
        </div>
        <p className="text-[#9A9FCD] sm:text-xs md:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>

        <div className="sm:mt-5 lg:flex lg:justify-between">
          <div className="bg-white shadow-md rounded-md flex flex-col items-center sm:py-10 lg:w-[28%] sm:h-fit">
            <div className="bg-[#848484] sm:w-[100px] sm:h-[100px] rounded-full"></div>
            <p className="text-[#9A9FCD] sm:mt-3">Muh Nur Aqsal Aminullah</p>
            <button className="bg-[#5051F9] sm:py-1 sm:px-5 rounded-md text-white sm:mt-5">
              Change Profile
            </button>
            <button className="bg-[#5051F9] sm:py-1 sm:px-5 rounded-md text-white sm:mt-2">
              Change Password
            </button>
          </div>

          <div className="lg:w-[70%]">
            <div className="bg-white shadow-md rounded-md sm:py-10 sm:mt-5 sm:px-5 lg:mt-0">
              <form>
                <div className="lg:flex lg:justify-between lg:items-center lg:gap-x-3 sm:mb-5">
                  <div className="lg:w-full">
                    <label className="text-[#9A9FCD]">Nama Lengkap</label>{" "}
                    <br />
                    <input
                      disabled
                      type="text"
                      placeholder="Muh Nur Aqsal Aminullah"
                      className="border border-[#9A9FCD]/[.3] w-full sm:py-2 sm:pl-2 rounded-md placeholder:text-black/[.5] outline-none"
                    />
                  </div>
                  <br className="lg:hidden" />
                  <div className="lg:w-full">
                    <label className="text-[#9A9FCD]">Jabatan</label> <br />
                    <input
                      disabled
                      type="text"
                      placeholder="Admin"
                      className="border border-[#9A9FCD]/[.3] w-full sm:py-2 sm:pl-2 rounded-md placeholder:text-black/[.5] outline-none"
                    />
                  </div>
                </div>
                <div className="lg:flex lg:justify-between lg:items-center lg:gap-x-3 sm:mb-5">
                  <div className="lg:w-full">
                    <label className="text-[#9A9FCD]">Nomor Handphon</label>{" "}
                    <br />
                    <input
                      disabled
                      type="text"
                      placeholder="081444222111"
                      className="border border-[#9A9FCD]/[.3] w-full sm:py-2 sm:pl-2 rounded-md placeholder:text-black/[.5] outline-none"
                    />
                  </div>
                  <br className="lg:hidden" />
                  <div className="lg:w-full">
                    <label className="text-[#9A9FCD]">Email</label> <br />
                    <input
                      disabled
                      type="email"
                      placeholder="Aqsal3236@gmail.com"
                      className="border border-[#9A9FCD]/[.3] w-full sm:py-2 sm:pl-2 rounded-md placeholder:text-black/[.5] outline-none"
                    />
                  </div>
                </div>
                <div className="lg:flex lg:justify-between lg:items-center lg:gap-x-3 sm:mb-5">
                  <div className="lg:w-full">
                    <label className="text-[#9A9FCD]">Jenis Pekerjaan</label>{" "}
                    <br />
                    <input
                      disabled
                      type="text"
                      placeholder="Part Time"
                      className="border border-[#9A9FCD]/[.3] w-full sm:py-2 sm:pl-2 rounded-md placeholder:text-black/[.5] outline-none"
                    />
                  </div>
                  <br className="lg:hidden" />
                  <div className="lg:w-full">
                    <label className="text-[#9A9FCD]">Alamat</label> <br />
                    <input
                      disabled
                      type="text"
                      placeholder="Jl. H Sana Sini 01"
                      className="border border-[#9A9FCD]/[.3] w-full sm:py-2 sm:pl-2 rounded-md placeholder:text-black/[.5] outline-none"
                    />
                  </div>
                </div>
              </form>
            </div>

            {/* <div className="bg-white shadow-md rounded-md sm:py-10 sm:mt-5 sm:px-5">
              <h1>Hello</h1>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
