#!/bin/bash

source /edx/app/forum/forum_env
cd /edx/app/forum/cs_comments_service

/edx/app/forum/.gem/bin/unicorn -c config/unicorn.rb
