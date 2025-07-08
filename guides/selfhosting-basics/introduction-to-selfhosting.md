# Introduction to Self-Hosting

> Take control of your digital life by running your own apps and services.


## What is Self-Hosting?

**Self-hosting** means running software — like file storage, media servers, or websites — on your own hardware instead of relying on third-party cloud services (Google, Dropbox, etc).

You become your own cloud provider.

## Why Self-Host?

| Benefit         | Why it Matters                                      |
|----------------|------------------------------------------------------|
| 🔒 Privacy      | Your data stays in your hands                        |
| 💰 Cost-saving  | No subscriptions — use your own hardware             |
| 🛠 Control       | Customize services to your needs                     |
| 🌐 Offline use   | Local access even without internet                   |
| 📚 Learning      | Improve your Linux, networking, and sysadmin skills |


## Common Myths

| Myth | Reality |
|------|---------|
| "It's too hard!" | Many tools are plug-and-play now (e.g. Docker) |
| "You need expensive servers" | A Raspberry Pi or old laptop is enough |
| "It’s not safe" | With basic security (firewall, SSH), it can be very secure |


## What Can You Self-Host?

- **Media Servers** – Plex, Jellyfin
- **Cloud Storage** – Nextcloud, Seafile
- **Password Managers** – Vaultwarden
- **Note-taking** – Joplin, Standard Notes
- **Smart Home** – Home Assistant
- **Chat/Email** – Matrix, Mailcow


## What Do You Need?

| Resource   | Recommendation             |
|------------|----------------------------|
| Hardware   | Raspberry Pi 4, old PC, mini PC, VPS |
| OS         | Linux (Ubuntu Server, Debian) |
| Network    | Router with port forwarding |
| Knowledge  | Basic command line and curiosity! |


## First Steps

1. Choose your hardware (Raspberry Pi, old laptop, VPS)
2. [Install a Linux server (e.g., Ubuntu Server 22.04)](../linux-basics/introduction.md)
3. [Set a static IP address](./static-ip-guide.md)
4. [Install Docker and Docker Compose](./docker-beginners.md)
5. Deploy your first app (e.g., Uptime Kuma, Nextcloud)

---

## Security Basics

- Use SSH keys, not passwords
- Enable a firewall (UFW)
- Regularly update your system
- Keep backups of important data


## Where to Go Next?

- [Starter Kit Guide](starter-kit.md)
- [Docker for Self-Hosting](docker-intro.md)
- [Running Your First App](uptime-kuma-guide.md)
- [Home Networking Tips](home-networking.md)


## Final Thoughts

Self-hosting puts you in control. It’s not just for techies anymore — it's for anyone who values privacy, learning, and digital independence.

> “You don’t have to own a data center to own your data.”