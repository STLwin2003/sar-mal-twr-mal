import { app } from "./config";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

class firebaseService {
  store = null;
  constructor() {
    this.store = getStorage(app);
  }

  multiple_upload = async (images) => {
    try {
      let multiple_url = [];

      for (let i = 0; i < images.length; i++) {
        const name = images[i].name + Date.now();
        const storageRef = ref(this.store, `/product_image/${name}`);
        const uploadTask = await uploadBytesResumable(storageRef, images[i]);
        const url = await getDownloadURL(uploadTask.ref);
        multiple_url.push({ id: Date.now(), src: url });
      }
      return multiple_url;
    } catch (error) {
      return { error: "image upload is fail!" };
    }
  };
  image_upload = async (image) => {
    try {
      const name = image.name + Date.now();
      const storageRef = ref(this.store, `/profile_image/${name}`);
      const uploadTask = await uploadBytesResumable(storageRef, image);
      const url = await getDownloadURL(uploadTask.ref);
      return url;
    } catch (error) {
      return { error: "image upload is fail!" };
    }
  };
  carousel_image_upload = async (image) => {
    try {
      const name = image.name + Date.now();
      const storageRef = ref(this.store, `/carousel_image/${name}`);
      const uploadTask = await uploadBytesResumable(storageRef, image);
      const url = await getDownloadURL(uploadTask.ref);
      return url;
    } catch (error) {
      return { error: "image upload is fail!" };
    }
  };
  image_delete = async (image) => {
    try {
      const deleteRef = ref(this.store, image);
      await deleteObject(deleteRef);
    } catch (error) {
      console.log(error);
    }
  };
  multiple_image_delete = async (images) => {
    try {
      for (let i = 0; i < images.length; i++) {
        const deleteRef = ref(this.store, images[i]);
        await deleteObject(deleteRef);
      }
    } catch (error) {
      console.log(error);
    }
  };
}
export default new firebaseService();
