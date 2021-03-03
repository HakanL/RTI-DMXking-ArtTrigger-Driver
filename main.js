var moduleId = "DMXKingArtTrigger";

var g_debug = Config.Get("DebugTrace") == "true";
var g_udp;

if (g_debug)
{
	System.Print(moduleId + ": Initializing DMXKingArtTrigger Driver\r\n");
	System.Print(moduleId + ": Firmware " + System.FirmwareVersion + "\r\n");
	System.Print(moduleId + ": Runtime " + System.Version + "\r\n");
	System.Print(moduleId + ": Version " + "1.0 (2021-02-28)" + "\r\n");
}


udpInit();

// end of init

dbgPrint("Initialization complete");

function dbgPrint(msg)
{
	if (g_debug)
		System.Print(moduleId + ": " + msg);
}

function playShow(nodeAddress, showId)
{
	dbgPrint("playShow(" + nodeAddress + ", " + showId + ")");

	sendArtTrigger(nodeAddress, 0x03, showId);
	sendArtTrigger(nodeAddress, 0x02, 0x47);
}

function stopShow(nodeAddress)
{
	dbgPrint("stopShow(" + nodeAddress + ")");
	
	sendArtTrigger(nodeAddress, 0x02, 0x53);
}

function sendArtTrigger(nodeAddress, subkey, value)
{
	​var array = new Array(530);
	
	array[0] = 0x41;
	array[1] = 0x72;
	array[2] = 0x74;
	array[3] = 0x2d;
	array[4] = 0x4e;
	array[5] = 0x65;
	array[6] = 0x74;
	array[7] = 0x00;
	array[8] = 0x00;
	array[9] = 0x99;
	array[10] = 0x00;
	array[11] = 0x0e;
	array[12] = 0x00;
	array[13] = 0x00;
	array[14] = 0x6a;
	array[15] = 0x6b;
	array[16] = subkey;
	array[17] = value;
	
	var data = String.fromCharCode.apply(null, array);
	g_udp.WriteToAddress(nodeAddress, 6454, data);
}

// response handler
function OnCommRx(message,handle)
{
	dbgPrint("OnCommRx() data = " + message);
}

function udpInit()
{
	dbgPrint("udpInit()");

	g_udp = new UDP(OnCommRx, "", 6454);
	dbgPrint("udpInit() handle = 0x" + g_udp.Handle.toString(16));
}
