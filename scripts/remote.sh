#!/usr/bin/env sh
[ -f pid ] && cat pid | xargs kill -9 && rm pid
cd ~/app
if [ -d .git ]; then
  git fetch
  git reset --hard origin/master
else
  git clone https://github.com/FrankFang/HgzCVgtEsnXY.git .
fi;
cd frontend
yarn
yarn build
cd ../..
export PORT=8888
node app/server.js > ./log 2>&1 &
echo $! > ./pid

