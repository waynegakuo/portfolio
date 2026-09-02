import type { FirebaseOptions } from 'firebase/app';

/**
 * Firebase web app config for project `waynegakuo`.
 * Analytics starts after Google Analytics is enabled on the project;
 * the SDK then fetches the measurement ID itself.
 *
 * Forkers: replace this with `firebase apps:sdkconfig WEB` from your project.
 */
export const FIREBASE_WEB: FirebaseOptions = {
  apiKey: 'AIzaSyBQjANtEBKcgtUDAkw26fXdoTar8wkVmuc',
  authDomain: 'waynegakuo.firebaseapp.com',
  projectId: 'waynegakuo',
  storageBucket: 'waynegakuo.firebasestorage.app',
  messagingSenderId: '193575283133',
  appId: '1:193575283133:web:68b41bc533165b52a8cad4',
};
