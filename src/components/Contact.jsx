import React from "react";

const Contact = () => {
  return (
    <section id="Contact" className="w-full bg-slate-200 ">
      <div className="container mx-auto min-h-screen p-8 grid grid-cols-12">
        <div className="bg-red-400 col-span-5">Contact Us</div>
        <div className="bg-indigo-50 col-span-7 p-8">
          <form className="space-y-3">
            <div className="flex flex-col">
              <label htmlFor="fname">Full Name</label>
              <input
                type="text"
                name="fname"
                id="fname"
                className="form-control"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                className="form-control"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                className="form-control"
              ></textarea>
            </div>
            <div>
              <button type="submit" className="btn-primary">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
