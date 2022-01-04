import { Timestamp } from 'firebase/firestore';

function parseFirebaseTimestamp(timestamp: Timestamp): string {
  return timestamp.toDate().toLocaleString('en-US', {
    day: 'numeric',
    year: 'numeric',
    month: 'long',
  });
}

export default parseFirebaseTimestamp;
