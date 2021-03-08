import React from 'react'
import { useSignUpForm } from './SignUpFormContext'
import Animator from './Animator'
export default function Reviewform () {
  const { profile, social } = useSignUpForm()
  const handleSubmit = e => {
    e.preventDefault()
    alert('congrats, it is saving')
  }
  return (
    <Animator>
      <form onSubmit={handleSubmit}>
        <h2>Review All your info</h2>
        <p>
          <strong>Name</strong>:{profile.name}
        </p>
        <p>
          <strong>Email</strong>:{profile.email}
        </p>
        <p>
          <strong>Facebook</strong>:{social.facebook}
        </p>
        <p>
          <strong>Twitter</strong>:{social.twitter}
        </p>

        <input type='submit' value='Submit All Info' />
      </form>
    </Animator>
  )
}
