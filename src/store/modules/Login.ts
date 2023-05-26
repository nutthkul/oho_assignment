import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { Actions, Mutations } from "@/store/enums/StoreEnums";

@Module
export default class BodyModule extends VuexModule {
  loginData = [];

  @Mutation
  [Mutations.SET_LOGIN](loginData) {
    this.loginData = loginData;
    console.log("login:", this.loginData);
  }
}
