#!/bin/bash

# SIEGE COMMAND TO EXECUTE THE LOAD TEST
siege $@ --log=siege_log.csv --file=siege_url.txt