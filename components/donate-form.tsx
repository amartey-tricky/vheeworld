export default function DonateForm() {
  return (
    <form className="mx-auto max-w-xl mt-20 md:mt-16">
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-1 text-slate-700">
        {/* first name input field */}
        <div>
          <label
            htmlFor="firstName"
            className="text-md font-semibold leading-6"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-2 w-full rounded-lg bg-gray-50 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
            placeholder="First Name"
            autoFocus
          />
        </div>
        {/* last name input field */}
        <div>
          <label htmlFor="lastName" className="text-md font-semibold leading-6">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
            placeholder="Last Name"
          />
        </div>
        {/* email input field */}
        <div>
          <label
            htmlFor="email"
            className="block text-md font-semibold leading-6"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
            placeholder="name@email.com"
            required
          />
        </div>
        {/* phone number input field */}
        <div>
          <label
            htmlFor="phoneNumber"
            className="text-md font-semibold leading-6"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            minLength={10}
            maxLength={13}
            size={13}
            placeholder="+233 12 345 6789"
            className="mt-2 w-full bg-gray-50 rounded-lg text-sm border-gray-300 text-gray-900 p-2.5 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        {/* amount input field */}
        <div>
          <label htmlFor="amount" className="text-md font-semibold leading-6">
            Amount to Donate
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            className="mt-2 w-full bg-gray-50 rounded-lg text-sm border-gray-300 text-gray-900 p-2.5 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        {/* payment button */}
        <button className="bg-blue-500 p-3 rounded-md shadow-sm text-gray-200 border-0 hover:bg-blue-400 hover:text-gray-500 font-semibold text-md">
          Donate
        </button>
      </div>
    </form>
  );
}