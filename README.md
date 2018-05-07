# hathiGeniusv1
hathiGenius is designed to integrate with Primo to fix the issue of hathitrust records all showing as available.V1 integrates with the orginal Primo interface. V2 integrates with the revised (as of 2018) Primo interface. hathiGenius queries the hathitrust bibliographic api for data from the usRightsString. Can be easily modified to check more granular rights info as needed.

The app functions by adding the js file to the Primo presentation layer (usually as a script tag in a static tile), and setting it to reference the php file, which is sitting on a server in the same domain as the js (to avoid SOP issues). The jks file packages up hathi identifiers from the presentation layer and sends them to the php file for the request to be run. The app gets around SOP in populating changes from the php file to the Primo presentation layer by loading the php response like a Javascript file.

The php file is exposed to the web, so server rules need to be set up to keep it from using up excessive services and to alert sysadmins in case of an attack by someone trying to bring the box down. Checks are also in place in the script to make it a less desireable target.

Currently in use with K-State.

Copyright 2018, Kansas State University Libraries

This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
