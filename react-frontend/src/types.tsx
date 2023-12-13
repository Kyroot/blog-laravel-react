// In appTypes.ts
import { Action, ThunkAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { RootState } from './redux/store';

// Define a type for thunk actions
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// Extend the Dispatch interface to handle thunk actions
export interface AppDispatch extends Dispatch {
  (action: AppThunk): any;
}

// Now, AppDispatch is a type that can handle both regular actions and thunk actions
