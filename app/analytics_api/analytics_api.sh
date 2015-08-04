#!/usr/bin/env bash

# This file is created and updated by ansible, edit at your peril


source /edx/app/analytics_api/analytics_api_env

/edx/app/analytics_api/venvs/analytics_api/bin//gunicorn -c /edx/app/analytics_api/analytics_api_gunicorn.py  analyticsdataserver.wsgi:application
