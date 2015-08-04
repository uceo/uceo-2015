"""
gunicorn configuration file: http://docs.gunicorn.org/en/develop/configure.html

This file is created and updated by ansible, edit at your peril
"""

timeout = 300
bind = "127.0.0.1:8100"
pythonpath = "/edx/app/analytics_api/analytics_api"
workers = 2

