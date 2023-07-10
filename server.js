const express = require('express')
const passport = require('passport')
const GoogleStategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')

passport.use( 
  new GoogleStategy({
    clientID:'936073687599-v998l3p4la5814bejnl4ci2nj0d2ec51.apps.googleusercontent.com',
    clientSecret:'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',
    callbackURL:'http://localhost:3000/oauth2callback'
  })
)