---
title: "Docker Beginner's Guide"
description: "A simple, practical introduction to Docker for self-hosting."
---

# Docker Beginner's Guide

Docker makes it easy to run apps in isolated containers, so you don't have to worry about dependencies or breaking your system.


## What is Docker?

Docker is a tool that lets you run software in containers. Each container is like a mini-computer with its own environment, but it runs on your existing system.

- No more dependency hell
- Easy to install, update, and remove apps
- Great for self-hosting and home labs

## Why Use Docker?

- **Simplicity:** One command to start or stop an app
- **Portability:** Move containers between machines
- **Isolation:** Apps can't mess with each other
- **Community:** Thousands of ready-to-use images


## Installing Docker

### On Ubuntu/Debian

```bash
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker $USER
```

Log out and back in (or run `newgrp docker`) to use Docker without sudo.


## Basic Docker Commands

- List running containers:
  ```bash
  docker ps
  ```
- List all containers (including stopped):
  ```bash
  docker ps -a
  ```
- List downloaded images:
  ```bash
  docker images
  ```
- Stop a container:
  ```bash
  docker stop <container-name>
  ```
- Remove a container:
  ```bash
  docker rm <container-name>
  ```
- Remove an image:
  ```bash
  docker rmi <image-name>
  ```


## Running Your First Container

Let's run a simple web server using Nginx:

```bash
docker run -d -p 8080:80 --name my-nginx nginx
```

Now visit `http://<your-server-ip>:8080` in your browser. You should see the Nginx welcome page!


## What is Docker Compose?

Docker Compose lets you define and run multi-container apps with a single file (`docker-compose.yml`).

Example:

```yaml
version: '3'
services:
  app:
    image: nginx
    ports:
      - "8080:80"
```

Start it with:

```bash
docker-compose up -d
```


## Learn More

- [Docker Official Docs](https://docs.docker.com/)
- [Awesome Compose Examples](https://github.com/docker/awesome-compose)
- [Self-Hosting Starter Kit](./beginners-guide.md)