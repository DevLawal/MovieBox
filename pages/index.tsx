import React from 'react';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import { fetchTrendingMovies, searchMovies } from '../lib/tmdb';
import TrendingMovies from '../components/TrendingMovies';
// Use the functions from tmdb.js in your components/pages

import Navbar from '../components/Navbar';
import Billboard from '../components/Billboard';
import MovieList from '../components/MovieList';
import InfoModal from '../components/InfoModal';
import useMovieList from '../hooks/useMovieList';
import useFavorites from '../hooks/useFavorites';
import useInfoModalStore from '../hooks/useInfoModalStore';

export async function getServerSideProps(context: NextPageContext) {

  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

const Home = () => {


  return (
    <>
      <InfoModal />
      <Navbar />
      <Billboard />
      <div className="pb-40">
       <div>
         <MovieList />
       </div>

      </div>
    </>
  )
}

export default Home;