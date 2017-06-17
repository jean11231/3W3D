#include <stdio.h>
#include <stdlib.h>
#include <string.h>

//
// usage: 
//  writeLog filename startTime records [dt code]
//
//

int main (int argc, char**argv) {
		
	FILE *fp = fopen (argv[1], "w");
	
	fprintf (fp, "%s ", argv[2] );  // startTime ... as a string (will overflow 32-bit long)
	fprintf (fp, "%d ", atoi(argv[3]) );  // nrecords
	
	int n = atoi (argv[3]);
	int startRec = 4;
	for (int i = 0; i < n; i++) {
		fprintf (fp, "%d ", atoi(argv[startRec++]) );
		fprintf (fp, "%d ", atoi(argv[startRec++]) );
	}

	fclose (fp);
	exit (0);   
}

