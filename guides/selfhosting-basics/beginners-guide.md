---
title: "Self-Hosting Beginner's Guide"
description: "Your hands-on guide to get started with self-hosting — from choosing hardware to running your first app."
---

# Self-Hosting Beginner's Guide

Your hands-on guide to get started with self-hosting — from choosing hardware to running your first app.


## What You’ll Need

| Component        | Recommended Options                                           |
|------------------|--------------------------------------------------------------|
| Hardware         | Raspberry Pi 4, old laptop/desktop, mini PC, or VPS          |
| Operating System | Ubuntu Server, Debian, DietPi                                |
| Networking       | Access to your router for port forwarding or VPN/tunneling  |
| Internet         | Optional Dynamic DNS (e.g., DuckDNS) for external access     |
| Skills           | Basic command line (SSH, apt), willingness to learn          |


## Step 1: Choose Your Hardware

You don’t need expensive gear. Here are a few starting points:

- Raspberry Pi 4 / 5: Great for learning and low-power 24/7 use  
- Old Laptop or Desktop: Reuse existing hardware  
- Mini PCs (e.g. Intel NUC, Beelink): Quiet and powerful  
- VPS (e.g. Hetzner, DigitalOcean): If you prefer remote hosting  


## Step 2: Install a Server OS

We recommend starting with a lightweight Linux server.

### Ubuntu Server (Beginner Friendly)

- Download ISO: https://ubuntu.com/download/server  
- Flash to USB: Use [Rufus](https://rufus.ie/) or [Balena Etcher](https://etcher.io/)  
- Install using minimal setup  
- Set up an admin user and password  

Optional:  
- [Set static IP address via router or system config](./static-ip-guide.md)  


## Step 3: Secure Your Server

Once installed, SSH into your server:

```bash
ssh username@your-server-ip
```

Then:

```bash
# Create a new user and disable root login
sudo adduser yourname
sudo usermod -aG sudo yourname

# Set up a basic firewall
sudo apt update && sudo apt install ufw -y
sudo ufw allow OpenSSH
sudo ufw enable

# Enable automatic security updates
sudo apt install unattended-upgrades -y
sudo dpkg-reconfigure --priority=low unattended-upgrades

# Install fail2ban to block brute-force attempts
sudo apt install fail2ban -y
```


> [!TIP]
> New to Docker? Check out our [Docker Beginner's Guide](./docker-beginners.md) for a simple introduction and practical tips!

## Step 4: Install Docker & Docker Compose

Docker makes it easy to install self-hosted apps in seconds.

### Install Docker

```bash
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker $USER
```

Then log out and back in (or run `newgrp docker`) to apply Docker group.

### Install Docker Compose

```bash
sudo apt install docker-compose -y
```


## Step 5: Run Your First App

Let’s run [Uptime Kuma](https://github.com/louislam/uptime-kuma) – a beautiful uptime monitor.

```bash
mkdir -p ~/apps/uptime-kuma && cd ~/apps/uptime-kuma
nano docker-compose.yml
```

Paste:

```yaml
version: '3'
services:
  uptime-kuma:
    image: louislam/uptime-kuma
    container_name: uptime-kuma
    ports:
      - "3001:3001"
    volumes:
      - ./data:/app/data
    restart: always
```

Save and exit (`Ctrl+O`, `Enter`, `Ctrl+X`), then run:

```bash
docker-compose up -d
```


Now visit:  
```
http://<your-server-ip>:3001
```

**And your website should be up and running! :tada:**


## Optional: Access From Anywhere

To access your apps from outside your home:

### Option A: Port Forwarding

- Log into your router  
- Forward external port 80/443 to your server’s IP  

> Be careful exposing services directly — secure them!

### Option B: Dynamic DNS + Reverse Proxy

- Set up free dynamic DNS (e.g. [DuckDNS](https://www.duckdns.org/))  
- Use Nginx Proxy Manager or Caddy for SSL and domain routing  

### Option C: Cloud Tunnels (No Port Forwarding)

- [Tailscale](https://tailscale.com/) (VPN-based)  
- [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/) (secure HTTPS tunnel)  


## Step 6: Keep Things Updated

Keeping your stack up-to-date is important for security and stability.

```bash
cd ~/apps/uptime-kuma
docker-compose pull
docker-compose up -d
```

You can also install **Watchtower** for automatic container updates.


## Recommended Folder Structure

```bash
~/apps/
  ├── uptime-kuma/
  │    └── docker-compose.yml
  ├── nextcloud/
  ├── jellyfin/
  └── nginx-proxy-manager/
```


## What to Host Next?

| Category       | App Suggestions                      |
|----------------|------------------------------------|
| File Sync      | Nextcloud, Syncthing                |
| Media Server   | Jellyfin, Plex                     |
| Notes & Wiki   | Joplin Server, BookStack, Outline  |
| Passwords      | Vaultwarden                       |
| DNS/Ad Blocker | Pi-hole, AdGuard Home             |
| Automation     | Home Assistant, Node-RED            |
| Git Hosting    | Gitea, Forgejo                     |
| Dashboards     | Homer, Flame, Dashy                |


## Basic Security Reminders

- Use SSH keys instead of passwords  
- Don’t expose Docker admin tools (e.g., Portainer) publicly  
- Set up HTTPS for every exposed service  
- Always back up critical config and data  


Congratulations! You’ve taken your first step toward digital independence.

> “Self-hosting isn't just for nerds — it's for everyone who wants to control their digital life.”