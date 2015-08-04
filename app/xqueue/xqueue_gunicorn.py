"""
gunicorn configuration file: http://docs.gunicorn.org/en/develop/configure.html

This file is created and updated by ansible, edit at your peril
"""
import multiprocessing

preload_app = True
timeout = 300
bind = "127.0.0.1:8040"
pythonpath = "/edx/app/xqueue/xqueue"

workers = (multiprocessing.cpu_count()-1) * 2 + 2

