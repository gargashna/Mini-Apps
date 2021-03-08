import React, { useState } from 'react'
import ProfileForm from './1ProfileForm'
import SocialForm from './2SocialForm'
import Reviewform from './3Review'
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Steplinks from './StepLinks'
import { SignUpFormProvider } from './SignUpFormContext'

export default function SignupForm () {
  const location = useLocation()

  return (
    <SignUpFormProvider>
      <div className='signUp'>
        <Steplinks />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ scale: 0.2 }}
        >
          I am animating opacity
        </motion.div>
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route path='/' exact component={ProfileForm} />
            <Route path='/social' component={SocialForm} />
            <Route path='/review' component={Reviewform} />
          </Switch>
        </AnimatePresence>
      </div>
    </SignUpFormProvider>
  )
}
