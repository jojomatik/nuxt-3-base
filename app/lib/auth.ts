/**
 * Returns the user id written into the localStorage `user-id`, if available.
 *
 * Otherwise, `null` is returned.
 */
export function getAuthorizedUserID(): string | null {
  return localStorage.getItem("user-id") ?? null;
}

/**
 * Sets the given {@link userId} as `user-id` in localStorage.
 *
 * @param userId
 */
export function login(userId: string): void {
  localStorage.setItem("user-id", userId);
}

/**
 * Removes the `user-id` from localStorage.
 */
export function logout(): void {
  localStorage.removeItem("user-id");
}
