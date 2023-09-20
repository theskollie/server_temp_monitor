#!/bin/bash

while true
do
	temperature=$(vcgencmd measure_temp)
	echo "Current Temperature: $temperature"
	sleep 5
done