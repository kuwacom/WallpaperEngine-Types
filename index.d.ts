import { WallpaperEngineProperty, WallpaperEngineProperties } from "./property";

export {};
declare global {
  interface Window {
    wallpaperPropertyListener: {
      // applyUserProperties: (properties: Record<string, unknown>) => void;
      applyUserProperties: (properties: WallpaperEngineProperties) => void;
    };
  }
}
