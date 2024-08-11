import { getFirestore, doc, setDoc, arrayUnion } from 'firebase/firestore';

const db = getFirestore();

export function saveFavoriteEpisode(userId, episodeId) {
    const userDoc = doc(db, 'users', userId);
    setDoc(userDoc, {
        favorites: arrayUnion(episodeId)
    }, { merge: true }).then(() => {
        console.log('Favorite added!');
    }).catch((error) => {
        console.error('Error adding favorite:', error);
    });
}
