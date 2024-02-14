import React from 'react';


import usePolls, { Poll } from '../../Hook/use-polls';
import PollCard from '../poll-card/poll-card';



const HomePage: React.FC = () => {
  const { polls, pollsLoading, pollsError } = usePolls('active');
  return (
    <main className="container grid py-5 md:py-10">
      <h2 className="pb-5 text-2xl font-bold text-center text-white md:text-3xl md:pb-8 font-secondary">
        Currently active Polls
      </h2>
      <section className="mx-auto space-y-5 w-full border-red-400">
        {pollsLoading ? (
          <p></p>
        ) : pollsError ? (
          <div className="flex items-center h-[50vh] justify-center text-2xl font-semibold text-red-500/80 text-center">
            <p>Failed to load polls</p>
          </div>
        ) : polls.length ? (
          polls.map((poll: Poll) => (
            <PollCard
              expiresAt={''}
              key={poll._id}
              {...poll}
              options={poll.options.map(option => ({
                _id: option.option, // Provide a unique identifier for each option
                option: option.option,
                votes: [], // Assuming votes are initially empty
              }))}
            />
          ))
        ) : (
          <div className="flex items-center h-[50vh] justify-center text-2xl font-semibold text-primary-300 text-center">
            <p>No currently active polls</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default HomePage;
