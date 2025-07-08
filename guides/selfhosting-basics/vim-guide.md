
---
title: Vim Beginner's Guide
description: A beginner-friendly guide to using Vim, the powerful text editor available on most Linux systems.
---

# Vim Beginner's Guide

Vim is a powerful text editor available on almost every Linux system. This guide covers the basics to get you started.

---

## Opening and Exiting Vim

| Action                | Command                |
|-----------------------|------------------------|
| Open a file           | `vim filename.txt`     |
| Open Vim (no file)    | `vim`                  |
| Quit                  | `:q`                   |
| Quit without saving   | `:q!`                  |
| Save and quit         | `:wq` or `ZZ`          |
| Save (write)          | `:w`                   |

---

## Vim Modes

Vim has several modes. The two most important are:

- **Normal mode**: For navigation and commands (default when you open Vim)
- **Insert mode**: For typing text (press `i` to enter)

| To enter...   | Press... |
|---------------|----------|
| Insert mode   | `i`      |
| Normal mode   | `Esc`    |

---

## Basic Navigation

| Key      | What it does         |
|----------|---------------------|
| `h`      | Left                 |
| `j`      | Down                 |
| `k`      | Up                   |
| `l`      | Right                |
| `0`      | Start of line        |
| `$`      | End of line          |
| `gg`     | Top of file          |
| `G`      | Bottom of file       |
| `w`      | Next word            |
| `b`      | Previous word        |

---

## Editing Text

| Action                | Command                |
|-----------------------|------------------------|
| Enter insert mode     | `i` (before cursor)    |
|                       | `a` (after cursor)     |
| Delete character      | `x`                    |
| Delete line           | `dd`                   |
| Undo                  | `u`                    |
| Redo                  | `Ctrl+r`               |
| Copy (yank) line      | `yy`                   |
| Paste                 | `p`                    |
| Cut (delete) word     | `dw`                   |
| Replace char          | `r` then new char      |

---

## Searching

| Action                | Command                |
|-----------------------|------------------------|
| Search for text       | `/text`                |
| Next match            | `n`                    |
| Previous match        | `N`                    |

---

## Visual Mode (Selecting Text)

- Press `v` to start selecting (character-wise)
- Press `V` for line-wise selection
- Use movement keys to expand selection
- Press `y` to copy, `d` to cut, or `p` to paste after selection

---

## Useful Tips

- Press `Esc` to return to normal mode at any time
- Use `:help` in Vim for built-in documentation
- To edit multiple files: `vim file1.txt file2.txt`
- To split window: `:vsp filename` (vertical), `:sp filename` (horizontal)
- To open file explorer: `:Ex` or `:Explore`
- To repeat last command: `.` (dot)

---

## Getting Better

- Try the Vim tutorial: run `vimtutor` in your terminal
- Practice! Vim is tricky at first but very fast once you learn the basics
- Explore plugins and customizations as you get comfortable

---

For more, see [Vim Adventures](https://vim-adventures.com/) (game), [Open Vim](https://openvim.com/), or the official [Vim documentation](https://www.vim.org/docs.php).
