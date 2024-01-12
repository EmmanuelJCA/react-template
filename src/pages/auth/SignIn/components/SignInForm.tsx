import { Stack, TextField, Button, Link, Box } from '@mui/material';
import { useForm } from 'react-hook-form';

import { useRouter } from '@/router/hooks';

// ----------------------------------------------------------------------

interface Form {
  email: string;
  password: string;
}

const SignInForm = () => {
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<Form>();

  const signIn = (credentials: Form) => {
    console.log(credentials);
    router.push('/');
  };

  return (
    <Box component="form" onSubmit={handleSubmit(signIn)}>
      <Stack spacing={3}>
        <TextField 
          label="Email address"
          type='email'
          { ...register('email', {
            required: 'this field is required',
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: 'invalid email address'
            }
          })}
          error={ !!errors.email }
          helperText={ errors.email?.message }
        />

        <TextField
          label="Password"
          type="password"
          { ...register('password', {
            required: 'this field is required',
            minLength: { value: 6, message: 'minium 6 characters' },
            pattern: {
              value: /^[^\s]+$/,
              message: 'space not allowed'
            }
          })}
          error={ !!errors.password }
          helperText={ errors.password?.message }
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <Button
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
      >
        Login
      </Button>
    </Box>
  )
}

export default SignInForm;
