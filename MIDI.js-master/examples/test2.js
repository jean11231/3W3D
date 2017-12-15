$('#sequence').change ( function() {
   var which = $(this).val();
   removeNotesOnScore();
   switch (which) {
    case 'ev1':
     eventArray = makeEventArray1();
  eventArrayB = makeEventArray1();
  
  eventToScore(eventArray);
  makeSheet(3);
   break;
    case 'ev1a':
     eventArray = makeEventArray1a();
  eventArrayB = makeEventArray1a();
  eventToScore(eventArray);
  makeSheet(3);
   break;
    case 'ev1b':
     eventArray = makeEventArray1b();
  eventArrayB = makeEventArray1b();
  eventToScore(eventArray);
  makeSheet(3);
   break;
    case 'ev2':
     eventArray = makeEventArray2();
  eventArrayB = makeEventArray2();
  eventToScore(eventArray);
  makeSheet(11);
   break;
    case 'ev3':

  eventArray = makeEventArray3();
  eventArrayB = makeEventArray3();
  eventToScore(eventArray);
  makeSheet(3);
   break;
    case 'ev3a':

  eventArray = makeEventArray3a();
  eventArrayB = makeEventArray3a();
  eventToScore(eventArray);
  makeSheet(3);
   break;
    case 'ev3b':

  eventArray = makeEventArray3b();
  eventArrayB = makeEventArray3b();
  eventToScore(eventArray);
  makeSheet(3);
   break;
    case 'ev3c':

  eventArray = makeEventArray3c();
  eventArrayB = makeEventArray3c();
  eventToScore(eventArray);
  makeSheet(3);
   break;
    case 'ev3d':

  eventArray = makeEventArray3d();
  eventArrayB = makeEventArray3d();
  eventToScore(eventArray);
  makeSheet(3);
   break;
    case 'ev3e':

  eventArray = makeEventArray3e();
  eventArrayB = makeEventArray3e();
  eventToScore(eventArray);
  makeSheet(3);
   break;
    case 'ev4':

  eventArray = makeEventArray4();
  eventArrayB = makeEventArray4();
  eventToScore(eventArray);
  makeSheet(3);
   break;
    case 'ev5':

  eventArray = makeEventArray5();
  eventArrayB = makeEventArray5();
  eventToScore(eventArray);
  makeSheet(3);
   break;
    case 'ev5a':

  eventArray = makeEventArray5a();
  eventArrayB = makeEventArray5a();
  eventToScore(eventArray);
  makeSheet(3);
   break;
    case 'ev5b':

  eventArray = makeEventArray5b();
  eventArrayB = makeEventArray5b();
  eventToScore(eventArray);
  makeSheet(3);
   break;
    case 'ev5c':

      eventArray = makeEventArray5c();
   eventArrayB = makeEventArray5c();
      eventToScore(eventArray);
   makeSheet(3);
   break;
    case 'ev5d':

      eventArray = makeEventArray5d();
   eventArrayB = makeEventArray5d();
      eventToScore(eventArray);
   makeSheet(3);
   break;
    case 'ev5e':

      eventArray = makeEventArray5e();
   eventArrayB = makeEventArray5e();
      eventToScore(eventArray);
   makeSheet(7);
   break;
    case 'ev5f':

      eventArray = makeEventArray5f();
   eventArrayB = makeEventArray5f();
      eventToScore(eventArray);
   makeSheet(7);
   break;
    case 'ev5g':

      eventArray = makeEventArray5g();
   eventArrayB = makeEventArray5g();
      eventToScore(eventArray);
   makeSheet(3);
   break;
    case 'ev6':

      eventArray = makeEventArray6();
   eventArrayB = makeEventArray6();
      eventToScore(eventArray);
   makeSheet(3);
   break;
    case 'ev6a':
      eventArray = makeEventArray6a();
   eventArrayB = makeEventArray6a();
      eventToScore(eventArray);
   makeSheet(3);
   break;
    case 'ev6b':
      eventArray = makeEventArray6b();
   eventArrayB = makeEventArray6b();
      eventToScore(eventArray);
   makeSheet(3);
   break;
    case 'ev6c':
      eventArray = makeEventArray6c();
   eventArrayB = makeEventArray6c();
      eventToScore(eventArray);
   makeSheet(7);
   break;
    case 'ev8':
      eventArray = makeEventArray8();
   eventArrayB = makeEventArray8();
      eventToScore(eventArray);
   makeSheet(3);
   break;
    case 'ev8a':
      eventArray = makeEventArray8a();
   eventArrayB = makeEventArray8a();
      eventToScore(eventArray);
   makeSheet(3);
   break;
    case 'ev8b':
      eventArray = makeEventArray8b();
   eventArrayB = makeEventArray8b();
      eventToScore(eventArray);
   makeSheet(3);
   break;
    case 'ev9':

      eventArray = makeEventArray9();
   eventArrayB = makeEventArray9();
      eventToScore(eventArray);
   makeSheet(15);
   break;
    case 'ev10':

      eventArray = makeEventArray10();
   eventArrayB = makeEventArray10();
      eventToScore(eventArray);
   makeSheet(7);
   break;
    case 'ev11':

      eventArray = makeEventArrayEx1();
   eventArrayB = makeEventArrayEx2();
   
      eventToScore(eventArray);
   makeSheet(20);
   break;
    
 case 'ev12':
   eventArray = makeEventArray0();
   eventArrayB = makeEventArray0();
   
      eventToScore(eventArray);
   makeSheet(20);
   break;
    

   
   case 'ev13':
   eventArray = makeEventArrayStar();
   eventArrayB = makeEventArrayStar();
      eventToScore(eventArray);
   makeSheet(15);
   break;
    

   }
   
   
   makeEventArrayStar

   keyframes = makeSequence(eventArray);
   keyframesB = makeSequence(eventArrayB);
   
   //printKeyframe (keyframes);

});

function printKeyframe(keyframes) {
    for (var i = 0; i < keyframes.length; i++) {

       console.log (i + ':' + 'key: ' + keyframes[i].key.toFixed(2) + ' pos: ' + keyframes[i].pos);
    }
}

function makeEventArray0 () {
  var eventArray = [];
  timeSignatureX=4;
 timeSignatureY=4;
  eventArray.push(new Event( 0, 1 , 69 , 'D', 0.5, 0.5 ));
  eventArray.push(new Event( 1, 1 , 71 , 'U' ));
  eventArray.push(new Event( 2, 1 , 72 , 'D' ));
  eventArray.push(new Event( 3, 1 , 74 , 'U' ));
  
  period = 4;
  return eventArray;
}
function makeEventArray1 () {
  var eventArray = [];
  timeSignatureX=4;
 timeSignatureY=4;
  eventArray.push(new Event(0, 1, 69, 'D', 0.8, 0.5) );
  eventArray.push(new Event(1, 1, 71, 'U') );
  eventArray.push(new Event(2, 1, 72, 'D') );
  eventArray.push(new Event(3, 1, 74, 'U') );
  period = 4;
  return eventArray;
}

function makeEventArray1a () {
  var eventArray = [];
  timeSignatureX=4;
 timeSignatureY=4;
  eventArray.push(new Event(0, 1, 69, 'D', 0.2, 0.5) );
  eventArray.push(new Event(1, 1, 71, 'U', 0.4) );
  eventArray.push(new Event(2, 1, 72, 'D', 0.6) );
  eventArray.push(new Event(3, 1, 74, 'U', 1.0) );
  period = 4;
  return eventArray;
}

function makeEventArray1b () {
  var eventArray = [];
  timeSignatureX=4;
 timeSignatureY=4;
  eventArray.push(new Event(0, 1, 69, 'D', 1.0, 0.5) );
  eventArray.push(new Event(1, 1, 69, 'U', 0.8) );
  eventArray.push(new Event(2, 1, 69, 'D', 0.4) );
  eventArray.push(new Event(3, 1, 69, 'U', 0.2) );
  period = 4;
  return eventArray;
}

function makeEventArray2 () {  // carmina burana
  var eventArray = [];
  timeSignatureX=4;
 timeSignatureY=4;
  eventArray.push(new Event(0, 1, 1, 'L',0,0) );
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
  timeSignatureX=4;
 timeSignatureY=4;
  eventArray.push(new Event(0, 1, 69, 'D', 0.8, 0.5) );
  eventArray.push(new Event(1, 1, 1) );
  eventArray.push(new Event(2, 1, 69, 'U') );
  eventArray.push(new Event(3, 1, 1, 'L') );
  period = 3;
  return eventArray;
}

function makeEventArray3a () { // rest & lift
  var eventArray = [];
  timeSignatureX=4;
 timeSignatureY=4;
  eventArray.push(new Event(0, 1, 69, 'D', 0.8, 0.5) );
  eventArray.push(new Event(1, 1, 1,'L') );
  eventArray.push(new Event(2, 1, 69, 'D') );
  eventArray.push(new Event(3, 1, 1, 'S') );
  period = 3;
  return eventArray;
}


function makeEventArray3b () {
  var eventArray = [];
  timeSignatureX=4;
 timeSignatureY=4;
  eventArray.push(new Event(0, 1, 69, 'D', 0.8, 0.5) );
  eventArray.push(new Event(1, 1, 1, 'S') );
  eventArray.push(new Event(2, 1, 1, 'L') );
  eventArray.push(new Event(3, 1, 69, 'D') );
  period = 4;
  return eventArray;
}


function makeEventArray5b () {  // kreutzer No. 2
  var eventArray = [];
  timeSignatureX=4;
 timeSignatureY=4;
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
  timeSignatureX=4;
 timeSignatureY=4;
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
  timeSignatureX=4;
 timeSignatureY=4;
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
 timeSignatureX=4;
 timeSignatureY=4;
  eventArray.push(new Event(0,    0.5, 72, 'D', 0.8, 0.5) );
  eventArray.push(new Event(0.5, 0.5, 76, 'S') );
  eve