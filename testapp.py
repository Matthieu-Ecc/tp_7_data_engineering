import time

import requests
from flask import Flask, request
from flask_restful import Resource, Api


def test_connection_back():
    assert requests.get("http://localhost:3003/api/").status_code == 200, "back is not up"


def test_connection_front():
    assert requests.get("http://localhost:3000").status_code == 200, "front is not up"

def test_stress_requests_back():
    start = time.time()
    for i in range(1000):
        requests.get("http://localhost:3003/api/")

    end = time.time() - start
    assert (end / 1000) < 100, "stress back not passed"

def test_stress_requests_front():
    start = time.time()
    for i in range(1000):
        requests.get("http://localhost:3000")

    end = time.time() - start
    assert (end / 1000) < 100, "stress front not passed"