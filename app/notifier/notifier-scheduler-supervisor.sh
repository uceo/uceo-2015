#!/bin/bash

source /edx/app/notifier/notifier_env
cd /edx/app/notifier/src

export PID='/var/tmp/notifier-celery-workers.pid'
export LANG=en_US.UTF-8

/edx/app/notifier/virtualenvs/notifier/bin/python manage.py scheduler

