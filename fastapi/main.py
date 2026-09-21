import os
from datetime import datetime, timezone

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def hello():
    return {"message": f"Hello from {os.environ.get('APP_NAME', 'fastapi')}", "time": datetime.now(timezone.utc).isoformat()}


@app.get("/healthz")
def healthz():
    return "ok"
