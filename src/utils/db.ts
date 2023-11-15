const DBNAME = "PromarketDB";
let version = 1;

const ImagesKey = "url";
export interface IStoreImages {
  url: string;
  imageBase64: string;
}

export interface IStoreRequests {
  url: string;
  json: string;
}
export enum Stores {
  Images = "images",
  Requests = "requests",
}

export const initDB = (): Promise<boolean | IDBDatabase> => {
  return new Promise((resolve) => {
    let request: IDBOpenDBRequest = window.indexedDB.open(DBNAME);

    // if the data object store doesn't exist, create it
    request.onupgradeneeded = () => {
      let db: IDBDatabase = request.result;

      if (!db.objectStoreNames.contains(Stores.Images)) {
        db.createObjectStore(Stores.Images, { keyPath: ImagesKey });
      }

      if (!db.objectStoreNames.contains(Stores.Requests)) {
        db.createObjectStore(Stores.Requests, { keyPath: ImagesKey });
      }      
      // no need to resolve here
    };

    request.onsuccess = (e) => {
      let db: IDBDatabase = request.result;
      // get current version and store it
      version = db.version;
      resolve(request.result);
    };

    request.onerror = (e) => {
      resolve(false);
    };
  });
};

export const addData = <T>(
  storeName: string,
  data: T
): Promise<T | string | null> => {
  return new Promise((resolve) => {
    initDB().then(() => {
      let request: IDBOpenDBRequest = window.indexedDB.open(DBNAME, version);

      request.onsuccess = () => {
        //console.log("request.onsuccess - addData", data);
        let db: IDBDatabase = request.result;
        const tx = db.transaction(storeName, "readwrite");
        const store = tx.objectStore(storeName);
        store.add(data);
        resolve(data);
      };

      request.onerror = () => {
        const error = request.error?.message;
        if (error) {
          resolve(error);
        } else {
          resolve("Unknown error");
        }
      };
    });
  });
};

export const deleteData = (
  storeName: string,
  key: string
): Promise<boolean> => {
  return new Promise((resolve) => {
    let request: IDBOpenDBRequest = window.indexedDB.open(DBNAME, version);

    request.onsuccess = () => {
      //console.log("request.onsuccess - deleteData", key);
      let db: IDBDatabase = request.result;
      const tx = db.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);
      const res = store.delete(key);
      res.onsuccess = () => {
        resolve(true);
      };
      res.onerror = () => {
        resolve(false);
      };
    };
  });
};

export const updateData = <T>(
  storeName: string,
  key: string,
  data: T
): Promise<T | string | null> => {
  return new Promise((resolve) => {
    let request: IDBOpenDBRequest = window.indexedDB.open(DBNAME, version);

    request.onsuccess = () => {
      //console.log("request.onsuccess - updateData", key);
      let db: IDBDatabase = request.result;
      const tx = db.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);
      const res = store.get(key);
      res.onsuccess = () => {
        const newData = { ...res.result, ...data };
        store.put(newData);
        resolve(newData);
      };
      res.onerror = () => {
        resolve(null);
      };
    };
  });
};

export const getStoreData = <T>(storeName: Stores): Promise<T[]> => {
  return new Promise((resolve) => {
    let request: IDBOpenDBRequest = window.indexedDB.open(DBNAME);

    request.onsuccess = () => {
      //console.log("request.onsuccess - getAllData");
      let db: IDBDatabase = request.result;
      const tx = db.transaction(storeName, "readonly");
      const store = tx.objectStore(storeName);
      const res = store.getAll();
      res.onsuccess = () => {
        resolve(res.result);
      };
    };
  });
};

export const getStoreDataByKey = <T>(
  storeName: Stores,
  key: string
): Promise<T> => {
  return new Promise((resolve) => {
    let request: IDBOpenDBRequest = window.indexedDB.open(DBNAME);

    request.onsuccess = () => {
      //console.log("request.onsuccess - getStoreDataByKey");
      let db: IDBDatabase = request.result;
      const tx = db.transaction(storeName, "readonly");
      const store = tx.objectStore(storeName);
      const res = store.get(key);

      res.onsuccess = () => {
        resolve(res.result);
      };
    };
  });
};

export const dropDatabase = (): Promise<boolean> => {
  return new Promise((resolve) => {
    let request: any = window.indexedDB.deleteDatabase(DBNAME);

    request.onerror = () => {
      console.error("Error deleting database.");
    };

    request.onsuccess = () => {
      console.log("Database deleted successfully");
    };
  });
};

export {};
