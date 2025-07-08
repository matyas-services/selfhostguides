---
title: "How to Set a Static IP Address on Various Operating Systems"
description: "Step-by-step instructions for setting a static IP on Ubuntu, Debian, Windows, and macOS."
---

# How to Set a Static IP Address on Various Operating Systems

Setting a static IP address ensures your server always has the same local network address. This is useful for port forwarding, remote access, and self-hosting.

## Ubuntu / Debian (Linux)

1. Edit the netplan config (for Ubuntu 18.04+):
   ```bash
   sudo nano /etc/netplan/01-netcfg.yaml
   ```
2. Example static IP config:
   ```yaml
   network:
     version: 2 # Netplan config version
     ethernets:
       eth0: # Name of your network interface (may be enp3s0, ens33, etc.)
         dhcp4: no # Disable DHCP (dynamic IP)
         addresses: [192.168.1.100/24] # Set your static IP and subnet (change as needed)
         gateway4: 192.168.1.1 # Your router's IP address
         nameservers:
           addresses: [1.1.1.1,8.8.8.8] # DNS servers (Cloudflare, Google)
   ```

3. Apply changes:
   ```bash
   sudo netplan apply
   ```

::: details Recommended DNS servers
Cloudflare DNS: **1.1.1.1** / **1.1.0.0**

Google DNS: **8.8.8.8** / **8.8.4.4**
:::


## Windows 10/11

1. Open **Settings > Network & Internet > Ethernet** (or Wi-Fi).
2. Click your network, then **Edit** under IP settings.
3. Set to **Manual**, enable IPv4, and enter your static IP, subnet, gateway, and DNS.

## macOS

1. Open **System Settings > Network**.
2. Select your network interface (Wi-Fi or Ethernet).
3. Click **Details** (or Advanced), then **TCP/IP**.
4. Set **Configure IPv4** to **Manually** and enter your static IP, subnet mask, and router.

## Router (Recommended for Beginners)

- Many routers let you reserve a static IP for your device (DHCP reservation) via the web interface. This is often easier and avoids OS-level config.

---

For more details, see your OS or router documentation.
