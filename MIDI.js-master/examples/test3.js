$('#sequence1').change ( function() {
   var which = $(this).val();
   removeNotesOnScore();
   switch (which) {
   	case 'evRondo':

      eventArray = makeEventArray10();
	  eventArrayB = makeEventArray10();
      eventToScore(eventArray);
	  makeSheet(7);
	  $('#bpm').text($('#tempo').val());
 		break;
		
	case 'evA':

      eventArray = makeEventArray5f();
	  eventArrayB = makeEventArray5f();
      eventToScore(eventArray);
	  makeSheet(7);
	  $('#bpm').text($('#tempo').val());
 		break;
		
   	case 'evB':

      eventArray = makeEventArrayPertato();
	  eventArrayB = makeEventArrayPertato();
      eventToScore(eventArray);
	  makeSheet(15);
	  $('#bpm').text($('#tempo').val());
 		break;
   	
	case 'evC':

      eventArray = makeEventArray11();
	  eventArrayB = makeEventArray11();
      eventToScore(eventArray);
	  makeSheet(15);
	  $('#bpm').text($('#tempo').val());
 		break;
		
	case 'evD':

      eventArray = makeEventArray9();
	  eventArrayB = makeEventArray9();
      eventToScore(eventArray);
	  makeSheet(15);
	  $('#bpm').text($('#tempo').val());
 		break;
	
	case 'evE':

      eventArray = makeEventArray12();
	  eventArrayB = makeEventArray12();
      eventToScore(eventArray);
	  makeSheet(15);
	  $('#bpm').text($('#tempo').val());
 		break;
   }	
   //makeEventArrayStart

   keyframes = makeSequence(eventArray);
   keyframesB = makeSequence(eventArrayB);
   
   //printKeyframe (keyframes);
   
});
$('#sequence2').change ( function() {
   var which = $(this).val();
   removeNotesOnScore();
   switch (which) {

   	case 'ev11':

      eventArray = makeEventArrayEx1();
	  eventArrayB = makeEventArrayEx2();
	  
      eventToScore(eventArray);
	  makeSheet(20);
	  $('#bpm').text($('#tempo').val());
 		break;

    case 'ev15':
	  eventArray = makeEventArrayHH2();
	  eventArrayB = makeEventArrayHH1();
      eventToScore(eventArray);
	  makeSheet(15);
	  $('#bpm').text($('#tempo').val());
 		break;

   }
    
   //makeEventArrayStart

   keyframes = makeSequence(eventArray);
   keyframesB = makeSequence(eventArrayB);
   
   //printKeyframe (keyframes);

});

function printKeyframe(keyframes) {
    for (var i = 0; i < keyframes.length; i++) {

       console.log (i + ':' + 'key: ' + keyframes[i].key.toFixed(2) + ' pos: ' + keyframes[i].pos);
    }
}






function makeEventArray10 () {  // rondo Mozart
  var eventArray = [];
  timeSignatureX=4;
  timeSignatureY=4;
  eventArray.push(new Event(0.00,  0.25,  74, 'DS', 0.8, 0.25) );
  eventArray.push(new Event(0.25,  0.25,  72, 'US') );
  eventArray.push(new Event(0.50,  0.25,  71, 'DS') );
  eventArray.push(new Event(0.75,  0.25,  72, 'US') );

  eventArray.push(new Event(1.00,  0.25,  74, 'DS') );
  eventArray.push(new Event(1.25,  0.25,  72, 'US') );
  eventArray.push(new Event(1.50,  0.25,  71, 'DS') );
  eventArray.push(new Event(1.75,  0.25,  72, 'US') );

  eventArray.push(new Event(2.00,  0.25,  74, 'DS') );
  eventArray.push(new Event(2.25,  0.25,  72, 'US') );
  eventArray.push(new Event(2.50,  0.25,  71, 'DS') );
  eventArray.push(new Event(2.75,  0.25,  72, 'US') );

  eventArray.push(new Event(3.00,  0.25,  74, 'DS') );
  eventArray.push(new Event(3.25,  0.25,  72, 'US') );
  eventArray.push(new Event(3.50,  0.25,  71, 'DS') );
  eventArray.push(new Event(3.75,  0.25,  72, 'US') );
  ///////
  eventArray.push(new Event(4.00,  0.25,  74, 'DS', 0.8, 0.25) );
  eventArray.push(new Event(4.25,  0.25,  72, 'US') );
  eventArray.push(new Event(4.50,  0.25,  71, 'DS') );
  eventArray.push(new Event(4.75,  0.25,  72, 'US') );

  eventArray.push(new Event(5.00,  0.25,  74, 'DS') );
  eventArray.push(new Event(5.25,  0.25,  72, 'US') );
  eventArray.push(new Event(5.50,  0.25,  71, 'DS') );
  eventArray.push(new Event(5.75,  0.25,  72, 'US') );

  eventArray.push(new Event(6.00,  0.25,  74, 'DS') );
  eventArray.push(new Event(6.25,  0.25,  72, 'US') );
  eventArray.push(new Event(6.50,  0.25,  71, 'DS') );
  eventArray.push(new Event(6.75,  0.25,  72, 'US') );

  eventArray.push(new Event(7.00,  0.25,  74, 'DS') );
  eventArray.push(new Event(7.25,  0.25,  72, 'US') );
  eventArray.push(new Event(7.50,  0.25,  71, 'DS') );
  eventArray.push(new Event(7.75,  0.25,  72, 'US') );
  ///////
  eventArray.push(new Event(8.00,  0.25,  74, 'DS', 0.8, 0.25) );
  eventArray.push(new Event(8.25,  0.25,  72, 'US') );
  eventArray.push(new Event(8.50,  0.25,  71, 'DS') );
  eventArray.push(new Event(8.75,  0.25,  72, 'US') );

  eventArray.push(new Event(9.00,  0.25,  74, 'DS') );
  eventArray.push(new Event(9.25,  0.25,  72, 'US') );
  eventArray.push(new Event(9.50,  0.25,  71, 'DS') );
  eventArray.push(new Event(9.75,  0.25,  72, 'US') );

  eventArray.push(new Event(10.00,  0.25,  74, 'DS') );
  eventArray.push(new Event(10.25,  0.25,  72, 'US') );
  eventArray.push(new Event(10.50,  0.25,  71, 'DS') );
  eventArray.push(new Event(10.75,  0.25,  72, 'US') );

  eventArray.push(new Event(11.00,  0.25,  74, 'DS') );
  eventArray.push(new Event(11.25,  0.25,  72, 'US') );
  eventArray.push(new Event(11.50,  0.25,  71, 'DS') );
  eventArray.push(new Event(11.75,  0.25,  72, 'US') );
  ///////
  eventArray.push(new Event(12.00,  0.25,  74, 'DS', 0.8, 0.25) );
  eventArray.push(new Event(12.25,  0.25,  72, 'US') );
  eventArray.push(new Event(12.50,  0.25,  71, 'DS') );
  eventArray.push(new Event(12.75,  0.25,  72, 'US') );

  eventArray.push(new Event(13.00,  0.25,  74, 'DS') );
  eventArray.push(new Event(13.25,  0.25,  72, 'US') );
  eventArray.push(new Event(13.50,  0.25,  71, 'DS') );
  eventArray.push(new Event(13.75,  0.25,  72, 'US') );

  eventArray.push(new Event(14.00,  0.25,  74, 'DS') );
  eventArray.push(new Event(14.25,  0.25,  72, 'US') );
  eventArray.push(new Event(14.50,  0.25,  71, 'DS') );
  eventArray.push(new Event(14.75,  0.25,  72, 'US') );

  eventArray.push(new Event(15.00,  0.25,  74, 'DS') );
  eventArray.push(new Event(15.25,  0.25,  72, 'US') );
  eventArray.push(new Event(15.50,  0.25,  71, 'DS') );
  eventArray.push(new Event(15.75,  0.25,  72, 'US') );
  
  $('#tempo').val(50);
  period = 16;
  return eventArray;
}

function makeEventArray5f () {  // upbow staccato 
	var eventArray = [];
	timeSignatureX=4;
	timeSignatureY=4;
	eventArray.push(new Event(0,      1, 60, 'D', 0.8, 0.5) );
	eventArray.push(new Event(1,    0.25, 62, 'US') );
	eventArray.push(new Event(1.25, 0.25, 64, 'SS') );
	eventArray.push(new Event(1.5, 0.25, 65, 'SS') );
	eventArray.push(new Event(1.75, 0.25, 67, 'SS') );
	eventArray.push(new Event(2,  2, 69, 'S') );

	eventArray.push(new Event(4,      1, 59, 'D', 0.8, 0.5) );
	eventArray.push(new Event(5,    0.25, 60, 'US') );
	eventArray.push(new Event(5.25, 0.25, 62, 'SS') );
	eventArray.push(new Event(5.5, 0.25, 64, 'SS') );
	eventArray.push(new Event(5.75, 0.25, 66, 'SS') );
	eventArray.push(new Event(6,  2, 67, 'S') );

	eventArray.push(new Event(8,      1, 57, 'D', 0.8, 0.5) );
	eventArray.push(new Event(9,    0.25, 59, 'US') );
	eventArray.push(new Event(9.25, 0.25, 60, 'SS') );
	eventArray.push(new Event(9.5, 0.25, 62, 'SS') );
	eventArray.push(new Event(9.75, 0.25, 64, 'SS') );
	eventArray.push(new Event(10,  2, 66, 'S') );

	eventArray.push(new Event(12,      0.5, 67, 'D', 0.8, 0.5) );
	eventArray.push(new Event(12.5,    0.25, 69, 'US') );
	eventArray.push(new Event(12.75,   0.25, 71, 'SS') );
	eventArray.push(new Event(13,    0.25, 72, 'SS') );
	eventArray.push(new Event(13.25, 0.25, 74, 'SS') );
	eventArray.push(new Event(13.5, 0.25, 76, 'SS') );
	eventArray.push(new Event(13.75, 0.25, 78, 'SS') );
	eventArray.push(new Event(14,  2, 79, 'S') );

	period = 16;
	return eventArray;
}

function makeEventArrayPertato () { 
	var eventArray = [];
	timeSignatureX=4;
	timeSignatureY=4;
	eventArray.push(new Event(0.0,  1,  1, 'L', 0, 0) );
	eventArray.push(new Event(1.0,  1,  1, 'L') ); 
	eventArray.push(new Event(2.0,  1,  62, 'D',0.8,0.5) );
	
	eventArray.push(new Event(3.0,  1.5,  67, 'U') );
	eventArray.push(new Event(4.5,  0.5,  69, 'D') );
	eventArray.push(new Event(5.0,  0.5,  70, 'SS') );
	eventArray.push(new Event(5.5,  0.5,  72, 'SS') );
	
	eventArray.push(new Event(6.0,  1, 74, 'U') );
	eventArray.push(new Event(7.0,  1, 74, 'SP') );
	eventArray.push(new Event(8.0,  1, 74, 'SP') );
	
	eventArray.push(new Event(9.0,  2.0, 74, 'D') );
	eventArray.push(new Event(11.0,  0.1, 74, 'S') );
	eventArray.push(new Event(11.1,  0.1, 75, 'S') );
	eventArray.push(new Event(11.2,  0.1, 74, 'S') );
	eventArray.push(new Event(11.3,  0.1, 73, 'S') );
	eventArray.push(new Event(11.4,  0.1, 74, 'S') );
	eventArray.push(new Event(11.5,  0.25, 77, 'S') );
	eventArray.push(new Event(11.75,  0.25, 75, 'S') );
	
	eventArray.push(new Event(12.0,  2, 74, 'U') );
	eventArray.push(new Event(14.0,  1, 62, 'U') );
	
	eventArray.push(new Event(15.0,  1.5,  67, 'D') );
	eventArray.push(new Event(16.5,  0.5,  69, 'U') );
	eventArray.push(new Event(17.0,  0.5,  70, 'S') );
	eventArray.push(new Event(17.5,  0.5,  72, 'S') );
	
	eventArray.push(new Event(18.0,  1, 74, 'D') );
	eventArray.push(new Event(19.0,  1, 74, 'SP') );
	eventArray.push(new Event(20.0,  1, 74, 'SP') );

	period = 21; 
	return eventArray;
}


function makeEventArray11 () { // Berliner luft (lift example)
	var eventArray = [];
	eventArray.push(new Event(0.0,  1.5,  67, 'D', 0.8, 0.25) );
  eventArray.push(new Event(1.5,  0.5,  66, 'U') );
  eventArray.push(new Event(2.0,  0.5,  67, 'D') );
  eventArray.push(new Event(2.5,  0.5, 75, 'U') );
  eventArray.push(new Event(3.0,  0.5, 67, 'D') );
  eventArray.push(new Event(3.5,  0.5, 74, 'U') );
  eventArray.push(new Event(4.0,  1.0, 72, 'DL') );
  eventArray.push(new Event(5.0,  1.0, 72, 'DL') );
  eventArray.push(new Event(6.0,  1.0, 72, 'D') );

  eventArray.push(new Event(7.0,  1.0, 1, 'L') );

  eventArray.push(new Event(8.0,  1.5,  67, 'D', 0.8, 0.25) );
  eventArray.push(new Event(9.5,  0.5,  66, 'U') );
  eventArray.push(new Event(10.0,  0.5,  67, 'D') );
  eventArray.push(new Event(10.5,  0.5, 75, 'U') );
  eventArray.push(new Event(11.0,  0.5, 67, 'D') );
  eventArray.push(new Event(11.5,  0.5, 74, 'U') );
  eventArray.push(new Event(12.0,  1.0, 72, 'UL') );
  eventArray.push(new Event(13.0,  1.0, 72, 'UL') );
  eventArray.push(new Event(14.0,  1.0, 72, 'U') );

  period = 15;

	return eventArray;
}

function makeEventArray9 () {  // humoresque
	var eventArray = [];
	timeSignatureX=4;
	timeSignatureY=4;
	// bar 1
	eventArray.push(new Event(0,    0.5,  67, 'D', 0.8, 0.5) );
	eventArray.push(new Event(0.5,  0.25,  1) );
	eventArray.push(new Event(0.75, 0.25, 69, 'U') );

	eventArray.push(new Event(1,    0.5,  67, 'S', 0.8, 0.5) );
	eventArray.push(new Event(1.5,  0.25,  1) );
	eventArray.push(new Event(1.75, 0.25, 69, 'D') );

	eventArray.push(new Event(2,    0.5,  71, 'S', 0.8, 0.5) );
	eventArray.push(new Event(2.5,  0.25,  1) );
	eventArray.push(new Event(2.75, 0.25, 74, 'U') );

	eventArray.push(new Event(3,    0.5,  76, 'S', 0.8, 0.5) );
	eventArray.push(new Event(3.5,  0.25,  1) );
	eventArray.push(new Event(3.75, 0.25, 74, 'D') );

	// bar 2
	eventArray.push(new Event(4,    0.5,  79, 'S', 0.8, 0.5) );
	eventArray.push(new Event(4.5,  0.25,  1) );
	eventArray.push(new Event(4.75, 0.25, 78, 'U') );

	eventArray.push(new Event(5,    0.5,  81, 'S', 0.8, 0.5) );
	eventArray.push(new Event(5.5,  0.25,  1) );
	eventArray.push(new Event(5.75, 0.25, 79, 'D') );

	eventArray.push(new Event(6,    0.5,  78, 'S', 0.8, 0.5) );
	eventArray.push(new Event(6.5,  0.25,  1) );
	eventArray.push(new Event(6.75, 0.25, 81, 'U') );

	eventArray.push(new Event(7,    0.5,  79, 'S', 0.8, 0.5) );
	eventArray.push(new Event(7.5,  0.25,  1) );
	eventArray.push(new Event(7.75, 0.25, 76, 'D') );

	// bar 3
	eventArray.push(new Event(8,    0.5,  74, 'S', 0.8, 0.5) );
	eventArray.push(new Event(8.5,  0.25,  1) );
	eventArray.push(new Event(8.75, 0.25, 74, 'U') );

	eventArray.push(new Event(9,    0.5,  76, 'S', 0.8, 0.5) );
	eventArray.push(new Event(9.5,  0.25,  1) );
	eventArray.push(new Event(9.75, 0.25, 74, 'D') );

	eventArray.push(new Event(10,    0.5,  79, 'S', 0.8, 0.5) );
	eventArray.push(new Event(10.5,  0.25,  1) );
	eventArray.push(new Event(10.75, 0.25, 76, 'U') );

	eventArray.push(new Event(11,    0.5,  74, 'S', 0.8, 0.5) );
	eventArray.push(new Event(11.5,  0.25,  1) );
	eventArray.push(new Event(11.75, 0.25, 71, 'D') );

	// bar 4
	eventArray.push(new Event(12,    1,  69, 'S', 0.8, 0.5) );
	eventArray.push(new Event(13,    1,  1, 'S', 0.8, 0.5) );
	eventArray.push(new Event(14,    1,  1, 'S', 0.8, 0.5) );
	eventArray.push(new Event(15,    1,  1, 'S', 0.8, 0.5) );
	$('#tempo').val(60);
	period = 15;
	return eventArray;
}

function makeEventArray12 () { // Haydn cello concerto in C
	var eventArray = [];
	timeSignatureX=4;
	timeSignatureY=4;
	eventArray.push(new Event(0.0,  0.75,  72, 'D', 0.8, 0.5) );
	eventArray.push(new Event(0.75,  0.125,  74, 'S') );
	eventArray.push(new Event(0.875,  0.125,  72, 'S') );
	eventArray.push(new Event(1.0,  0.375, 71, 'U') );
	eventArray.push(new Event(1.375,  0.125, 72, 'D') );
	eventArray.push(new Event(1.5,  0.375, 74, 'U') );
	eventArray.push(new Event(1.875,  0.125, 76, 'D') );
	eventArray.push(new Event(2.0,  0.5, 77, 'U') );
	eventArray.push(new Event(2.5,  1.0, 77, 'D') );
	eventArray.push(new Event(3.5,  0.5, 76, 'S') );

	eventArray.push(new Event(4.0,  0.75,  74, 'U', 0.8, 0.5) );
	eventArray.push(new Event(4.75,  0.125,  76, 'S') );
	eventArray.push(new Event(4.875,  0.125,  77, 'S') );
	eventArray.push(new Event(5.0,  0.5, 76, 'S') );
	eventArray.push(new Event(5.5,  0.125, 72, 'D') );
	eventArray.push(new Event(5.625,  0.125, 71, 'S') );
	eventArray.push(new Event(5.75,  0.125, 69, 'S') );
	eventArray.push(new Event(5.875,  0.125, 71, 'S') );
	eventArray.push(new Event(6.0,  0.5, 72, 'S') );
	eventArray.push(new Event(6.5,  0.5, 67, 'US') );
	eventArray.push(new Event(7.0,  0.5, 60, 'DS') );
	eventArray.push(new Event(7.5,  0.5, 1, 'L') );

	eventArray.push(new Event(8.0,  0.5, 60, 'U', 0.8, 0.25) );
	eventArray.push(new Event(8.5,  0.5, 72, 'DL') );
	eventArray.push(new Event(9.0,  0.5, 71, 'D') );
	eventArray.push(new Event(9.5,  0.5, 1) );

	eventArray.push(new Event(10.0,  0.5, 55, 'U') );
	eventArray.push(new Event(10.5,  0.5, 74, 'DL') );
	eventArray.push(new Event(11.0,  0.5, 72, 'D') );

	period = 11.5; 
	BPM = 50;
	return eventArray;
}


                             