import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { Pie2D, Column2D, Bar2D, Doughnut2D } from './Charts';

const Repos = () => {
  const { repos } = React.useContext(GithubContext);

  /* Constructure the languages data */
  let languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;

    if (!language) return total; // language is null, do not return
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language], 
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      }
    } // calculate the number of language

    return total;
  }, {});


  /* ------ 1. Most used language */
  const mostUsed = Object.values(languages).sort((a,b) => {
    return b.value - a.value;
  })
  .slice(0, 5); // change into array, sort by value and return top languages
  
  /* ------ 3. Most popular per language */
  const mostPopular = Object.values(languages).sort((a,b) => {
    return b.stars - a.stars;
  })
  .map((item) => {
    return {...item, value: item.stars} // change stars => value property
  })
  .slice(0, 5); // change into array, sort by stars and return top languages


  /* Constructure the stars, forks data*/
  let {stars, forks} = repos.reduce((total, item) => {
    const { stargazers_count, name, forks } = item;
    total.stars[stargazers_count] = {label: name, value: stargazers_count};
    total.forks[forks] = {label: name, value: forks};
    
    return total;
  },{
    stars: {}, 
    forks: {},
  })

  /* ------ 2. Stars */
  stars = Object.values(stars).slice(-5).reverse();


  /* ------ 4. Forks */
  forks = Object.values(forks).slice(-5).reverse();


  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <Pie2D data={mostUsed}/>
        <Column2D data={stars} />
        <Doughnut2D data={mostPopular}/>
        <Bar2D data={forks} />
      </Wrapper>
    </section>
  );
};


const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  //responsive
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;