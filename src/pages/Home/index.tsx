import { HomeView } from './view';
import { Seo } from '@/components';

// ----------------------------------------------------------------------

const HomePage = () => {
  return (
    <>
      <Seo name="Sign In" />

      <HomeView />
    </>
  );
};

export default HomePage;
