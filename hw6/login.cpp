#include <stdio.h>
#include <stdlib.h>
#include <string.h>

//
// usage: 
//  login (argc = 1)
//     print all users; exit code: 0
//  login name (argc = 2) exit code: 1
//     return 0 if already in list
//     return 1 if just added to list
//

int main (int argc, char**argv) {
	
	char* name = argv[1];
	
	FILE *fp = fopen ("names.dat", "r+");
	char member[20];
	
	if (argc == 1) {
		while (1) {
			fscanf (fp, "%s", member);
			if (feof (fp)) {
				break;
			} 
			// a name was read ...
			fprintf (stderr, "%s\n", member);
		}
		fclose (fp);
		exit (0);
	}
	
	int found = 0;
	if (argc == 2) {
		fprintf (stderr, "input: %s\n", argv[1]);
	
		while (1) {
			fscanf (fp, "%s", member);
			if (feof (fp)) {
				break;
			} else {  // a name was read ...
				if (strcmp (member, name) == 0) {
					found = 1;
					fprintf (stdout, "0");
					break;
				}
			}
		} 

		if (! found) {
			fprintf (stdout, "1");
			fprintf (fp, "%s\n", name);
		}

		fclose (fp);
		exit (1);   

	}
}
