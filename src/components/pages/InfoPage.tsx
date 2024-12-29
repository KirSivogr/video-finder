import { useParams } from 'react-router-dom';
import { Header } from '@components/header/Header';
import { InfoPageContent } from '@components/page-content/info-page-content/InfoPageContent';

import { useGetVideoById } from '@/hooks/useGetVideoById';

export const InfoPage = () => {
   const { id } = useParams();
   const { videoData, isLoading, isError } = useGetVideoById(id);

   return (
      <>
         <Header />
         <InfoPageContent videoData={videoData} isLoading={isLoading} isError={isError} />
      </>
   );
};
