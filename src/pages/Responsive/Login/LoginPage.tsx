import React, { FormEvent, useState } from 'react'
import DefaultTemplate from '@/templates/Default/Default.index'
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { ROUTES } from '@/router/Router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { firebaseAuth } from '@/services/firebase/initializer'
import { useNavigate } from 'react-router-dom'
import { ResponsiveLayout } from '@/templates/ResponsiveLayout/ResponsiveLayout'
import { FlatIcon } from '@/components/FlatIcon/FlatIcon'
import svgGoogleSrc from '@/assets/icons/google.svg'
import svgFacebookSrc from '@/assets/icons/facebook.svg'

const SocialButton = ({ src }) => {
  return (
    <button className='flex p-2 bg-white border-2 border-gray-200 border-solid rounded-full shadow-lg border-opacity-20'>
      <FlatIcon src={src} size='2xl' />
    </button>
  )
}

export const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleUserSignIn = (event: FormEvent) => {
    event.preventDefault()
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then(() => {
        navigate('/' + ROUTES.HOME)
      })
      .catch((err) => console.error(err))
  }
  return (
    <ResponsiveLayout options={{ header: true, tabBar: false }}>
      <section className='flex flex-col'>
        <h2 className='m-0 mt-20 font-bold text-center'>Sign in</h2>
        <h3 className='m-0 font-normal text-center'>Sign in to your account</h3>
        <Box component='form' onSubmit={handleUserSignIn} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button type='submit' size='large' fullWidth variant='contained' sx={{ mt: 8, mb: 2 }}>
            Sign In
          </Button>
        </Box>
      </section>
      <div className='flex flex-col justify-end flex-grow gap-10 py-6'>
        <div className='relative flex flex-col items-center'>
          <hr className='absolute top-0 z-10 w-full' />
          <span className='relative top-0 z-20 px-3 bg-white'>Or Login With</span>
        </div>
        <section className='flex justify-center gap-14'>
          <SocialButton src={svgFacebookSrc} />
          <SocialButton src={svgGoogleSrc} />
        </section>
        <span className='text-lg '>
          Don't have an account ?{' '}
          <Link href={ROUTES.SIGNUP}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Sign Up
          </Link>
        </span>
      </div>
    </ResponsiveLayout>
  )
}