- [x] grab venue name and location and href if available.
- [x] use these to build an event object to which getDetails() will add more definitions. 
- [x] update getDetails() to reference eventObj.eventId as opposed to the array just containing eventId's.
- [x] utilize fb metadata first, then extend outside of that if need be.
- [ ] grab preview image from metadata
- [x] init react page to display the info in each event object
- [x] start with dummy data
- [ ] bulk up error handling to avoid unhandled promise rejections.
- [x] decide how to handle data --> store 
- [x] if we group results by each username, we could use database for initial results and then update store / database when crawler finishes its work. 
- [x] group results by each username
- [ ] use database for initial results
- [ ] then update store / database when crawler finishes its work
- [ ] refactor
- [ ] deploy



