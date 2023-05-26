import { App } from "vue";
import store from "../store";
import router from "../router";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";

import loginApi from "@/api/user/";

import { Mutations } from "@/store/enums/StoreEnums";

export default {
  auth: firebase.auth(),

  async loginApple() {
    let provider = new firebase.auth.OAuthProvider("apple.com");
    provider.addScope("email");
    provider.addScope("name");

    const _0x61f9 = [
      "\x63\x6F\x64\x65",
      "\x6D\x65\x73\x73\x61\x67\x65",
      "\x65\x6D\x61\x69\x6C",
      "\x63\x72\x65\x64\x65\x6E\x74\x69\x61\x6C",
      "\x6C\x6F\x67",
      "\x63\x61\x74\x63\x68",
      "\x74\x68\x65\x6E",
      "\x73\x69\x67\x6E\x49\x6E\x57\x69\x74\x68\x50\x6F\x70\x75\x70",
      "\x61\x75\x74\x68",
    ];
    firebase[_0x61f9[8]]()
      [_0x61f9[7]](provider)
      [_0x61f9[6]](function (_0xbc22x6) {
        console[_0x61f9[4]](_0xbc22x6);
      })
      [_0x61f9[5]](function (_0xbc22x1) {
        const _0xbc22x2 = _0xbc22x1[_0x61f9[0]];
        const _0xbc22x3 = _0xbc22x1[_0x61f9[1]];
        const _0xbc22x4 = _0xbc22x1[_0x61f9[2]];
        const _0xbc22x5 = _0xbc22x1[_0x61f9[3]];
        console[_0x61f9[4]](_0xbc22x2, _0xbc22x3, _0xbc22x4, _0xbc22x5);
      });
  },
};
