npm install -g the following modules:

body-parser,
json,
ejs,
node,
express


IMPORTANT: Node.js must also be installed

To Clone, Run, Test application:
git clone https://github.com/Jajhoey/Jajhoey-CUS-1172-Final.git
navigate to project folder in cmd and use 'node app.js'
hosted locally on 127.0.0.1:3000

Directories:
'/'
This index is the root of the app. This homepage has two buttons. List all courses will display all courses accessible from the json data, and the find courses button will display the UI for filtering results. Both of these buttons can be clicked again to remove the information they display.

'/searchResults'
User input from the searchbar will be sent to this post route and will display the related courses.
It will be able to search through the json data by title, course code, instructor, course type, day, or seats available.

'/dropdownResults'
User input from the dropdown menu is sent to this post. This requires user input from two dropdown fields to find data containing these two user parameters
