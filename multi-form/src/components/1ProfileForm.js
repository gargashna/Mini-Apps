import React, { useContext } from 'react'
import { useForm, appendErrors } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useSignUpForm } from './SignUpFormContext'
import { motion } from 'framer-motion'
import Animator from './Animator'
export default function ProfileForm () {
  const { register, handleSubmit, errors } = useForm()
  const history = useHistory()
  const { profile, setProfile } = useSignUpForm()

  const onSubmit = data => {
    history.push('/social')
    setProfile(data)
  }
  return (
    <Animator>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <input
          type='text'
          name='name'
          placeholder="what's your name?"
          defaultValue={profile.name}
          ref={register({
            required: true
          })}
        />
        <p>{errors.name && 'Name is required'} </p>
        <input
          type='email'
          name='email'
          defaultValue={profile.email}
          placeholder="what's your email?"
          ref={register({
            required: true,
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          })}
        />
        <p>{errors.email && 'Please type valid email'} </p>
        <input type='submit' value='next' />
      </form>
    </Animator>
  )
}
