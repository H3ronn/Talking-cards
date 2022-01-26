import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuid } from 'uuid';
import { storage } from 'firestore';

export const addImageToStorage = async (name, image) => {
  const storageRef = ref(storage, `${name}-${uuid()}`);
  const snapshot = await uploadBytes(storageRef, image);

  return await getDownloadURL(snapshot.ref);
};
