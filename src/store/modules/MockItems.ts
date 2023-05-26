import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { Actions, Mutations } from "@/store/enums/StoreEnums";

@Module
export default class BodyModule extends VuexModule {
  isLoading = false
  googleResult = {}
  appleResult = {}

  @Mutation
  [Mutations.SET_LOADING](value): void {
    this.isLoading = value
  }

  @Mutation
  [Mutations.SET_GOOGLE](value): void {
    this.googleResult = value
  }

  @Mutation
  [Mutations.SET_APPLE](value): void {
    this.appleResult = value
  }
}


