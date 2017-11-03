$('#sequence').change ( function() {
   var which = $(this).val();
   removeNotesOnScore();
   switch (which) {
   	case 'ev1':
   		eventArray = makeEventArray1();
      eventToScore(eventArray);
 		break;
   	case 'ev1a':
   		eventArray = makeEventArray1a();
      eventToScore(eventArray);
 		break;
   	case 'ev1b':
   		eventArray = makeEventArray1b();
      eventToScore(eventArray);
 		break;
   	case 'ev2':
   		eventArray = makeEventArray2();
      eventToScore(eventArray);
 		break;
   	case 'ev3':

      eventArray = makeEventArray3();
      eventToScore(eventArray);
 		break;
   	case 'ev3a':

      eventArray = makeEventArray3a();
      eventToScore(eventArray);
 		break;
   	case 'ev3b':

      eventArray = makeEventArray3b();
      eventToScore(eventArray);
 		break;
   	case 'ev3c':

      eventArray = makeEventArray3c();
      eventToScore(eventArray);
 		break;
   	case 'ev3d':

      eventArray = makeEventArray3d();
      eventToScore(eventArray);
 		break;
   	case 'ev3e':

      eventArray = makeEventArray3e();
      eventToScore(eventArray);
 		break;
   	case 'ev4':

      eventArray = makeEventArray4();
      eventToScore(eventArray);
 		break;
   	case 'ev5':

   		eventArray = makeEventArray5();
      eventToScore(eventArray);
 		break;
   	case 'ev5a':

      eventArray = makeEventArray5a();
      eventToScore(eventArray);
 		break;
   	case 'ev5b':

      eventArray = makeEventArray5b();
      eventToScore(eventArray);
 		break;
   	case 'ev5c':

      eventArray = makeEventArray5c();
      eventToScore(eventArray);
 		break;
   	case 'ev5d':

      eventArray = makeEventArray5d();
      eventToScore(eventArray);
 		break;
   	case 'ev5e':

      eventArray = makeEventArray5e();
      eventToScore(eventArray);
 		break;
   	case 'ev5f':

      eventArray = makeEventArray5f();
      eventToScore(eventArray);
 		break;
   	case 'ev5g':

      eventArray = makeEventArray5g();
      eventToScore(eventArray);
 		break;
   	case 'ev6':

      eventArray = makeEventArray6();
      eventToScore(eventArray);
 		break;
   	case 'ev6a':
   	  eventArray = makeEventArray6a();
      eventToScore(eventArray);
 		break;
   	case 'ev6b':
      eventArray = makeEventArray6b();
      eventToScore(eventArray);
 		break;
   	case 'ev6c':
      eventArray = makeEventArray6c();
      eventToScore(eventArray);
 		break;
   	case 'ev8':
      eventArray = makeEventArray8();
      eventToScore(eventArray);
 		break;
   	case 'ev8a':
      eventArray = makeEventArray8a();
      eventToScore(eventArray);
 		break;
   	case 'ev8b':
      eventArray = makeEventArray8b();
      eventToScore(eventArray);
 		break;
   	case 'ev9':

      eventArray = makeEventArray9();
      eventToScore(eventArray);
 		break;
   	case 'ev10':

      eventArray = makeEventArray10();
      eventToScore(eventArray);
 		break;
   	case 'ev11':

      eventArray = makeEventArrayEx1();
      eventToScore(eventArray);
 		break;
   	case 'ev12':

      eventArray = makeEventArray12();
      eventToScore(eventArray);
 		break;
   	case 'ev13':

      eventArray = makeEventArray13();
      eventToScore(eventArray);
 		break;

   }

   keyframes = makeSequence(eventArray);
   //printKeyframe (keyframes);

});

function printKeyframe(keyframes) {
    for (var i = 0; i < keyframes.length; i++) {

       console.log (i + ':' + 'key: ' + keyframes[i].key.toFixed(2) + ' pos: ' + keyframes[i].pos);
    }
}


function makeEventArray1 () {
  var eventArray = [];
  eventArray.push(new Event(0, 1, 69, 'D', 0.8, 0.5) );
  eventArray.push(new Event(1, 1, 71, 'U') );
  eventArray.push(new Event(2, 1, 72, 'D') );
  eventArray.push(new Event(3, 1, 74, 'U') );
  period = 4;
  return eventArray;
}

function makeEventArray1a () {
  var eventArray = [];
  eventArray.push(new Event(0, 1, 69, 'D', 0.2, 0.5) );
  eventArray.push(new Event(1, 1, 71, 'U', 0.4) );
  eventArray.push(new Event(2, 1, 72, 'D', 0.6) );
  eventArray.push(new Event(3, 1, 74, 'U', 1.0) );
  period = 4;
  return eventArray;
}

function makeEventArray1b () {
  var eventArray = [];
  eventArray.push(new Event(0, 1, 69, 'D', 1.0, 0.5) );
  eventArray.push(new Event(1, 1, 69, 'U', 0.8) );
  eventArray.push(new Event(2, 1, 69, 'D', 0.4) );
  eventArray.push(new Event(3, 1, 69, 'U', 0.2) );
  period = 4;
  return eventArray;
}

function makeEventArray2 () {  // carmina burana
  var eventArray = [];
  eventArray.push(new Event(0, 1, 1, 'L') );
  eventArray.push(new Event(1, 2, 71, 'D', 0.4, 0.5) );
  eventArray.push(new Event(3, 1, 72, 'U') );
  eventArray.push(new Event(4, 1, 69, 'D') );
  eventArray.push(new Event(5, 1, 69, 'U') );
  eventArray.push(new Event(6, 1, 1, 'L') );
  eventArray.push(new Event(7, 2, 71, 'D', 1.0, 0.5) ); // second phrase, lift to nut!
  eventArray.push(new Event(9, 1, 72, 'U') );
  eventArray.push(new Event(10, 1, 69, 'D') );
  eventArray.push(new Event(11, 1, 69, 'U') );
  period = 12;
  return eventArray;
}

function makeEventArray3 () {  // rest
  var eventArray = [];
  eventArray.push(new Event(0, 1, 69, 'D', 0.8, 0.5) );
  eventArray.push(new Event(1, 1, 1) );
  eventArray.push(new Event(2, 1, 69, 'U') );
  eventArray.push(new Event(3, 1, 1, 'L') );
  period = 3;
  return eventArray;
}

function makeEventArray3a () { // rest & lift
  var eventArray = [];
  eventArray.push(new Event(0, 1, 69, 'D', 0.8, 0.5) );
  eventArray.push(new Event(1, 1, 1,'L') );
  eventArray.push(new Event(2, 1, 69, 'D') );
  eventArray.push(new Event(3, 1, 1, 'S') );
  period = 3;
  return eventArray;
}


function makeEventArray3b () {
  var eventArray = [];
  eventArray.push(new Event(0, 1, 69, 'D', 0.8, 0.5) );
  eventArray.push(new Event(1, 1, 1, 'S') );
  eventArray.push(new Event(2, 1, 1, 'L') );
  eventArray.push(new Event(3, 1, 69, 'D') );
  period = 4;
  return eventArray;
}


function makeEventArray5b () {  // kreutzer No. 2
  var eventArray = [];
  eventArray.push(new Event(0,    0.25, 72, 'D', 1.0, 0.5) );
  eventArray.push(new Event(0.25, 0.25, 76, 'S') );
  eventArray.push(new Event(0.5,  0.25, 79, 'S') );
  eventArray.push(new Event(0.75, 0.25, 77, 'U') );
  eventArray.push(new Event(1,    0.25, 76, 'D') );
  eventArray.push(new Event(1.25, 0.25, 77, 'U') );
  eventArray.push(new Event(1.5,  0.25, 74, 'S') );
  eventArray.push(new Event(1.75, 0.25, 76, 'S') );
  period = 2;
  return eventArray;
}

function makeEventArray5c () {
  var eventArray = [];
  eventArray.push(new Event(0,    0.25, 72, 'D', 0.8, 0.5) );
  eventArray.push(new Event(0.25, 0.25, 76, 'U') );
  eventArray.push(new Event(0.5,  0.25, 79, 'D') );
  eventArray.push(new Event(0.75, 0.25, 77, 'S') );
  eventArray.push(new Event(1,    0.25, 76, 'U') );
  eventArray.push(new Event(1.25, 0.25, 77, 'D') );
  eventArray.push(new Event(1.5,  0.25, 74, 'U') );
  eventArray.push(new Event(1.75, 0.25, 76, 'S') );
  period = 2;
  return eventArray;
}


function makeEventArray5d () {
  var eventArray = [];
  eventArray.push(new Event(0,    0.25, 72, 'D', 0.8, 0.5) );
  eventArray.push(new Event(0.25, 0.25, 76, 'S') );
  eventArray.push(new Event(0.5,  0.25, 79, 'S') );
  eventArray.push(new Event(0.75, 0.25, 77, 'S') );
  eventArray.push(new Event(1,    0.25, 76, 'U') );
  eventArray.push(new Event(1.25, 0.25, 77, 'S') );
  eventArray.push(new Event(1.5,  0.25, 74, 'S') );
  eventArray.push(new Event(1.75, 0.25, 76, 'S') );
  period = 2;
  return eventArray;
}

function makeEventArray5e () {  // slurred staccato
  var eventArray = [];
  eventArray.push(new Event(0,    0.5, 72, 'D', 0.8, 0.5) );
  eventArray.push(new Event(0.5, 0.5, 76, 'S') );
  eventArray.push(new Event(1,  0.5, 79, 'US') );
  eventArray.push(new Event(1.5, 0.5, 77, 'SS') );
  eventArray.push(new Event(2,    1, 76, 'D') );
  eventArray.push(new Event(3,    1, 1, 'D') );
  period = 3;
  return eventArray;
}

function makeEventArray5f () {  // upbow staccato
  var eventArray = [];
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
  period = 8;
  return eventArray;
}

function makeEventArray5g () {  // portato (Tchaikovsky mov. 2)
  var eventArray = [];
  eventArray.push(new Event(0,      1, 62, 'U', 0.8, 0.5) );
  eventArray.push(new Event(1,    1.5, 67, 'D') );
  eventArray.push(new Event(2.5, 0.5, 69, 'UP') );
  eventArray.push(new Event(3, 0.5, 70, 'SP') );
  eventArray.push(new Event(3.5, 0.5, 72, 'SP') );
  eventArray.push(new Event(4,  2, 74, 'D') );
  period = 6;
  return eventArray;
}

function makeEventArray6 () {  // with staccato
  var eventArray = [];

  eventArray.push(new Event(0, 1, 74, 'D', 0.8, 0.5) );
  eventArray.push(new Event(1, 1, 72, 'U') );
  eventArray.push(new Event(2, 1, 71, 'D') );
  eventArray.push(new Event(3, 1, 69, 'U') );
  period = 4;
  return eventArray;
}

function makeEventArray6a () {  // with staccato
  var eventArray = [];

  eventArray.push(new Event(0, 1, 74, 'DS', 0.8, 0.5) );
  eventArray.push(new Event(1, 1, 72, 'US') );
  eventArray.push(new Event(2, 1, 71, 'DS') );
  eventArray.push(new Event(3, 1, 69, 'US') );
  period = 4;
  return eventArray;
}

function makeEventArray6b () {  // with staccato
  var eventArray = [];

  eventArray.push(new Event(0, 1, 74, 'D', 0.8, 0.5) );
  eventArray.push(new Event(1, 1, 72, 'US') );
  eventArray.push(new Event(2, 1, 71, 'DS') );
  eventArray.push(new Event(3, 1, 69, 'U') );
  period = 4;
  return eventArray;
}

function makeEventArray6c () {  // with staccato
  var eventArray = [];

  eventArray.push(new Event(0,   0.5, 74, 'DS', 0.8, 0.5) );
  eventArray.push(new Event(0.5, 0.5, 76, 'US') );
  eventArray.push(new Event(1.0,  0.5, 74, 'DS') );
  eventArray.push(new Event(1.5, 0.5, 71, 'US') );
  eventArray.push(new Event(2.0, 0.5, 72, 'DS') );
  eventArray.push(new Event(2.5, 0.5, 74, 'US') );
  eventArray.push(new Event(3.0,  0.5, 72, 'DS') );
  eventArray.push(new Event(3.5, 0.5, 69, 'US') );
  eventArray.push(new Event(4,     1, 67, 'DS') );
  eventArray.push(new Event(5,     1, 79, 'US') );
  eventArray.push(new Event(6, 2, 67, 'D') );
  period = 8;
  return eventArray;
}


function makeEventArray8 () {  // slur with rests
  var eventArray = [];

  eventArray.push(new Event(0,    0.5,  69, 'D', 0.8, 0.5) );
  eventArray.push(new Event(0.5,  0.25,  1, 'S') );
  eventArray.push(new Event(0.75, 0.25, 71, 'S') );

  eventArray.push(new Event(1,    2,  72, 'U', 0.8, 0.5) );

  period = 3;
  return eventArray;
}

function makeEventArray8a () {  // slur with rest
  var eventArray = [];

  eventArray.push(new Event(0,     0.25,  69, 'D', 0.8, 0.5) );
  eventArray.push(new Event(0.25,  0.25,  71, 'S') );
  eventArray.push(new Event(0.50,  0.25,  1, 'S') );
  eventArray.push(new Event(0.75, 0.25, 74, 'S') );

  eventArray.push(new Event(1,    2,  76, 'U', 0.8, 0.5) );

  period = 3;
  return eventArray;
}

function makeEventArray8b () {  // slur & portato
  var eventArray = [];

  eventArray.push(new Event(0,     0.5,  72, 'D', 0.8, 0.5) );
  eventArray.push(new Event(0.5,  0.5,  76, 'S') );
  eventArray.push(new Event(1.0,  0.25,  79, 'U') );
  eventArray.push(new Event(1.25, 0.25, 1, 'S') );
  eventArray.push(new Event(1.50,  0.25,  77, 'S') );
  eventArray.push(new Event(1.75, 0.25, 1, 'S') );

  eventArray.push(new Event(2,    3,  72, 'D', 0.8, 0.5) );

  period = 5;
  return eventArray;
}


function makeEventArray9 () {  // humoresque
  var eventArray = [];

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
  eventArray.push(new Event(4.75, 0.25, 77, 'U') );

  eventArray.push(new Event(5,    0.5,  81, 'S', 0.8, 0.5) );
  eventArray.push(new Event(5.5,  0.25,  1) );
  eventArray.push(new Event(5.75, 0.25, 79, 'D') );

  eventArray.push(new Event(6,    0.5,  77, 'S', 0.8, 0.5) );
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
  period = 15;
  return eventArray;
}


function makeEventArray10 () {  // rondo Mozart
  var eventArray = [];

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

  eventArray.push(new Event(4.00,  0.25,  71, 'DS') );
  eventArray.push(new Event(4.25,  0.25,  74, 'US') );
  eventArray.push(new Event(4.50,  0.25,  79, 'DS') );
  eventArray.push(new Event(4.75,  0.25,  83, 'US') );

  eventArray.push(new Event(5.00,  0.25,  83, 'DS') );
  eventArray.push(new Event(5.25,  0.25,  81, 'US') );
  eventArray.push(new Event(5.50,  0.25,  79, 'DS') );
  eventArray.push(new Event(5.75,  0.25,  78, 'US') );

  eventArray.push(new Event(6.00,  0.25,  81, 'D') );
  eventArray.push(new Event(6.25,  0.25,  79, 'S') );
  eventArray.push(new Event(6.50,  0.25,  79, 'U') );
  eventArray.push(new Event(6.75,  0.25,  79, 'D') );

  eventArray.push(new Event(7.00,  1,  79, 'U') );
  period = 8;
  return eventArray;
}

function makeEventArrayEx1 () {  // rondo Mozart
	var eventArray = [];

	eventArray.push(new Event(0   ,  2/3,  1, 'L', 0.8, 0.25) );
	eventArray.push(new Event(2/3 ,  1/3,  1, 'L') );
	eventArray.push(new Event(1	  ,  2/3,  1, 'L') );
	eventArray.push(new Event(1+2/3 ,1/3,  1, 'L') );
	eventArray.push(new Event(2   ,  2/3,  1, 'L') );
	eventArray.push(new Event(2+2/3 ,1/3,  1, 'L') );
	eventArray.push(new Event(3   ,  2/3,  1, 'L') );
	eventArray.push(new Event(3+2/3, 1/3,65 , 'U') );
	
	eventArray.push(new Event(4   ,  2/3,68 , 'D') );
	eventArray.push(new Event(4+2/3 ,1/3,70 , 'S') );
	eventArray.push(new Event(5   ,  1/2,72 , 'U') );
	eventArray.push(new Event(5+1/2 ,1/6,74 , 'S') );
	eventArray.push(new Event(5+2/3, 1/3,72 , 'S') );
	eventArray.push(new Event(6   ,  2/3,70 , 'D') );
	eventArray.push(new Event(6+2/3, 1/3,67 , 'S') );
	eventArray.push(new Event(7   ,  1/2,63 , 'U') );
	eventArray.push(new Event(7+1/2, 1/6,65 , 'S') );
	eventArray.push(new Event(7+2/3, 1/3,67 , 'S') );
	
	eventArray.push(new Event(8   ,  2/3,68, 'D') );
	eventArray.push(new Event(8+2/3, 1/3,65, 'S') );
	eventArray.push(new Event(9   ,  1/2,65, 'U') );
	eventArray.push(new Event(9+1/2, 1/6,63, 'S') );
	eventArray.push(new Event(9+2/3, 1/3,65, 'S') );
	eventArray.push(new Event(10   , 2/3,67, 'D') );
	eventArray.push(new Event(10+2/3,1/3,63, 'S') );
	eventArray.push(new Event(11  ,  2/3,60, 'U') );
	eventArray.push(new Event(11+2/3,1/3,65, 'S') );
	
	
	eventArray.push(new Event(12  ,  2/3,68, 'D') );
	eventArray.push(new Event(12+2/3,1/3,70, 'S') );
	eventArray.push(new Event(13  ,  1/2,72, 'U') );
	eventArray.push(new Event(13+1/2,1/6,74, 'S') );
	eventArray.push(new Event(13+2/3,1/3,72, 'S') );
	eventArray.push(new Event(14  ,  2/3,70, 'D') );
	eventArray.push(new Event(14+2/3,1/3,67, 'S') );
	eventArray.push(new Event(15  ,  1/2,63, 'U') );
	eventArray.push(new Event(15+1/2,1/6,65, 'S') );
	eventArray.push(new Event(15+2/3,1/3,67, 'S') );
	
	eventArray.push(new Event(16  ,  1/2,68, 'D') );
	eventArray.push(new Event(16+1/2,1/6,67, 'S') );
	eventArray.push(new Event(16+2/3,1/3,65, 'S') );
	eventArray.push(new Event(17  ,  1/2,64, 'U') );
	eventArray.push(new Event(17+1/2,1/6,62, 'S') );
	eventArray.push(new Event(17+2/3,1/3,64, 'S') );
	eventArray.push(new Event(18  ,    1,65, 'D') );
	eventArray.push(new Event(19  ,    1,65, 'S') );
	eventArray.push(new Event(20  ,  1/3,65, 'S') );
	
  period = 21;
  return eventArray;
}
