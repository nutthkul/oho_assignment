import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { Actions, Mutations } from "@/store/enums/StoreEnums";

@Module
export default class BodyModule extends VuexModule {
  isLoading = false
  user= null

  @Mutation
  [Mutations.SET_G_USER](value): void {
    this.isLoading = value
  }
}


