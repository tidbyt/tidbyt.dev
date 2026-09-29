# Installing Pixlet
To use Pixlet, one first has to install the CLI tool.

## Install on macOS
First, install [Homebrew](https://brew.sh/) on your computer. Then, in your terminal, run the following:

```
brew install tidbyt/tidbyt/pixlet
```

## Install on Linux (Debian-based)

Download the `pixlet` binary from [the latest release][1] and move it into your `PATH`. A complete example looks like the following:

```bash
# Download the archive.
curl -LO https://github.com/tidbyt/pixlet/releases/download/v0.22.4/pixlet_0.22.4_linux_amd64.tar.gz

# Unpack the archive.
tar -xvf pixlet_0.22.4_linux_amd64.tar.gz

# Ensure the binary is executable.
chmod +x ./pixlet

# Move the binary into your path.
sudo mv pixlet /usr/local/bin/pixlet
```

Non debian-based linux distros may experience some bugs with the binary. You may have to [install it from source](./04_advanced_installation.md).

## Install on Windows
First, install a file archiver that can support `tar.gz` archives if you don't already have one. [NanaZip](https://apps.microsoft.com/store/detail/nanazip/9N8G7TSCL18R) works great if you don't know where to start. Once installed, Download the Windows `pixlet` binary from [the latest release][1] on GitHub. 

Open the file with NanaZip and double click on the archive to see the contents. Then, click extract:
![windows NanaZip extract](img/windows_extract.png)

Navigate to `This PC` -> `Local Disk` -> `Program Files` and create a folder named Pixlet. Copy the extracted contents to this folder:
![windows pixlet folder](img/windows_pixlet_folder.png)

Go to `Settings` and search for `environment variables` and select `Edit the system environment variables`:
![windows env 01](img/windows_env_01.png)

Click `Environment Variables`:
![windows env 02](img/windows_env_02.png)

Under `User space variables`, select `Path` and select `Edit`:
![windows env 03](img/windows_env_03.png)

Click `New` and browse to the newly created Pixlet folder and click ok:
![windows env 04](img/windows_env_04.png)

Open a new instance of PowerShell and run `pixlet version`. If all went well, you should see the following:
![windows env 05](img/windows_env_05.png)

[1]: https://github.com/tidbyt/pixlet/releases/latest
