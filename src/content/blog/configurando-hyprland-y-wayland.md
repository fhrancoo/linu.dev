---
title: "Instalando y configurando Hyprland + Wayland Tips"
description: "Como configurar hyprland y tener el mejor desktop!"
image: "/img_blog/hyprland.webp"
tags: [Linux]
keywords: "linux desktop hyprland wayland hypr archlinux ubuntu nix nixos starship dotfiles dots enviroment window manager wm artix config configuration settings set up setup fedora debian zsh bash"
publishDate: 2023-01-21
---

Si llegaste hasta acá es porque habrás notado que existe __Hyrpland__ o __Wayland__. En esta *especie de tutorial* te voy a enseñar como dejar configurado ambos para que se vea así:

![](/img_blog/hyprland.webp)


## Instalación de Paquetes y Dependencias

*Obviamente, vamos a comenzar instalando los paquetes necesarios y algunas dependencias que vamos a necesitar*

🔅 Paru como __AUR Helper__

*Utilizo [paru](https://github.com/Morganamilo/paru) porque está escrito en __Rust__, es rápido y muy funcional.*

~~~ bash
echo "### Instalando paru como AUR Helper"
mkdir $HOME/Downloads/_cloned-repos
cd $HOME/Downloads/_cloned-repos
git clone --depth 1 https://aur.archlinux.org/paru.git
cd paru
makepkg -si
~~~

🔅 Hyprland + Waybar + Wayland

*Basta con instalar hyprland para que los paquetes de wayland se instalen, ya que figuran como dependendencias del mismo.*

~~~ bash
paru -S hyprland-git waybar-hyprland-git
~~~

::: warning
Alerta: Como seguramente ya lo saben, también deberían tener configurada una terminal. En mi caso yo prefiero [Wezterm](https://github.com/wez/wezterm)
:::

🔅 Inicializar Hyprland

*Para iniciar __Hyprland__ debemos configurar un lanzador, por script, de manera manual. Te voy a dejar un ejemplo para comenzar con algo. __Luego lo vamos a editar.__*

~~~ bash
# en caso de que utilicen nano o neovim:
nano ~/.local/bin/wrappedhl
~~~

*Y agregamos:*
~~~ bash
#!/bin/sh

cd ~

# Log WLR errors and logs to the hyprland log. Recommended
export HYPRLAND_LOG_WLR=1

# Tell XWayland to use a cursor theme
export XCURSOR_THEME=Bibata-Modern-Classic

# Set a cursor size
export XCURSOR_SIZE=24

exec Hyprland
~~~

*Lo que estamos haciendo con el script es agregar unas variables para configurar el inicio del __WM__. `HYPRLAND_LOG_WLR=1` es una variable para obtener los logs de Hyprland.*

*Con `XCURSOR_*` asignamos algunos ajustes para el cursor. Tales como el __tema__, el __tamaño__.*

🔅 Ahora podemos iniciar Hyprland con `wrappedhl`

## Dependencias de utilidad


### Mis Herramientas y Utilidades:

🔅 Neovim & NvChad + [Mi Propia Config](https://github.com/linuxmobile/nvchad-jsx)

~~~ bash
# Instalamos Neovim:
sudo pacman -S neovim

# Clonamos el nvim de NvChad
git clone --depth 1 https://github.com/NvChad/NvChad ~/.config/nvim

# Ejecutamos para que se instale todo con packer
nvim
~~~

🔅 Apps que utilizo en Wayland:

~~~ bash
# viewnior = visor de imágenes
# dunst = Notificaciones
# rofi = launcher
# pavucontrol + pamixer = control de audio y volumen
# ranger + thunar = Administrador de archivos
# zsh + starship
# swaylock
# wlogout

paru -S viewnior dunst rofi pavucontrol pamixer ranger tumbler thunar ffmpegthumbnailer thunar-archive-plugin file-roller zsh starship swaylock wlogout wlsunset grimblast
~~~



## Mi configuración

🔅 Con git vamos a clonar mi repo:

~~~ bash
git clone --depth 1 https://github.com/linuxmobile/hyprland-dots ~/Downloads/hyprland-dots

# copiamos los archivos:
cd ~/Downloads/hyprland-dots
cp -rf .autostart .local .wallpapers .profile ~/

# copiamos solo lo NECESARIO de .config
cd .config

# para el tutorial, voy a copiar solamente
# la configuración de hyprland, waybar y rofi
cp -rf hypr waybar rofi
~~~

::: danger
No olvidarse que yo estoy utilizando una fuente diferente. *Es muy probable, que necesiten instalarse una fuente que sea de Nerd Fonts. Te dejo un ejemplo*
:::

~~~ bash
mkdir -p $HOME/Downloads/nerdfonts/
cd $HOME/Downloads/
wget https://github.com/ryanoasis/nerd-fonts/releases/download/v2.3.1/CascadiaCode.zip
unzip '*.zip' -d $HOME/Downloads/nerdfonts/
rm -rf *.zip
sudo cp -R $HOME/Downloads/nerdfonts/ /usr/share/fonts/
~~~


*Hasta este punto tu configuración debería verse bien. Sin embargo vas a encontrar algunos posibles errores. Voy a intentar ayudarte a encontrarlos*


## Posibles errores

### El clima no funciona en Waybar:

*Si el "widget" del clima no te funciona es porque necesitas `request` de python.*

~~~ bash
# Primero instalamos python + pip
sudo pacman -S python pip

# Luego instalamos request con pip.
pip install requests

# Reinicias waybar, y debería funcionar
~~~

### Cómo ejecutar wrappedhl:

*Wrappedhl es un script, que personalmente lo ubico en .local/bin. Por lo tanto deberías tener en tu configuración de bash o zsh agregado el `PATH`*

~~~ bash
# bash / zsh
export PATH="$HOME/.local/bin:$PATH"
~~~

