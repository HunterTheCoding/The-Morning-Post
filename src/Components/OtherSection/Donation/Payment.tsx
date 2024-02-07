import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";

import Donation from "./Donation";


// TODO: add publishable key
const stripePromise = loadStripe('pk_test_51OEB62HYQBx9XJIje5mwCddGST209INYLsInEqWeE9a9R6l7ws0uOXRQMTKgdRGQllRnQBMKRMoq72ycLMm1j2Ov00Ys2cygN9');
const Payment = () => {
    return (
        <div>
 <Elements stripe={stripePromise}>
      <Donation />
    </Elements>
        </div>
    );
};

export default Payment;



// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import React, { useEffect, useState } from "react";
// import useAxiosPublic from "../../../Hook/useAxiosPublic";
// import Context from "../../../Hook/useContext";
// import Swal from "sweetalert2";
// interface DonationItem {
//   id: number;
//   amount: number;
//   name: string;
//   email: string;
//   option: string;
// }

// const Donation = () => {
// const AxiosPublic = useAxiosPublic();
// const [donationList, setDonationList] = useState<DonationItem[]>([]);
// const [Amount, setAmount] = useState(null || Number);
// const [clientSecret, setClientSecret] = useState(undefined || String); // Initialize as undefined
// const [error, setError] = useState(String);
// const [transactionId, setTransactionId] = useState<number | string | null>(
//   null
// );

// const { user } = Context();
//   const stripe = useStripe();
//   const elements = useElements();
// const handleDonation = (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   const form = e.target as HTMLFormElement;
//   const amount = form.amount.value;
//   setAmount(amount);
//   const name = (form.name as unknown as HTMLInputElement).value;
//   const email = (form.email as unknown as HTMLInputElement).value;
//   const option = (form.option as unknown as HTMLInputElement).value;

//   const newDonation = {
//     id: Date.now(),
//     amount: parseFloat(amount),
//     name,
//     email,
//     option,
//   };
//   setDonationList((preDonation) => [...preDonation, newDonation]);
//   form.reset();
// };

//   useEffect(() => {
//     if (Amount > 0) {
//       AxiosPublic.post("/create-payment-intent", { price: Amount }).then(
//         (res) => {
//           console.log(res.data.clientSecret);
//           setClientSecret(res.data.clientSecret);
//         }
//       );
//     }
//   }, [Amount, AxiosPublic]);

//   const handleSubmit = async (
//     event: React.FormEvent<HTMLFormElement>
//   ): Promise<void> => {
//     // Specify Promise<void> for function return type
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const card = elements.getElement(CardElement);

//     if (card === null) {
//       return;
//     }

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card,
//     });

//     if (error) {
//       console.log("payment error", error);
//       setError(error.message);
//     } else {
//       console.log("payment method", paymentMethod);
//       setError("");
//     }

//     // confirm payment
//     // const {}= await stripe.confirmSofortPayment(clientSecret,paymentMethod)
//     console.log(clientSecret);
//     const { paymentIntent, error: confirmError } =
//       await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: card,
//           billing_details: {
//             email: user?.email || "anonymous",
//             name: user?.displayName || "anonymous",
//           },
//         },
//       });

//     if (confirmError) {
//       console.log("confirm error");
//     } else {
//       console.log("payment intent", paymentIntent);
//       if (paymentIntent.status === "succeeded") {
//         console.log("transaction id", paymentIntent.id);
//         setTransactionId(paymentIntent.id);

//         // now save the payment in the database
//         const payment = {
//           email: user.email,
//           price: Amount,
//           transactionId: paymentIntent.id,
//           date: new Date(), // utc date convert. use moment js to
//           status: "pending",
//         };
//         console.log(payment);
//         const res = await AxiosPublic.post("/payments", payment);
//         console.log("payment saved", res);

//         if (res.data?.paymentResult?.insertedId) {
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "Thank you for the taka paisa",
//             showConfirmButton: false,
//             timer: 1500,
//           });
//           // navigate("/dashboard/paymentHistory");
//         }
//       }
//     }
//   };

//   const openModal = (id: string) => {
//     const modal = document.getElementById(id) as HTMLDialogElement | null;
//     if (modal) {
//       modal.showModal();
//     }
//   };

//   const closeModal = (id: string) => {
//     const modal = document.getElementById(id) as HTMLDialogElement | null;
//     if (modal) {
//       modal.close();
//     }
//   };
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 py-10 ">
//       <div className="col-span-2 p-5">
//         <h1 className="text-center font-semibold text-xl"> Donate Here</h1>
//         <form onSubmit={handleDonation} className="card-body w-full">
//           <div className="grid grid-cols-2 gap-3">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Name</span>
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="name"
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="email"
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-3">
//             <label className="form-control w-full max-h-full">
//               <div className="label">
//                 <span className="label-text">Pick One</span>
//               </div>
//               <select name="option" className="select select-bordered">
//                 <option disabled selected>
//                   Pick one
//                 </option>
//                 <option>For flooding</option>
//                 <option>For Poor People</option>
//               </select>
//             </label>

//             <div className="form-control w-full">
//               <label className="label">
//                 <span className="label-text">Amount</span>
//               </label>
//               <input
//                 type="number"
//                 name="amount"
//                 placeholder="amount"
//                 className="input input-bordered w-full"
//                 required
//               />
//             </div>
//           </div>

//           <div className="form-control mt-6">
//             <button
//               type="submit"
//               className="btn bg-sky-400 hover:bg-sky-700 text-white"
//               onClick={() => openModal("my_modal_5")}
//             >
//               Donate{" "}
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Modal */}
//       <div>
//         {/* <button className="btn" onClick={() => openModal('my_modal_5')}>Open modal</button> */}
//         <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
//           <div className="modal-box">
//             <form onSubmit={handleSubmit}>
//               <CardElement
//                 options={{
//                   style: {
//                     base: {
//                       fontSize: "16px",
//                       color: "#424770",
//                       "::placeholder": {
//                         color: "#aab7c4",
//                       },
//                     },
//                     invalid: {
//                       color: "#9e2146",
//                     },
//                   },
//                 }}
//               />
//               <button
//                 type="submit"
//                 className="btn btn-sm btn-primary my-4"
//                 disabled={!stripe || !clientSecret}
//               >
//                 Pay
//               </button>
//               <p className="text-red-600">{error}</p>
//               {transactionId && (
//                 <p className="text-green-600">
//                   {" "}
//                   Your transaction id: {transactionId}
//                 </p>
//               )}
//             </form>
//             <div className="modal-action">
//               <form method="dialog">
//                 {/* if there is a button in form, it will close the modal */}
//                 <button
//                   className="btn"
//                   onClick={() => closeModal("my_modal_5")}
//                 >
//                   Close
//                 </button>
//               </form>
//             </div>
//           </div>
//         </dialog>
//       </div>
//       <div className="sm:mx-7">
//         <h1 className=" font-semibold text-center lg:text-start text-xl pb-2">
//           {" "}
//           Payment Details
//         </h1>
//         {donationList?.length > 0 ? (
//           <>
//             {donationList.map((donation: DonationItem) => {
//               return (
//                 <div key={donation.id} className="">
//                   <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                       Donar name: {donation.name}
//                     </h5>
//                     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                       ID: {donation.id}
//                     </p>
//                     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                       Email: {donation.email}
//                     </p>
//                     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                       What For :{donation.option}
//                     </p>
//                     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                       Amount : ${donation.amount}
//                     </p>
//                   </div>
//                   <button className="btn bg-sky-400 text-white hover:bg-sky-700 mt-4 items-center justify-center mx-auto">
//                     Download Payment Slip as pdf
//                   </button>
//                   {/* not applied pdf file */}
//                 </div>
//               );
//             })}
//           </>
//         ) : (
//           <>
//             <p>You haven't donated yet</p>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Donation;







