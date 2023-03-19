import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore';

import { db } from './firebase-config';

export const addRecord = async (collection, data) => {
    const collection_ref = collection(db, collection);
    await addDoc(collection_ref, data);
};

export const deleteRecord = async (collection, id) => {
    const doc_ref = doc(db, collection, id);
    await deleteDoc(doc_ref);
};

export const updateRecord = async (collection, id, data) => {
    const doc_ref = doc(db, collection, id);
    await updateDoc(doc_ref, data);
};

export const generateEventModel = data => ({
    title: data.title,
    description: data.description,
    starts_on: data.starts_on,
    ends_on: data.ends_on,
    tags: [...data.tags],
    type: data.type,
    submissions: [...data.submission_ids],
});
