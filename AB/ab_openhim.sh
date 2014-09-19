#!/bin/bash
userpass="Benchmark:benchmark"
requests=50000
concurrency=50

# GET REQUEST
#ab -A$userpass -n$requests -c$concurrency http://localhost:5001/benchmark/testGet
ab -A$userpass -n$requests -c$concurrency http://localhost:5001/benchmark/testGetNoDelay?param=test
#ab -A$userpass -n$requests -c$concurrency http://localhost:5001/benchmark/testGetFail


# POST REQUEST
#ab -A$userpass -n$requests -Tapplication/json -ptestData/newUserBigData.json -c$concurrency http://localhost:5001/benchmark/testPost
