#!/bin/bash

# SIEGE COMMAND TO EXECUTE THE LOAD TEST
siege --delay=1 --concurrent=1 --reps=20 --internet --verbose --log=siege_log.csv --file=siege_url.txt