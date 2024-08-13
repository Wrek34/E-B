import { getFirestore, doc, updateDoc, arrayUnion } from 'firebase/firestore';

const db = getFirestore();

export function saveFavoriteEpisode(userId, episodeId) {
    const userDoc = doc(db, 'users', userId);
    updateDoc(userDoc, {
        favorites: arrayUnion(episodeId)
    }).then(() => {
        console.log('Favorite added!');
    }).catch((error) => {
        console.error('Error adding favorite:', error);
    });
}
