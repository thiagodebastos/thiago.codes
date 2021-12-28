# Set up Ubuntu from scratch

## Housekeeping


2. Sign in to Firefox

## Configs
```bash
setxkbmap -option caps:escape
```

## Software
1. Update software
```bash
sudo apt update && sudo apt upgrade -y
```

Pre-requisite packages:
```bash
sudo apt install git curl wget fzf
```

## ZSH
```bash
sudo apt install zsh
```

Install OhMyZsh!
```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Install OhMyZsh plugins:

```bash
# zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

# fzf-tab
git clone https://github.com/Aloxaf/fzf-tab ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/fzf-tab
```


## Dev env
If coming from previous install:
Copy `.ssh` and `.gpg` from previous Linux install

`ssh-add`

`ssh -T git@github.com`


### NodeJS with nvm
Install nvm
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

Add to `.zshrc`
```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

Install NodeJS LTS
```bash
nvm install --lts
```

### Python

```
sudo apt install python3.9-venv python3-pip
```

I like to create the following alias:
```
alias python="python3"
```

### Neovim
Install from appimage:
```bash
curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim.appimage
chmod u+x nvim.appimage
mkdir ~/.local/bin
mv ./nvim.appimage ~/.local/bin/
```

Optional Dependencies
```
pip install neovim
pip install pynvim
```
If the above gets stuck, try:
```
pip install -v neovim
```
If that gets stuck on something like `loading MacOS`, then try this fix from https://github.com/pypa/pip/issues/7883:

```
export PYTHON_KEYRING_BACKEND=keyring.backends.null.Keyring
```


Add `~/.local/bin/` to `$PATH` in `.zshrc`

```bash
export PATH=$HOME/.local/bin:$PATH
```

OR Install from release:
```bash
bash <(curl -s https://raw.githubusercontent.com/LunarVim/LunarVim/rolling/utils/installer/install-neovim-from-release)
```

Fresh install:
Generate ssh and gpg credentials.

## Other

* NerdFonts
* Telegram
* Signal

Enable Function key for Keychron K3
```bash
echo 0 | sudo tee /sys/module/hid_apple/parameters/fnmode
```

