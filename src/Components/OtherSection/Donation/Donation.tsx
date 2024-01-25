import React, { useState } from "react";

interface DonationItem {
    id: number;
    amount: number;
    name: string;
    email: string;
    option: string
}
const Donation = () => {
    const [donationList, setDonationList] = useState<DonationItem[]>([])

    const handleDonation = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const amount = form.amount.value;
        const name = (form.name as unknown as HTMLInputElement).value;
        const email = (form.email as unknown as HTMLInputElement).value;
        const option = (form.option as unknown as HTMLInputElement).value;

        const newDonation = {
            id: Date.now(),
            amount: parseFloat(amount),
            name,
            email,
            option
        }
        setDonationList(preDonation => [...preDonation, newDonation])
        form.reset()
    }
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 py-10 ">
            <div className="col-span-2 p-5">
                <h1 className="text-center font-semibold text-xl"> Donate Here</h1>
                <form onSubmit={handleDonation} className="card-body w-full">
                    <div className="grid grid-cols-2 gap-3">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">

                        <label className="form-control w-full max-h-full">
                            <div className="label">
                                <span className="label-text">Pick One</span>
                            </div>
                            <select name="option" className="select select-bordered">
                                <option disabled selected>Pick one</option>
                                <option>For flooding</option>
                                <option>For Poor People</option>
                            </select>
                        </label>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Amount</span>
                            </label>
                            <input type="number" name="amount" placeholder="amount" className="input input-bordered w-full" required />
                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-sky-400 hover:bg-sky-700 text-white">Donate </button>
                    </div>
                </form>
            </div>
            <div className="sm:mx-7">
                <h1 className=" font-semibold text-center lg:text-start text-xl pb-2"> Payment Details</h1>
                {
                    donationList?.length > 0 ? <>

                        {
                            donationList.map((donation: DonationItem) => {
                                return (
                                    <div key={donation.id} className="">
                                        <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Donar name: {donation.name}</h5>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">ID: {donation.id}</p>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Email: {donation.email}</p>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">What For :{donation.option}</p>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Amount : ${donation.amount}</p>
                                        </div>
                                        <button className="btn bg-sky-400 text-white hover:bg-sky-700 mt-4 items-center justify-center mx-auto">Download Payment Slip as pdf</button>
                                        {/* not applied pdf file */}
                                    </div>

                                )
                            })
                        }

                    </>
                        :
                        <>
                            <p>You haven't donated yet</p>
                        </>
                }
            </div>
        </div>

    );
};

export default Donation;