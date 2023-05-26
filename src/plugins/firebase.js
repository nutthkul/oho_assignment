import { App } from "vue";
import store from "../store";
import router from "../router";

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";

import firebaseui from "firebaseui";

import loginApi from "@/api/user/";

import { Mutations } from "@/store/enums/StoreEnums";

const firebaseConfig = {
  apiKey: "AIzaSyD-OAYcqo_S_MStK73seYEVawQipK63kSk",
  authDomain: "beluca-auth.firebaseapp.com",
  projectId: "beluca-auth",
  storageBucket: "beluca-auth.appspot.com",
  messagingSenderId: "139059118678",
  appId: "1:139059118678:web:ded39417fa2d2f8d30f1f7",
  measurementId: "G-HT3G1T51PG",
};

firebase.initializeApp(firebaseConfig);

export default {
  auth: firebase.auth(),

  login() {
    store.commit(Mutations.SET_LOADING, true);

    const provider = new firebase.auth.GoogleAuthProvider();

    const _0xb339 = [
      "\x63\x6F\x64\x65",
      "\x6D\x65\x73\x73\x61\x67\x65",
      "\x65\x6D\x61\x69\x6C",
      "\x63\x72\x65\x64\x65\x6E\x74\x69\x61\x6C",
      "\x63\x6F\x6D\x6D\x69\x74",
      "\x6C\x6F\x67",
      "\x63\x61\x74\x63\x68",
      "\x69\x73\x4E\x65\x77\x55\x73\x65\x72",
      "\x61\x64\x64\x69\x74\x69\x6F\x6E\x61\x6C\x55\x73\x65\x72\x49\x6E\x66\x6F",
      "\x2F\x72\x65\x67\x69\x73\x74\x65\x72\x3F\x61\x75\x74\x68\x3D\x31",
      "\x70\x75\x73\x68",
      "\x2F\x6C\x6F\x67\x69\x6E\x3F\x61\x75\x74\x68\x3D\x31",
      "\x74\x68\x65\x6E",
      "\x73\x69\x67\x6E\x49\x6E\x57\x69\x74\x68\x50\x6F\x70\x75\x70",
      "\x61\x75\x74\x68",
    ];
    firebase[_0xb339[14]]()
      [_0xb339[13]](provider)
      [_0xb339[12]](function (_0x7d71x6) {
        if (_0x7d71x6[_0xb339[8]][_0xb339[7]]) {
          store[_0xb339[4]](Mutations.SET_GOOGLE, _0x7d71x6);
          store[_0xb339[4]](Mutations.SET_LOADING, false);
          router[_0xb339[10]](_0xb339[9]);
        } else {
          store[_0xb339[4]](Mutations.SET_GOOGLE, _0x7d71x6);
          store[_0xb339[4]](Mutations.SET_LOADING, false);
          router[_0xb339[10]](_0xb339[11]);
        }
      })
      [_0xb339[6]](function (_0x7d71x1) {
        const _0x7d71x2 = _0x7d71x1[_0xb339[0]];
        const _0x7d71x3 = _0x7d71x1[_0xb339[1]];
        const _0x7d71x4 = _0x7d71x1[_0xb339[2]];
        const _0x7d71x5 = _0x7d71x1[_0xb339[3]];
        store[_0xb339[4]](Mutations.SET_LOADING, false);
        console[_0xb339[5]](_0x7d71x2, _0x7d71x3, _0x7d71x4, _0x7d71x5);
      });
  },

  async loginApple() {
    store.commit(Mutations.SET_LOADING, true);

    let provider = new firebase.auth.OAuthProvider("apple.com");
    provider.addScope("email");
    provider.addScope("name");

    const _0xffb7 = [
      "\x63\x6F\x64\x65",
      "\x6D\x65\x73\x73\x61\x67\x65",
      "\x65\x6D\x61\x69\x6C",
      "\x63\x72\x65\x64\x65\x6E\x74\x69\x61\x6C",
      "\x63\x6F\x6D\x6D\x69\x74",
      "\x6C\x6F\x67",
      "\x63\x61\x74\x63\x68",
      "\x69\x73\x4E\x65\x77\x55\x73\x65\x72",
      "\x61\x64\x64\x69\x74\x69\x6F\x6E\x61\x6C\x55\x73\x65\x72\x49\x6E\x66\x6F",
      "\x2F\x72\x65\x67\x69\x73\x74\x65\x72\x3F\x61\x75\x74\x68\x3D\x32",
      "\x70\x75\x73\x68",
      "\x2F\x6C\x6F\x67\x69\x6E\x3F\x61\x75\x74\x68\x3D\x32",
      "\x74\x68\x65\x6E",
      "\x73\x69\x67\x6E\x49\x6E\x57\x69\x74\x68\x50\x6F\x70\x75\x70",
      "\x61\x75\x74\x68",
    ];
    firebase[_0xffb7[14]]()
      [_0xffb7[13]](provider)
      [_0xffb7[12]](function (_0xa7b3x6) {
        if (_0xa7b3x6[_0xffb7[8]][_0xffb7[7]]) {
          store[_0xffb7[4]](Mutations.SET_APPLE, _0xa7b3x6);
          store[_0xffb7[4]](Mutations.SET_LOADING, false);
          router[_0xffb7[10]](_0xffb7[9]);
        } else {
          store[_0xffb7[4]](Mutations.SET_APPLE, _0xa7b3x6);
          store[_0xffb7[4]](Mutations.SET_LOADING, false);
          router[_0xffb7[10]](_0xffb7[11]);
        }
      })
      [_0xffb7[6]](function (_0xa7b3x1) {
        const _0xa7b3x2 = _0xa7b3x1[_0xffb7[0]];
        const _0xa7b3x3 = _0xa7b3x1[_0xffb7[1]];
        const _0xa7b3x4 = _0xa7b3x1[_0xffb7[2]];
        const _0xa7b3x5 = _0xa7b3x1[_0xffb7[3]];
        store[_0xffb7[4]](Mutations.SET_LOADING, false);
        console[_0xffb7[5]](_0xa7b3x2, _0xa7b3x3, _0xa7b3x4, _0xa7b3x5);
      });
  },

  logout() {
    const _0x3820 = [
      "\x6C\x6F\x67",
      "\x63\x61\x74\x63\x68",
      "\x74\x68\x65\x6E",
      "\x73\x69\x67\x6E\x4F\x75\x74",
      "\x61\x75\x74\x68",
    ];
    firebase[_0x3820[4]]()
      [_0x3820[3]]()
      [_0x3820[2]](function () {})
      [_0x3820[1]](function (_0x773dx1) {
        console[_0x3820[0]](_0x773dx1);
      });
  },
};
