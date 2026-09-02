import type { FirebaseOptions } from 'firebase/app';

/**
 * Firebase web app config for project `waynegakuo`.
 * `measurementId` must be present: Hosting `/__/firebase/init.json` does not
 * include it yet, and without it Analytics events never reach GA4.
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
  measurementId: 'G-S77TXYCGKH',
};
