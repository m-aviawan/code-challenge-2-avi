import React from 'react'
import useTeamsHook from '../../features/teams/hooks/useTeamsHook'
import TeamsProfile from '../../components/teamsProfile'
import ThankYouCard from '../../features/teams/components/thankYouCard'
import TeamsHero from '../../features/teams/components/teamsHero'

const Teams = () => {

    return (
    <main className='w-full flex flex-col lg:gap-16 md:gap-12 gap-8'>
      <TeamsHero />
      <TeamsProfile />
      <ThankYouCard />
    </main>
  )
}

export default Teams
