
import Image from 'next/image'
import React from 'react'

const onFetchTeamsData = async() => {
  try {
    let res = await fetch('https://randomuser.me/api/?results=6&gender=male', {
        cache: 'force-cache'
    }) 
    res = await res.json()
    console.log(res.results)
    return res.results
  } catch (error) {
    console.log(error)
  }  
}

const Teams = async() => {
  const data = await onFetchTeamsData()
    return (
    <main>
      <section className='grid grid-col-3'>
        {data.map((item, index) => {
          return(
            <article key={index}>
              <figure>
                <Image
                src={item.picture.large}
                width={1000}
                height={1000}
                alt=''
                />
              </figure>
              <h1>{item.name.first} {item.name.last}</h1>
              <p>{item.city}, {item.country}</p>
            </article>
          )
        })}
      </section>
    </main>
  )
}

export default Teams
