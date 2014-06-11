define (require) ->
  $ = require 'jquery'
  _ = require 'underscore'
  react = require 'react'

  weaponsBase =
    fire: ->
      console.log("fizzle")

  return weaponsBase


