import React, { useEffect, useState } from "react";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import Context from "../../../Hook/useContext";
import { loadStripe } from "@stripe/stripe-js";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

interface DonationFormProps {
  setAmount: React.Dispatch<React.SetStateAction<number | null>>;
  clientSecret: string | null;
}

const DonationForm: React.FC<DonationFormProps> = ({
  setAmount,
  clientSecret,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = Context();
  const navigate = useNavigate();
  const AxiosPublic = useAxiosPublic();

  const [error, setError] = useState<string>("");
  const [transactionId, setTransactionId] = useState<number | string | null>(
    null
  );

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const amount = form.amount.value;
    setAmount(parseFloat(amount));
    const name = (form.name as unknown as HTMLInputElement).value;
    const email = (form.email as unknown as HTMLInputElement).value;
    const option = (form.option as unknown as HTMLInputElement).value;

    const newDonation = {
      id: Date.now(),
      amount: parseFloat(amount),

      name,
      email,
      option,
    };

    console.log(newDonation);

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message || "An unknown payment error occurred");
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    if (!clientSecret) {
      console.error("Client secret is empty or null");
      return;
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        console.log(newDonation);
        const res = await AxiosPublic.post("/donation-request", {
          newDonation,
          transactionId,
        });
        console.log("payment saved", res);
        // refetch();
        if (res.data?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you for the taka paisa",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/daseboard/userdonation");
        }
      }
    }
  };

  return (
    <div className="col-span-2 p-5">
      <h1 className="text-center font-semibold text-xl"> Donate Here</h1>
      <form onSubmit={handleSubmit} className="card-body w-full">
        <div className="grid grid-cols-2 gap-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <label className="form-control w-full max-h-full">
            <div className="label">
              <span className="label-text">Pick One</span>
            </div>
            <select name="option" className="select select-bordered">
              <option disabled selected>
                Pick one
              </option>
              <option>For flooding</option>
              <option>For Poor People</option>
            </select>
          </label>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Amount</span>
            </label>
            <input
              type="number"
              name="amount"
              placeholder="amount"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="form-control mt-6">
          <button
            type="submit"
            className="btn bg-sky-400 hover:bg-sky-700 text-white"
            // disabled={!stripe || !clientSecret}
          >
            Donate
          </button>
          <p className="text-red-600">{error}</p>
          {transactionId && (
            <p className="text-green-600">
              Your transaction id: {transactionId}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

const Donation = () => {
  const AxiosPublic = useAxiosPublic();
  const [clientSecret, setClientSecret] = useState<string>("");
  // const [donationList, setDonationList] = useState<DonationItem[]>([]);
  const [amount, setAmount] = useState<number | null>(null);
  // const { user } = Context();

  const stripePromise = loadStripe(
    "pk_test_51OhB04Ga159S7jj5ZjulOYevFjftJnr5DNil1EOou47LVIK8EBmFOkbhhLXA6cDSZT9rn5M8qSrksPzr4aOoPvsQ00EMac6eFw"
  );

  useEffect(() => {
    // Fetch the client secret and amount from the server
    if (amount) {
      AxiosPublic.post("/create-payment-intent", { amount })
        .then((res) => {
          console.log("Client secret received:", res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        })
        .catch((error) => {
          console.error("Error fetching client secret:", error);
        });
    }
  }, [AxiosPublic, amount]);

  return (
    <div>
      {/* ... your existing code ... */}
      <Elements stripe={stripePromise}>
        <DonationForm clientSecret={clientSecret} setAmount={setAmount} />
      </Elements>
      {/* ... your existing code ... */}
    </div>
  );
};

export default Donation;
