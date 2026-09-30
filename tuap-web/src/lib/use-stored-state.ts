"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";

// Per-browser persistence for frontend-only features (onboarding progress, drafts).
// Falls back to in-memory storage when localStorage is unavailable (private mode, blocked storage).
const memory = new Map<string, string>();
const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function read(key: string): string | null {
  if (memory.has(key)) return memory.get(key)!;
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function useStoredState<T>(key: string, fallback: T): [T, (value: T) => void] {
  const raw = useSyncExternalStore(
    subscribe,
    () => read(key),
    () => null,
  );

  const value = useMemo(() => {
    if (raw == null) return fallback;
    try {
      return JSON.parse(raw) as T;
    } catch {
      return fallback;
    }
  }, [raw, fallback]);

  const setValue = useCallback(
    (next: T) => {
      const serialised = JSON.stringify(next);
      memory.set(key, serialised);
      try {
        window.localStorage.setItem(key, serialised);
      } catch {
        // Storage unavailable — the in-memory copy keeps the UI working for this visit.
      }
      listeners.forEach((l) => l());
    },
    [key],
  );

  return [value, setValue];
}
