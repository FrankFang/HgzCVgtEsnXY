#!/usr/bin/env sh
DIR=$(dirname $0)
cat "$DIR/remote.sh" | ssh fang@server1 'bash -s'
