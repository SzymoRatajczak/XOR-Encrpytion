<script src="sjcl.js"></script>
<script src="bitArray.js"></script>
<script>
function xor(key,msg)
{
	var ba=sjcl.bitArray;
	var xor=ba._xor4;
	var msgLength=sjcl.bitArray.bitLength(msg);
	var keyLength=sjcl.bitArray.bitLength(key);
	
	var c=[];
	var slice=null;
	
	for(var i=0;i<msgLength;i+=keyLength)
	{
		
		slice=sjcl.bitArray.bitSlice(msg,i);
		slice=xor(key,slice);
		var win=msgLength-i;
		var bits=win>keyLength?keyLength:win;
		c=sjcl.bitArray.concat(c,sjcl.bitArray.bitSlice(slice,0,bits));
	}
	return c;
	
	
	
	var key=sjcl.codec.utf8String.toBits("???");
	var msgA=sjcl.codec.utf8String.toBits("Skeleton");
	var msgB=sjcl.codec.utf8String.toBits("wereWolof");
	
	var ciphA=xor(key,msgA);
	var ciphB=xor(key,msgB);

var xorPlainText=xor(msgA,msgB);
var xorCiphetText=xor(ciphA,ciphB);	
	
	
}

</script>
