import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSignUpForm } from './SignUpFormContext'

function isEmpty (obj) {
  return Object.keys(obj).length === 0
}

export default function StepLinks () {
  const { profile, social } = useSignUpForm()
  const isProfileDone = !isEmpty(profile)
  const isSocialDone = !isEmpty(social)

  return (
    <div className='step-links'>
      <NavLink to='/'>
        {isProfileDone ? '❤' : '👀'}Profile <span />
      </NavLink>
      {isProfileDone ? (
        <NavLink to='/social'>
          {' '}
          {isSocialDone ? '❤' : '👀'}Social <span />
        </NavLink>
      ) : (
        <a>
          Social <span />
        </a>
      )}

      {isProfileDone && isSocialDone ? (
        <NavLink to='/review' style={{ float: 'right' }}>
          Review
        </NavLink>
      ) : (
        <a style={{ float: 'right' }}>
          Review <span />
        </a>
      )}
    </div>
  )
}
