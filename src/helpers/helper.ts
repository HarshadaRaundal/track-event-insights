export const getLocalStorageItem = (key: string) => {
  if (typeof window !== "undefined") {
    return localStorage?.getItem(key);
  }
  return null;
};

export const setLocalStorage = (key: string, value: any) => {
  return localStorage?.setItem(key, value);
};

export const removeLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(key);
  }
};

export const isStaging = "Staging";
export const baseURL =
  " https://stage-platformbase-apigw.indi.gg/px-tracker-evt-drop";

export const firebaseConfig = {
  apiKey: "AIzaSyCARc-HJDm0dw61NW-AbjQPiDxG_Kprhos",
  authDomain: "indigg-website-staging.firebaseapp.com",
  projectId: "indigg-website-staging",
  storageBucket: "indigg-website-staging.appspot.com",
  messagingSenderId: "115613134409",
  appId: "1:115613134409:web:ddacf6eb35ccdf74f89998",
  measurementId: "G-CSXM02V8S6",
};
