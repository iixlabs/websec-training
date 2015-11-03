# WebSec Training
A project containing multiple node.js apps that contain a variety of security vulnerabilities as a hands on exercise for learning the basics of web application security.

## Install Dependencies
 - Install node [read how](http://nodejs.org)
 - Install and start Maria DB
 - Clone the repo
 - Rename `db.bak.js` to `db.js` and change authentication credentials
 - Import `database_schema.sql`
 - Run `$ npm install`

## Running
 - `$ npm start` to start the server. If the port is in use, you can run `$ PORT=xxxx npm start`
 - Browse to `http://localhost:[port|Default 3000]`

# License
Copyright (C) 2015  IIX

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
