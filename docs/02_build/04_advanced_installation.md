# Advanced Installation
This guide is for users who wish to install Pixlet from source 🤓. If you're new here, check out [installing pixlet](./02_installing_pixlet.md) for a standard installation.

## Build from source
This is for users looking to build Pixlet from source on macOS, Linux, or other Unix like environment. If you're trying to build for windows, check out the [windows build instructions](#windows-build-instructions).

### Prerequisites

- Having [go installed].
- Having [node installed].
- Having [libwebp installed].

### Steps
- Clone the repository:
	```console
	git clone https://github.com/tidbyt/pixlet
	```
- Cd into the repository:
	```console
	cd pixlet
	```
- Build the frontend:
	```console
	npm install
	npm run build
	```
- Build the binary:
	```console
	make build
	```
- After that you will have the binary `/pixlet`, which you should copy to your path.

## Windows build instructions
Building Pixlet (on Windows)

### Prerequisites

- Having [MSYS2 installed].
- Having [node installed].

### Steps
- Start the [MINGW64 environment].
- Install dependencies:
	```console
	pacman -S git
	pacman -S mingw-w64-x86_64-go
	pacman -S mingw-w64-x86_64-toolchain
	pacman -S mingw-w64-x86_64-libwebp
	```
- Add `node` and `npm` to your path:
	```console
	export PATH=$PATH:/c/Program\ Files/nodejs
	```
- Clone the repository:
	```console
	git clone https://github.com/tidbyt/pixlet
	```
- Cd into the repository:
	```console
	cd pixlet
	```
- Build the frontend:
	```console
	npm install
	npm run build
	```
- Build the binary:
	```console
	make build
	```
- After that you will have the binary `/pixlet.exe`, which you should copy to your path.

[node installed]: https://nodejs.org/en/download/
[MSYS2 installed]: https://www.msys2.org/#installation
[MINGW64 environment]: https://www.msys2.org/docs/environments/

[go installed]: https://golang.org/dl/
[node installed]: https://nodejs.org/en/download/
[libwebp installed]: https://developers.google.com/speed/webp/download

[1]: https://github.com/tidbyt/pixlet/releases/latest