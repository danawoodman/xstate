import type { ActorRef, Behavior, EventObject } from 'xstate';
import { spawnBehavior } from 'xstate/lib/behaviors';

/**
 * SolidJS composable that spawns an `ActorRef` with the specified `behavior`.
 * The returned `ActorRef` can be used with the `useActor(() => actorRef)` hook.
 *
 * @param behavior The actor behavior to spawn
 * @returns An ActorRef with the specified `behavior`
 */
export function useSpawn<TState, TEvent extends EventObject>(
  behavior: Behavior<TEvent, TState>
): ActorRef<TEvent, TState> {
  return spawnBehavior(behavior);
}
