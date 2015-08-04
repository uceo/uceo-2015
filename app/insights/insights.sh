#!/usr/bin/env bash

# This file is created and updated by ansible, edit at your peril


source /edx/app/insights/insights_env

/edx/app/insights/venvs/insights/bin/gunicorn --pythonpath=/edx/app/insights/edx_analytics_dashboard/analytics_dashboard -b 127.0.0.1:8110 -w 2 --timeout=300  analytics_dashboard.wsgi:application
