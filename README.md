# hathiGeniusv1
hathiGenius is designed to integrate with Primo to fix the issue of hathitrust records all showing as available.V1 integrates with the orginal Primo interface. V2 integrates with the revised (as of 2018) Primo interface. hathiGenius queries the hathitrust bibliographic api for data from the usRightsString. Can be easily modified to check more granular rights info as needed.

The app functions by adding the js file to the Primo presentation layer (usually as a script tag in a static tile), and setting it to reference the php file, which is sitting on a server in the same domain as the js (to avoid SOP issues). The jks file packages up hathi identifiers from the presentation layer and sends them to the php file for the request to be run. The app gets around SOP in populating changes from the php file to the Primo presentation layer by loading the php response like a Javascript file.

Currently in use with K-State.

This software is licensed under a Creative Commons non-commercial share alike open source license
