// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Gabriel
// Created on: Apr 2024
// This file contains the JS functions for index.html
"use strict"

function myButtonClicked() {
  // input
  const radiusNumber = document.getElementById("radius-number").value

  // process
  const areaOfCircle = (2 * Math.PI * radiusNumber)
  const roundedAnswer = areaOfCircle.toFixed(2)

  // output
  document.getElementById("area-of-a-cicle").innerHTML =
    "The area of this circle is: " + roundedAnswer + " cm²."
}
