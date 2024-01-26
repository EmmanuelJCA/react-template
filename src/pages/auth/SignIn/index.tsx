import { Seo } from '@/components';
import { SignInView } from './view';

// ----------------------------------------------------------------------

const SignInPage = () => {
  return (
    <>
      <Seo name="Sign In" />

      <SignInView />
    </>
  );
};

export default SignInPage;
