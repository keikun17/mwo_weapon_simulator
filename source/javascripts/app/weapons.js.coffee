define (require) ->
  $ = require 'jquery'
  _ = require 'underscore'
  react = require 'react'

  weaponsBase =
    fire: ->
      console.log("fizzle")

  $.getJSON('data/weapons.json', (data) ->
    weaponsBase.all = data
  ).fail((data)->
    console.log "Error loading weapon data"
  )


  window.weapon = weaponsBase

  init: ->
    console.log "called"

  return weaponsBase


