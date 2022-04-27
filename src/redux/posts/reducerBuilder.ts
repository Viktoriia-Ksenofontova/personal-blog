import {
  createReducer,
  PayloadAction,
  ActionCreatorWithPayload,
  Reducer,
  Draft,
} from '@reduxjs/toolkit';

type ActionHandler<STATE, PAYLOAD> = (
  state: Draft<STATE>,
  payload: PAYLOAD,
) => STATE;

export class ReducerBuilder<STATE, ACTIONS extends PayloadAction<any, string>> {
  private readonly initialState: STATE;
  private readonly cases: Array<{
    type: string;
    handler: ActionHandler<STATE, any>;
  }>;

  private constructor(
    initialState: STATE,
    cases: Array<{ type: string; handler: ActionHandler<STATE, any> }>,
  ) {
    this.initialState = initialState;
    this.cases = cases;
  }

  static new<STATE>(initialState: STATE): ReducerBuilder<STATE, never> {
    return new ReducerBuilder(initialState, []);
  }

  addCase<TYPE extends string, PAYLOAD>(
    actionCreator: ActionCreatorWithPayload<PAYLOAD, TYPE>,
    actionHandler: ActionHandler<STATE, PAYLOAD>,
  ): ReducerBuilder<STATE, ACTIONS | PayloadAction<PAYLOAD, TYPE>> {
    return new ReducerBuilder(this.initialState, [
      ...this.cases,
      { type: actionCreator.type, handler: actionHandler },
    ]);
  }

  build(): Reducer<STATE, ACTIONS> {
    return createReducer(this.initialState, builder => {
      this.cases.forEach(({ type, handler }) => {
        builder.addCase(
          type,
          (state: Draft<STATE>, action: PayloadAction<any, string>) =>
            handler(state, action.payload),
        );
      });
    });
  }
}
