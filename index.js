var data;
var R = 6372.795477598;
var latA = -33.4330426;
var lngA = -70.5793240;   
var latB = -33.5671732;
var lngB = -70.5975089;
data = R * Math.acos( ( Math.sin(latA) * Math.sin(latB) ) + ( Math.cos(latA) * Math.cos(latB) * Math.cos(lngA-lngB) ) );
data = (data * Math.PI)/180;
console.log(data);
