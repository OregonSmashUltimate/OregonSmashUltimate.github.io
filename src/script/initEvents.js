var pinnedUIDs = localStorage.getItem('pinnedEventUIDs').split(',');

//-1 means it is not pinned
export function uidPinIndex(searchUid){
  //if all pinned UIDs have already been excluded, short-circuit
  if(pinnedUIDs == null) return false;

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
export const viewIsExclude = (view === 'exclude');
export const viewIsOnly    = (view === 'only');
export const viewIsInclude = (viewIsExclude === false && viewIsOnly === false);
