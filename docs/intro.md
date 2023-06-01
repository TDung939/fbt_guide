---
sidebar_position: 1
---


# Getting Started

## What you'll need

- [Arduino IDE](https://www.arduino.cc/en/software)
- USB-A to USB-B 2.0
- Screwdriver
- Heat Gun or Hot Air Dryer
- Hot Glue Gun

## Install Arduino IDE Libraries {#libraries}

- In the Arduino IDE program, go to Tools > Manage Libraries...
- Search and install these libraries with the correct version
  - **U8g2** by **oliver** at version **2.33.15**
  - **GFX Library for Arduino** by **Moon On Our Nation** at version **1.3.1**
  - **OneWire** by **Paul Stoffregen** at version **2.3.7**
  - **DallasTemperature** by **Miles Burton** at version **3.9.0**


## Sketch Setup with Arduino IDE 2
- Download the firmware from this [Github Repo](https://github.com/TDung939/FBT_FIRMWARE). 
- Press the **Code** button and click on **Download ZIP**. Unzip the folder.

<img src="/fbt_guide/img/upload/github.png"/>

- Open the Arduino IDE 2
- Choose File > Open... and select the required sketch.
- The editor will ask you to put the sketch inside a folder. Select OK
  
<img src="/fbt_guide/img/upload/folder.png"/>

## How to upload a sketch {#upload}
1. Use the USB-A to USB-B 2.0 cable to connect the Arduino board to the computer. A red LED should light up on the PCB.

<img src="/fbt_guide/img/upload/upload.jpg" width="450" />

2. Open the Arduino IDE 2.
3. With the editor open, let's take a look at the toolbar at the top. At the very left, there is a **checkmark** and an **arrow pointing right**. The checkmark is used to **verify**, and the arrow is used to **upload**.

<img src="/fbt_guide/img/upload/1.png" width="450" />

4. We need decide which board we want to upload to. Beside the verify and upload button you should see a a drop down menu, press "Select other board and port..." in the drop-down and follow the instructions. Choose the **Arduino Uno** board and the correct port (It should be something like this:

- `COM3 (Arduino Uno)` 
- `/dev/cu.usbmodem14101`
- `/dev/ttyACM0`

<img src="/fbt_guide/img/upload/port.png" />

1. Click on the verify tool (checkmark) in order to check if the sketch is going to compile successfully. After a few seconds, we can see the result of the action in the console (black box in the bottom). (Remember to install all of the [libraries](#libraries) mentioned above)

<img src="/fbt_guide/img/upload/2.png"/>

1. Click on the upload button, and it will start uploading the sketch to the board.

<img src="/fbt_guide/img/upload/3.png"/>

## Fail to Upload
If the sketch fails to upload, try the following:
- Restart the Arduino IDE.
- Re-plug the USB cable.
- Change to another USB port.