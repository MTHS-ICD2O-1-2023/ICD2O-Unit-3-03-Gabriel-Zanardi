// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Gabriel
// Created on: Apr 2024
// This file contains the JS functions for index.html
"use strict"

function myButtonClicked() {
  // input
  const radiusOfSphere = parseFloat(document.getElementById("radius-number").value)

  // process
  const volumeHalfway = (Math.PI * radiusOfSphere * 3) * (4/3)
  const finalAnswer = volumeHalfway.toFixed(2)

  // output
  document.getElementById("volume-of-a-sphere").innerHTML =
    "The volume of this sphere is: " + finalAnswer + " cm³."
}
