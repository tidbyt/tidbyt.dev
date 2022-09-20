# Installing Pixlet
To use Pixlet, one first has to install the CLI tool.

## Install on macOS

```
brew install tidbyt/tidbyt/pixlet
```

## Install on Linux

Download the `pixlet` binary from [the latest release][1].

## Install on Windows
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

## Build from source
Note - if you're trying to build for windows, check out the [windows build instructions](BUILD_WINDOWS.md).

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

[go installed]: https://golang.org/dl/
[node installed]: https://nodejs.org/en/download/
[libwebp installed]: https://developers.google.com/speed/webp/download

[1]: https://github.com/tidbyt/pixlet/releases/latest