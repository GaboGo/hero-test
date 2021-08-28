## React Coding Challenge

Responsive Data Driven Filter Grid & Data Card Component

Pick your tools, construct the Filter Grid & Data Card Component in a scalable format.

Requirements:
Filter Grid Component: 3 columns for desktop, 2 for mobile.
Data Card vars:
String: ID
Array: Tags
String: Title
String: Image URL
String: Description
Boolean: featured
Sample Data

{  
 "id":"Nerium",
"tags":["CMS Selection", "Experience Design"],
"image":"http://herodigi....jpg",
"title":"Nerium: Reimagining the digital CX for Nerium International",
"description":"As Nerium Internation....",
"featured":0
}

Content cards flip on hover for desktop, flip on tap for mobile. 3D CSS transform.
Filters are compounding, if Tag #1 & Tag #2 are selected, only show cards with both tags. If no filters are selected, show all cards.
Filters distribute as shown below, and become a dropdown on mobile.
All cards must be uniform in height, and support any amount of content. Note the text truncation in the mockup below.
Filters are buttons on desktop, dropdown on mobile
Parse this JSON file to populate your content
Utilize React as your framework
Use SASS for your style system following the BEM methodology
Mockups below
