export function useAuth() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return { isLoggedIn };
}
