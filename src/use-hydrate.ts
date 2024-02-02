import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export interface UseHydrateProps<
  TValue,
  TAction extends ActionCreatorWithPayload<TValue>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TSelector extends (state: any) => TValue
  > {
  initial: TValue
  action: TAction
  selector: TSelector
}

export function useHydrate<
  TValue,
  TAction extends ActionCreatorWithPayload<TValue> = ActionCreatorWithPayload<TValue>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TSelector extends (state: any) => TValue = () => TValue
  >({ initial, action, selector }: UseHydrateProps<TValue, TAction, TSelector>) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch((action(initial)));
  // Only at first render
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return useSelector(selector);
}
