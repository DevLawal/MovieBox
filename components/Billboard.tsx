import React, { useCallback } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

import PlayButton from '../components/PlayButton';
import useBillboard from '../hooks/useBillboard';
import useInfoModalStore from '../hooks/useInfoModalStore';

const Billboard: React.FC = () => {
  const { openModal } = useInfoModalStore();
  const { data } = useBillboard();

  const handleOpenModal = useCallback(() => {
    openModal(data?.id);
  }, [openModal, data?.id]);



  return (
   <div className="relative h-full w-full bg-[url('/images/Poster.png')] bg-no-repeat bg-center bg-fixed bg-cover">
  <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
    <p className="text-white text-xl md:text-5xl lg:text-6xl font-bold drop-shadow-xl">
      John Wick 3:<br></br>Parabellum
    </p>
    <p className="text-white text-sm md:text-lg lg:text-xl mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
      John Wick is on the run after killing a member of the national assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
    </p>
    <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
      <PlayButton />
    </div>
  </div>
      </div>
    

  )
}
export default Billboard;