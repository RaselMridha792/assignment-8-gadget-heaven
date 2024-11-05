import {
  MdOutlineAreaChart,
  MdOutlineAppRegistration,
  MdPayments,
} from "react-icons/md";
import { SiRelianceindustrieslimited } from "react-icons/si";
import { GiLifeSupport } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const BecomeSeller = () => {

    const navigate = useNavigate()

    const handleShowModal = () =>{
        document.getElementById("my_modal_1").showModal();
    }
  return (
    <>
      <div className="bg-purple-500 text-center py-40 text-white">
        <h1 className="text-7xl font-bold text-white py-5">
          Become a Gadget Seller
        </h1>
        <p className="text-xl w-2/5 mx-auto">
          Create a Gadget heaven seller account now and reach millions of
          customers!
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="md:w-2/5 mx-auto p-10 flex flex-col gap-5 border rounded-2xl shadow-xl mt-[-100px] bg-white">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Username" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="password" className="grow" value="password" />
          </label>
          <button onClick={handleShowModal} className="btn bg-purple-600 text-white font-bold text-xl">
            sign up now
          </button>
        </div>

        {/* why sell gadget heaven section  */}
        <div className="my-20">
          <h1 className="text-4xl font-bold mb-10">why sell gadget heaven?</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="flex gap-5 items-center">
              <div className="text-7xl text-orange-400">
                <MdOutlineAreaChart />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Reach</h1>
                <p>
                  Millions of customers on Gadget Heaven, Bangladeshs most
                  visited shopping destination
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="text-7xl text-orange-400">
                <MdOutlineAppRegistration />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Free Registration</h1>
                <p>Account registration & listing items for sale is free</p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="text-7xl text-orange-400">
                <SiRelianceindustrieslimited />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Reliable Shipping</h1>
                <p>
                  Fast, reliable and hassle free delivery through Gadget heaven
                  logistic network
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="text-7xl text-orange-400">
                <MdPayments />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Timely Payments</h1>
                <p>
                  Funds are safely deposited directly to your bank account on a
                  weekly basis
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="text-7xl text-orange-400">
                <FaTools />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Marketing Tools</h1>
                <p>
                  Find new customers & grow more with advertising and our whole
                  range of marketing tools
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="text-7xl text-orange-400">
                <GiLifeSupport />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Support&Training</h1>
                <p>
                  Learn all about ecommerce for free and get help with seller
                  support and Gadget heaven University
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* asked question section  */}
        <div className="my-20">
          <h1 className="text-4xl font-bold text-center">
            Frequently Asked Questions
          </h1>

          <div className="py-10 flex flex-col gap-5">
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                How Can I Sell On Gadget Heaven?
              </div>
              <div className="collapse-content">
                <p>
                  To start selling on Gadget Heaven , visit the Gadget Heaven
                  Seller Center and create a new account using your phone
                  number. Complete the sign-up process by verifying your email,
                  adding your pickup address, and uploading the required
                  documents for verification. Once your store is approved, add
                  your first product, and youre ready to sell! You can also
                  customize your store by adding your logo, cover, and banners
                  through the Store Builder tool.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                What Categories Can I Sell on Gadget Heaven ?
              </div>
              <div className="collapse-content">
                <p>
                  With multiple categories on Gadget Heaven —ranging from
                  fashion, lifestyle, digital goods, FMCG, and lifestyle—you’ll
                  find the perfect fit for your products. However, its essential
                  to avoid listing counterfeit, dangerous, or prohibited items
                  and those restricted by law or cultural norms.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                How Much Commission Does Gadget Heaven Charge?
              </div>
              <div className="collapse-content">
                <p>
                  Opening a shop on Gadget Heaven is free! However, a small
                  commission is deducted from each orders payment, with rates
                  varying based on the product category. You can find out about
                  commissions in different categories
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                What is the Payment Policy of Gadget Heaven ?
              </div>
              <div className="collapse-content">
                <p>
                  Seller payments are based on orders marked as Delivered to the
                  customer in the Seller Center. Payments for delivered products
                  are settled weekly. In case public holidays/weekends fall upon
                  these dates, the payment date will be released on the first
                  upcoming business day. You can explore Gadget Heaven detailed
                  Payment Policy and find answers to frequently asked questions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Congratulation!</h3>
            <p className="py-4">
              You have SuccessFully Registered
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn" onClick={()=>navigate('/')}>Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default BecomeSeller;
