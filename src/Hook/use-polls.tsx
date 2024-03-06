import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import useAxiosPublic from './useAxiosPublic';

export interface Poll {
  _id: string;
  title: string;
  description: string;
  options: { option: string; optionImage: string , _id:string}[];
  votes:[]
  isActive: boolean;
}

type PollType = 'all' | 'active' | 'inactive';

interface PollsHookResponse {
  polls: Poll[];
  setPolls: React.Dispatch<React.SetStateAction<Poll[]>>;
  pollsLoading: boolean;
  pollsError: boolean;
}

const usePolls = (pollType: PollType): PollsHookResponse => {
  const [polls, setPolls] = useState<Poll[]>([]);
  const [pollsLoading, setPollsLoading] = useState<boolean>(true);
  const [pollsError, setPollsError] = useState<boolean>(false);
 const AxiosPublic = useAxiosPublic()
  useEffect(() => {
    const fetchPolls = async () => {
      try {
        const { data }: AxiosResponse<Poll[]> = await AxiosPublic.get('/Show-Pull');
        const filteredPolls: Poll[] =
          pollType === 'active'
            ? data.filter((poll) => poll.isActive)
            : pollType === 'inactive'
            ? data.filter((poll) => !poll.isActive)
            : data;

        setPolls(filteredPolls);
        setPollsError(false);
      } catch (error) {
        console.error(error);
        setPollsError(true);
      } finally {
        setPollsLoading(false);
      }
    };

    fetchPolls();
  }, [AxiosPublic, pollType]);

  return {
    polls,
    setPolls,
    pollsLoading,
    pollsError,
  };
};

export default usePolls;
