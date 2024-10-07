import React from 'react'

const useTeamsHook = () => {

  
const onFetchTeamsData = async() => {
    try {
      let res = await fetch('https://randomuser.me/api/?results=6&gender=male', {
          cache: 'force-cache'
      }) 
      res = await res.json()
      return res.results
    } catch (error) {
      console.log(error)
    }  
  }
  
  const position = [
    'Global Director', 
    'Asia Director', 
    'North America Director', 
    'China Director', 
    'Head of Product', 
    'Head of RnD'
  ]
  
  const description = [
    '24th year of experience',
    '19th year of experience',
    '18th year of experience',
    '10th year of experience',
    '12th year of experience',
    '15th year of experience',
  ]
  return {
    onFetchTeamsData,
    position,
    description
  }
}

export default useTeamsHook
