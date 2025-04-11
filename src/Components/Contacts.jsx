import React from "react";

const ContactsPage = () => {
  return (
    <>
      <div className=" md:relative mt-15 h-screen object-contain bg-[url(public/assets/backgroundimage.webp)]  ">
        <div className=" grid grid-cols-1 rounded-2xl shadow-2xl shadow-white/50 md:absolute top-23 left-70  md:flex  md:justify-center md:items-center">
          <div className=" hidden md:flex  justify-center items-end md:w-96 md:h-96 border-white/70  md:rounded-tl-2xl md:rounded-bl-2xl border-2  border-r-0 ">
            <img
              src="public/assets/boyImage.png"
              alt="boy-Image"
              className="w-[100%] object-cover shadow-2xl  "
            />
          </div>
          <div className=" w-[100%]  md:w-96 md:h-96 bg-black/30  md:rounded-tr-2xl rounded-br-2xl border-2 border-white/70 border-l-0 ">
            <form className=" grid grid-cols-1 p-2  md:grid md:grid-cols-1 gap-5 md:p-5 text-white ">
              <input
                type="text"
                placeholder="Fist Name"
                name="text"
                className="border-2 border-white/30 outline-0 rounded text-xl pl-3 p-1"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="text"
                className="border-2 border-white/30 outline-0 rounded text-xl pl-3 p-1"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="border-2 border-white/30 outline-0 rounded text-xl pl-3 p-1"
              />
              <input
                type="number"
                placeholder="Phone Number"
                name="number"
                className="border-2 border-white/30 outline-0 rounded text-xl pl-3 p-1"
              />
              {/* <input
              type="message"
              placeholder="Message"
              name="message"
              className="border-2 border-white/30 outline-0 rounded text-xl pl-3 p-1"
            /> */}
              <textarea name="message" className="border rounded">
                Message
              </textarea>
              <button className="border-2 border-white/10 font-serif text-2xl rounded-xl transition-all duration-500 ease-in-out bg-blue-500/80 active:bg-transparent">
                Sed Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactsPage;
