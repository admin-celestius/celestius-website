//To Register for the Tech Event
import React from "react";
import validateRegistration from "@/hooks/EventHooks/validateRegistration";
const  EventRegistrationForm=()=> {
  return (
    <main className="flex items-center justify-center min-h-[90vh] bg-[#d8bb96] px-4">
      <div className="w-full max-w-md bg-[#f2e6d8] rounded-xl p-6 shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#2d1b0e] mb-6">
          Register for ByteBlaze
        </h1>
        <form className="flex flex-col space-y-4" onSubmit={async()=>await validateRegistration()}>
          <div>
            <label className="block mb-1 text-[#2d1b0e]">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-[#c2a476] focus:outline-none focus:ring-2 focus:ring-[#a6825b] bg-[#f9f4ee]"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-[#2d1b0e]">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg border border-[#c2a476] focus:outline-none focus:ring-2 focus:ring-[#a6825b] bg-[#f9f4ee]"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-[#2d1b0e]">College/Department/Year</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-[#c2a476] focus:outline-none focus:ring-2 focus:ring-[#a6825b] bg-[#f9f4ee]"
              placeholder="Your College & Year"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-[#2d1b0e]">Event</label>
            <select
              className="w-full px-4 py-2 rounded-lg border border-[#c2a476] focus:outline-none focus:ring-2 focus:ring-[#a6825b] bg-[#f9f4ee]"
              required
            >
              <option value="">Select an Event</option>
              <option value="techtrivia">Tech Trivia</option>
              <option value="uidesignchallenge">UI/UX Design Challenge</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#c2a476] text-[#2d1b0e] font-semibold rounded-lg hover:bg-[#a6825b] transition-colors"
          >
            Register Now
          </button>
        </form>
      </div>
    </main>
  );
}
export default EventRegistrationForm;
