
var fs=require('fs');

var fn = Date();

var fileName = fn + '.txt';

var data = "---------------------------------------------------------------------";
data += "\r\n"; // salto de linea
data += "   SimpleLogger started at " + fn;
data += "\r\n"; // salto de linea
data += "---------------------------------------------------------------------";
data += "\r\n"; // salto de linea


fs.writeFile(fileName, data, function(error){
    if (error)
        console.log(error);
    else
        /* console.log('El archivo fue creado') */;
});

// console.log('última línea del programa');

/*


initialize
	self createLogFile.

ACTIONS

createLogFile

	logFile := FileDirectory default newFileNamed:  TimeStamp now asString, '.txt'.
	
	logFile nextPutAll: '------------------------------------------------------------------------------',String crlf.
	logFile nextPutAll: 'G9Logger started at:  ',TimeStamp now asString, String crlf.
	logFile nextPutAll: '------------------------------------------------------------------------------',String crlf.

closeLogFile 
	
	logFile nextPutAll: '------------------------------------------------------------------------------',String crlf.
	logFile nextPutAll: 'G9Logger ended at: ',TimeStamp now asString, String crlf.
	logFile nextPutAll: '------------------------------------------------------------------------------',String crlf.
	logFile nextPutAll: '-------------------G9Logger is a product from Arduino Software--------------------',String crlf.
	logFile nextPutAll: '----------Web: http://www.arduinosoftware.com---Mail: info@arsol.net----------',String crlf.

	logFile close. 
	
log: anObject
	
	logFile nextPutAll: anObject, String crlf.

logSeparator
	
	logFile nextPutAll: '------------------------------------------------------------------------------',String crlf.

logWithTimeStamp: anObject
	
	logFile nextPutAll: anObject,' ',TimeStamp now asString, String crlf.


ACCESSING

logFile
	^ logFile

logFile: anObject
	logFile := anObject

*/
