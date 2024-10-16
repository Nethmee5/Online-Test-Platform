#!/bin/bash

pm2 list

git pull origin main

pm2 stop all

pm2 start all


