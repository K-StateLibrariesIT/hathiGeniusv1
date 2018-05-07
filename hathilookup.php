<?php
/*Bengtson-Fu 13 3 |\| ( ][ 5 () |\| - |= |_|!!!!!!*/

/*created by Jason Bengtson, MLIS, MA : Available under GNU GPL license*/

/*Bengtson-Fu is the best Kung Fu!!!*/

/*Built for Kansas State University -- Go Wildcats!!!*/
/*hathiGenius-----an app built to determine availability of hathitrust materials*/
	error_reporting(E_ERROR | E_PARSE);
	ini_set('log_startup_errors',1);
	ini_set("log_errors", True);
	ini_set("error_log", "../klib/logs/hathigenius-errors.log");

	$datasink=$_GET["datasink"];
	$checko=strlen($datasink);
	$datasink=json_decode($datasink);
	/*this area contains our proprietary tests that we use, in concert with rules on the server, to protect from misuse. The
	tests migrate into numerical values for the $test1 and $test2 variables in the conditional below.
	Omit those vars from the conditional in the absence of such testing in this block*/
	if(($checko>3) && ($test1>0) && ($test2>0)) {
	
	foreach ($datasink as &$value) {
		$query="https://catalog.hathitrust.org/api/volumes/brief/htid/".$value->article.".json";

		$thisjson = file_get_contents($query);
		$thisjson=json_decode($thisjson);
		$code2="EXLResultStatusMaybeAvailable";
		foreach ($thisjson->items as &$jason) {
			if($jason->htid===$value->article) {
				$code=$jason->usRightsString;
				
				if($code==="Full view") {
						$code2="EXLResultStatusAvailable";	
				}
				
			}
		}
		
		$value->article=$code2;
		
	}
	
	echo("var datareturn='".json_encode($datasink)."';");

}
	

	
?>
