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
  return new Promise(async (resolve) => {
    await initDB();
    let request: IDBOpenDBRequest = window.indexedDB.open(DBNAME, version);

    request.onsuccess = () => {
      //console.log("request.onsuccess - addData", data);
      let db: IDBDatabase = request.result;
      const tx = db.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);
      store.put(data);
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
  return new Promise((resolve, reject) => {
    let request: IDBOpenDBRequest = window.indexedDB.open(DBNAME);

    request.onsuccess = () => {
      //console.log("request.onsuccess - getStoreDataByKey");
      let db: IDBDatabase = request.result;
      if (!checkStoreCreated(db, storeName)) reject(false);
      const tx = db.transaction(storeName, "readonly");
      const store = tx.objectStore(storeName);
      const res = store.get(key);

      res.onsuccess = () => {
        resolve(res.result);
      };
    };
  });
};

export const countStoreData = <T>(storeName: Stores): Promise<number> => {
  return new Promise((resolve) => {
    let request: IDBOpenDBRequest = window.indexedDB.open(DBNAME);

    request.onsuccess = () => {
      let db: IDBDatabase = request.result;
      const tx = db.transaction(storeName, "readonly");
      const store = tx.objectStore(storeName);
      const res = store.count();
      res.onsuccess = () => {
        resolve(res.result);
      };
    };
  });
};


export const clearDatabase = (): Promise<boolean> => {
  return new Promise((resolve) => {
    let request: IDBOpenDBRequest = window.indexedDB.open(DBNAME);

    request.onsuccess = async () => {
      //console.log("request.onsuccess - getStoreDataByKey");
      let db: IDBDatabase = request.result;
      await clearData(db, Stores.Images);
      await clearData(db, Stores.Requests);
      resolve(true);
    };
  });
};

export const dropDatabase = (): Promise<boolean> => {
  return new Promise((resolve) => {
    let request: IDBOpenDBRequest = window.indexedDB.deleteDatabase(DBNAME);

    request.onsuccess = () => {
      console.log("Database deleted successfully");
      resolve(true);
    };

    request.onerror = () => {
      console.log("Error deleting database.");
      resolve(false);
    };
  });
};

function clearData(db: IDBDatabase, table: string) {
  return new Promise((resolve) => {
    // open a read/write db transaction, ready for clearing the data
    const transaction = db.transaction([table], "readwrite");

    // create an object store on the transaction
    const objectStore = transaction.objectStore(table);

    // Make a request to clear all the data out of the object store
    const objectStoreRequest = objectStore.clear();

    objectStoreRequest.onsuccess = (event) => {
      resolve(true);
    };
  });
}

export {};

function checkStoreCreated(db: IDBDatabase, storeName: string) {
  try {
    const tx = db.transaction(storeName, "readonly");
    tx.objectStore(storeName);
    return true;
  } catch (e) {
    return false;
  }
}
