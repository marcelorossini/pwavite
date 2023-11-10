export default function isPwa(): boolean {
  if (typeof window == "undefined") return false;
  
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    // @ts-ignore
    window.navigator.standalone ||
    document.referrer.includes("android-app://")
  );
}
