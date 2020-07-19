var pinnedUIDs = localStorage.getItem('pinnedEventUIDs').split(',');
//get rid of trailing empty entry
pinnedUIDs.splice(pinnedUIDs.length - 1, 1);

//-1 means it is not pinned
export function uidPinIndex(searchUid){
  //if all pinned UIDs have already been excluded, short-circuit
  if(pinnedUIDs.length === 0){
    return -1;
  }

  //initialize
  var isPinned = false;
  var i = -1;

  //determine if this event is already pinned
  for(const uid of pinnedUIDs){
    ++i;
    if(uid === searchUid){
      isPinned = true;
      break;
    }
  }

  //if this is a pinned uid, throw it away so it's not reanalyzed
  if(isPinned){
    pinnedUIDs.splice(i, 1);
    return i;
  }
  return -1;
}

const view = localStorage.getItem('pinnedEvents');
export const viewIsExclude  = (view === 'exclude');
export const viewIsOnly     = (view === 'only');

export const viewIsFiltered = ((viewIsExclude === false) && (viewIsOnly === false) && (localStorage.getItem("sortBy") === 'none'));
