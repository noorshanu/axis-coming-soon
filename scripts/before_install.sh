#!/bin/bash

set -e

# Change Working Directory
cd /var/www/html/build

# Update & Set Node Version
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -

# Download Node & NPM
sudo apt-get install -y nodejs

sudo npm install pm2 -g

# You may also need development tools to build native addons
sudo apt-get install gcc g++ make

# To install the Yarn package manager
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
