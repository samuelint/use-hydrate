import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export function useHydrate<
  TInitialValue, 
  TState,
  TSelectedValue = unknown,
  TAction extends ActionCreatorWithPayload<TInitialValue> = ActionCreatorWithPayload<TInitialValue>, 
  
>
    (initial: TInitialValue,
      action: TAction,
      selector?: (state: TState) => TSelectedValue): TSelectedValue | undefined {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(action(initial));
    // Only at first render
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // @ts-ignore -- Allow to return undefined if selector is not defined
    return useSelector<TState, TSelectedValue>(selector ? selector : () => undefined);
}
