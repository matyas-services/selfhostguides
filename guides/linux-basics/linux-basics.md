


# Linux Basics Cheatsheet

This guide covers the most common Linux commands and concepts for beginners. Perfect for self-hosting and server management!


## Navigation

| Command           | What it does           | Example Output                |
|-------------------|-----------------------|-------------------------------|
| `pwd`             | Show current directory | `/home/yourname`              |
| `ls`              | List files/folders     | `file.txt  folder/`           |
| `ls -l`           | Long listing (details) | `-rw-r--r-- 1 user ... file.txt` |
| `cd /path/to/dir` | Change directory       | (no output, just changes dir) |
| `cd ~`            | Go to home directory   | (no output, just changes dir) |
| `cd ..`           | Go up one directory    | (no output, just changes dir) |


## File Operations

| Command                  | What it does            | Example Output                |
|--------------------------|------------------------|-------------------------------|
| `touch file.txt`         | Create empty file       | (no output, creates file)     |
| `mkdir myfolder`         | Make new directory      | (no output, creates folder)   |
| `cp file1.txt file2.txt` | Copy file               | (no output, copies file)      |
| `mv old.txt new.txt`     | Rename or move file     | (no output, renames/moves)    |
| `rm file.txt`            | Delete file             | (no output, deletes file)     |
| `rm -r myfolder`         | Delete folder/contents  | (no output, deletes folder)   |
| `cat file.txt`           | Show file contents      | `Hello world!`                |
| `nano file.txt`          | Edit file in nano       | (opens nano editor)           |


## System Info & Management

| Command      | What it does                        | Example Output                |
|--------------|------------------------------------|-------------------------------|
| `whoami`     | Show your username                  | `yourname`                    |
| `uname -a`   | Show system info                    | `Linux host 5.15.0 ... x86_64`|
| `top`        | Show running processes              | (interactive process list)    |
| `htop`       | Nicer process viewer                | (interactive process list)    |
| `df -h`      | Show disk usage                     | `/dev/sda1  20G  5G  15G ...`|
| `free -h`    | Show memory usage                   | `Mem: 1.9G  1.2G  700M ...`  |
| `uptime`     | Show system uptime                  | `10:00:00 up 2 days, ...`     |


## Package Management (Debian/Ubuntu)

| Command                        | What it does                  | Example Output                |
|--------------------------------|-------------------------------|-------------------------------|
| `sudo apt update`              | Update package list           | `Hit:1 http://...`            |
| `sudo apt upgrade`             | Upgrade installed packages    | `Reading package lists...`    |
| `sudo apt install packagename` | Install a package             | `Setting up packagename ...`  |
| `sudo apt remove packagename`  | Remove a package              | `Removing packagename ...`    |


## Permissions

| Command              | What it does              | Example Output                |
|----------------------|--------------------------|-------------------------------|
| `ls -l`              | Show file permissions     | `-rwxr-xr-x 1 user ...`       |
| `chmod +x script.sh` | Make script executable    | (no output, sets permission)  |
| `sudo`               | Run as admin/root         | (prompts for password)        |


## Networking

| Command            | What it does              | Example Output                |
|--------------------|--------------------------|-------------------------------|
| `ip a`             | Show IP addresses         | `inet 192.168.1.100/24 ...`   |
| `ping 1.1.1.1`     | Test network connection   | `64 bytes from 1.1.1.1 ...`   |
| `curl example.com` | Fetch a web page          | `<!doctype html>...`          |
| `ssh user@host`    | Connect to another machine| `user@host's password:`       |


## Tips

- Use `Tab` to auto-complete commands and filenames.
- Use the up/down arrows to scroll through command history.
- `man <command>` shows the manual for a command (e.g., `man ls`).
- Use `Ctrl+C` to stop a running command.
- Use `Ctrl+L` to clear the terminal screen.

For more, check out [The Linux Command Line Book (free)](https://linuxcommand.org/tlcl.php) or your distro’s documentation.