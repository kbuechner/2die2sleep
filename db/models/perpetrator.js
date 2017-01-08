/* required fields:

name - string, not null
victims	- array of strings, not null 
		- perpetrator hasMany victims
		- would it be best practice to have # of victims as an individual field w. some kind of instance method based on the length of the victims array? seems dumb to do victims.length each time but this is small enough that it shouldn't matter?
play- perpetrator belongsToOne (right syntax?) play (true? Fallstaff is in several plays w/in the Henriad but )