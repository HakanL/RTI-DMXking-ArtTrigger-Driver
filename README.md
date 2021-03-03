# RTI Corp DMXking ArtTrigger Driver
Driver to send out ArtTrigger playback commands via ArtNet to DMXking nodes from RTI Corp remotes/controllers

# Usage
Add the driver to your [RTI Corp](http://rticorp.com/) controller in the Integration Designer from the [release section](https://github.com/HakanL/RTI-DMXking-ArtTrigger-Driver/releases/tag/v1.0). Then add a command/macro that calls the driver command PlayShow.
It takes two parameters, NodeAddress (IP of the DMXking node) and ShowId (0-255, 1 for the first show).
The other command is StopPlayback that also takes the NodeAddress parameter.
The NodeAddress can be a broadcast address as well to send this to multiple DMXking nodes (for example 192.168.1.255).

It has been tested with a XP-6 controller, but it's likely compatible with others. Please open issues here if you run into problems
Please note that I am not a RTI dealer, but I have been given permissions by RTI Corp to post the driver to the public for installers/dealers to
use without cost. I did this because I'm a distributor of the [DMXking](http://www.dmxking.com/) products and this helps more users enjoy the products.
To buy these products in the US/CA please go here: [DMX Pro Sales](https://dmxprosales.com/).
