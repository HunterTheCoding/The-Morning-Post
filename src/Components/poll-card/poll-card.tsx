import { RadioGroup } from "@headlessui/react";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";

import PollOption from "./poll-option";
import { successToast, errorToast } from "../utilities/toast";
import Context from "../../Hook/useContext";
import { AxiosError } from "axios"; // Add import for AxiosError
import CountdownTimer from "./countdown-timer"; // Import CountdownTimer component
import Button from "../ui/button"; // Import Button component
import { axiosSecure } from "../../Hook/useAxiosSecure";
import PollMenu from "./pole-menu";
import ResultChart from "../Chart/result-chart";
// Define type for props of PollCard component
interface PollCardProps {
  _id: string;
  options: Option[];
  title: string;
  description: string;
  expiresAt: string;
  isActive: boolean;
}

const PollCard: React.FC<PollCardProps> = ({
  _id,
  options,
  title,
  description,
  expiresAt,
  isActive,
}) => {
  const { user } = Context();
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [voteSubmitted, setVoteSubmitted] = useState<boolean>(false); // Track whether vote has been submitted
  const [displayResults, setDisplayResults] = useState<boolean>(false); // Track whether to display results

  useEffect(() => {
    const prevVotedOption = options.find((option) =>
      option.votes.includes(user?.uid || "")
    )?._id;

    setSelectedOption(prevVotedOption || "");
    setVoteSubmitted(!!prevVotedOption); // Set voteSubmitted based on whether user has voted
  }, [options, user]);

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);

      if (!selectedOption) {
        return errorToast("No option selected");
      }

      if (!user) {
        return errorToast("Something went wrong");
      }

      await axiosSecure.patch(`/updatePoll/${_id}`, {
        userId: user.uid,
        options: selectedOption,
      });

      successToast("Vote submitted");
      setVoteSubmitted(true);
    } catch (error) {
      console.error(error);
      const axiosError = error as AxiosError; // Cast error to AxiosError
      errorToast(
        axiosError.response?.data?.message || "Something went wrong"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePollActiveToggle = async (pollId: string) => {
    try {
      await axiosSecure.patch(`/polls/toggle/${pollId}`, { isActive: false });
      toast("The poll has expired");
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4 mx-auto space-y-2 w-full rounded-lg border shadow border-primary-700 sm:p-6 bg-primary-900">
      {voteSubmitted ? (
        <ResultChart pollId={_id} />
      ) : (
        <>
          <div className="flex gap-2 justify-between items-start">
            <h3 className="text-lg font-bold text-white sm:text-xl md:text-2xl">
              {title}
            </h3>
            <PollMenu pollId={_id} isActive={isActive} />
          </div>
          <p className="pb-3 whitespace-normal break-all">{description}</p>
          <RadioGroup
            disabled={!isActive || voteSubmitted} // Disable radio group if vote already submitted or poll inactive
            value={selectedOption}
            onChange={setSelectedOption}
            className="space-y-3"
          >
            {options?.map((option) => (
              <PollOption
                optionImage={undefined}
                key={option._id}
                {...option}
              />
            ))}
          </RadioGroup>
          <div className="flex flex-col gap-3 justify-between pt-5 sm:items-center sm:flex-row">
            <CountdownTimer
              expiresAt={expiresAt}
              onExpire={() => handlePollActiveToggle(_id)}
              isActive={isActive}
            />
            <div className="flex gap-2 justify-end items-center">
              {isActive ? (
                <Button
                  variant="primary"
                  disabled={isSubmitting || voteSubmitted} // Disable button if submitting or vote already submitted
                  onClick={handleSubmit}
                >
                  {isSubmitting ? (
                    <>
                      <CgSpinner className="text-xl animate-spin" />
                      <span>Submitting</span>
                    </>
                  ) : (
                    <>
                      <span>Submit</span>
                      <span className="hidden sm:inline-block">Vote</span>
                    </>
                  )}
                </Button>
              ) : null}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PollCard;






/* 

import { RadioGroup } from "@headlessui/react";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";

import PollOption from "./poll-option";
import { successToast, errorToast } from "../utilities/toast";
import Context from "../../Hook/useContext";
import { AxiosError } from "axios"; // Add import for AxiosError
import CountdownTimer from "./countdown-timer"; // Import CountdownTimer component
import Button from "../ui/button"; // Import Button component
import { axiosSecure } from "../../Hook/useAxiosSecure";
import PollMenu from "./pole-menu";
import ResultChart from "../Chart/result-chart";

// Define type for options in the PollCard component
interface Option {
  _id: string;
  option: string;
  votes: string[];
}

// Define type for props of PollCard component
interface PollCardProps {
  _id: string;
  options: Option[];
  title: string;
  description: string;
  expiresAt: string;
  isActive: boolean;
}

const PollCard: React.FC<PollCardProps> = ({
  _id,
  options,
  title,
  description,
  expiresAt,
  isActive,
}) => {
  const { user } = Context();
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [displayResults, setDisplayResults] = useState<boolean>(false);

  console.log(user);
  
  useEffect(() => {
    const prevVotedOption = options.find((option) =>
      option.votes.includes(user || "")
    )?._id;
  
    setSelectedOption(prevVotedOption || "");
  }, [options, user, setSelectedOption]);
  
  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
  
      if (!selectedOption) {
        console.log("error");
        
        return errorToast("No option selected");
      }
  
      if (!user ) {
        console.log(user);
        return errorToast("Something went wrong");
      }
  
      await axiosSecure.patch(`/polls/${_id}`, {
        userId: user,
        optionId: selectedOption,
      });
  
      successToast("Vote submitted");
    } catch (error) {
      console.error(error);
      const axiosError = error as AxiosError; // Cast error to AxiosError
      errorToast(axiosError.response?.data?.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };
  

  const handlePollActiveToggle = async (pollId: string) => {
    try {
      await axiosSecure.patch(`/polls/toggle/${pollId}`, { isActive: false });
      toast("The poll has expired");
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4 mx-auto space-y-2 w-full rounded-lg border shadow border-primary-700 sm:p-6 bg-primary-900 md:w-[42rem]">
      {displayResults ? (
        <ResultChart pollId={_id} />
      ) : (
        <>
          <div className="flex gap-2 justify-between items-start">
            <h3 className="text-lg font-bold text-white sm:text-xl md:text-2xl">
              {title}
            </h3>
            <PollMenu pollId={_id} isActive={isActive} />
          </div>
          <p className="pb-3 whitespace-normal break-all">{description}</p>
          <RadioGroup
            disabled={!isActive}
            value={selectedOption}
            onChange={setSelectedOption}
            className="space-y-3"
          >
            {options?.map((option) => (
              <PollOption
                optionImage={undefined}
                key={option._id}
                {...option}
              />
            ))}
          </RadioGroup>
        </>
      )}
      <div className="flex flex-col gap-3 justify-between pt-5 sm:items-center sm:flex-row">
        <CountdownTimer
          expiresAt={expiresAt}
          onExpire={() => handlePollActiveToggle(_id)}
          isActive={isActive}
        />
        <div className="flex gap-2 justify-end items-center">
          <Button
            variant="secondary"
            onClick={() =>
              setDisplayResults((prevDisplayResults) => !prevDisplayResults)
            }
          >
            {displayResults ? (
              <span>Show Poll</span>
            ) : (
              <>
                <span className="hidden sm:inline-block">Show</span>
                <span>Results</span>
              </>
            )}
          </Button>
          {isActive ? (
            <Button
              variant="primary"
              disabled={isSubmitting}
              onClick={handleSubmit}
            >
              {isSubmitting ? (
                <>
                  <CgSpinner className="text-xl animate-spin" />
                  <span>Submitting</span>
                </>
              ) : (
                <>
                  <span>Submit</span>
                  <span className="hidden sm:inline-block">Vote</span>
                </>
              )}
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PollCard;

*/