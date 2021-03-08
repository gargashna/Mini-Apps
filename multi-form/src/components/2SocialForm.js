import React, { useState } from 'react'
import Animator from './Animator'
import { useForm, appendErrors } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useSignUpForm } from './SignUpFormContext'

export default function SocialForm () {
  const { register, handleSubmit, errors } = useForm()
  const history = useHistory()
  const { social, setSocial } = useSignUpForm()

  const onSubmit = data => {
    history.push('/review')
    setSocial(data)
  }
  return (
    <Animator>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>How can we find you on social?</h2>
        <input
          type='text'
          name='twitter'
          placeholder="what's your twitter?"
          defaultValue={social.twitter}
          ref={register({
            required: true
          })}
        />
        <p>{errors.twitter && 'Twitter is required'} </p>
        <input
          type='text'
          name='facebook'
          placeholder="what's your facebook?"
          defaultValue={social.facebook}
          ref={register({
            required: true
          })}
        />
        <p>{errors.facebook && ' facebook required'} </p>
        <input type='submit' value='next' />
      </form>
    </Animator>
  )
}
