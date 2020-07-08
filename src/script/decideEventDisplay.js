var pinnedUIDs = localStorage.getItem('pinnedEventUIDs').split(',');
const view = localStorage.getItem('pinnedEvents');
const viewIsInclude = view != "only" && view != "exclude";

export default function thisEventDisplays(thisUid){
  //if the view is include or something fishy, no work needed
  if(viewIsInclude) return true;

  var amDisplayingPins = view === "only";

  //if all pinned UIDs have already been excluded, short-circuit
  if(pinnedUIDs == null) return !amDisplayingPins;

  //initialize
  var isPinned = false;
  var i = -1;

  //determine if this event is already pinned
  for(const uid of pinnedUIDs){
    ++i;
    if(uid === thisUid){
      isPinned = true;
      break;
    }
  }

  //if this is a pinned uid, throw it away so it's not reanalyzed
  if(isPinned) pinnedUIDs.splice(i, 1);

  //if this uid was pinned, don't display it, otherwise, display it
  return amDisplayingPins ? isPinned : !isPinned;
}
