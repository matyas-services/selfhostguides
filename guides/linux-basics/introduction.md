
# Introduction to Linux: A Step-by-Step Beginner's Guide

Linux is a free, open-source operating system used for everything from web servers to desktops. This guide will help you get started with Linux, even if you’ve never used it before.


## What is Linux?

Linux is an alternative to Windows and macOS. It’s popular for servers, but you can use it on laptops, desktops, and Raspberry Pi too. There are many "flavors" (called distributions or distros), like Ubuntu, Debian, Fedora, and more.


## Choosing a Linux Distribution

- **Ubuntu**: Most beginner-friendly, lots of guides available
- **Debian**: Stable and reliable
- **Linux Mint**: Great for Windows switchers
- **Fedora**: Latest features, good for learning

For servers, Ubuntu Server or Debian are great starting points.


## Installing Linux

1. Download the ISO from the distro’s website (e.g., [Ubuntu](https://ubuntu.com/download))
2. Flash it to a USB drive using [Rufus](https://rufus.ie/) or [Balena Etcher](https://etcher.io/)
3. Boot your computer from the USB
4. Follow the on-screen instructions to install


## First Boot & Logging In

After installation, log in with the username and password you created. You’ll see either a desktop (for desktop distros) or a command line (for servers).


## Basic Linux Commands

Open a terminal (or use SSH for servers). Try these commands:

```bash
pwd        # Show current directory
ls         # List files and folders
cd ~       # Go to home directory
whoami     # Show your username
uname -a   # Show system info
```

See the [Linux Basics Cheatsheet](./linux-basics.md) for more commands.


## Installing Software

On Ubuntu/Debian, use:

```bash
sudo apt update
sudo apt install packagename
```

Example: `sudo apt install nano` (installs the Nano text editor)


## Editing Files

Try editing a file with Nano:

```bash
nano myfile.txt
```

Or try Vim (see our [Vim Guide](./vim-guide.md))


## Shutting Down & Rebooting

```bash
sudo shutdown now   # Shutdown
sudo reboot         # Reboot
```


## Where to Get Help

- [Ask Ubuntu](https://askubuntu.com/)
- [LinuxQuestions.org](https://www.linuxquestions.org/)
- [r/linux4noobs](https://reddit.com/r/linux4noobs)
- Your distro’s official forums and documentation


Linux can seem overwhelming at first, but it’s very rewarding. Start small, experiment, and don’t be afraid to break things—you can always reinstall!