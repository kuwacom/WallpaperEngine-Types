// スライダー型
export type SliderProperty = {
  type: "slider";
  key?: string;
  text: string;
  order: number;
  index: number;
  min: number;
  max: number;
  step: number;
  precision: number;
  fraction: boolean;
  value: number;
}


// チェックボックス型
export type BoolProperty = {
  type: "bool";
  key?: string;
  text: string;
  order: number;
  index: number;
  value: boolean;
}


// セレクトメニュー型
export type ComboOption = {
  label: string;
  value: string;
}

export type ComboProperty = {
  type: "combo";
  key?: string;
  text: string;
  order: number;
  index: number;
  options: ComboOption[];
  value: string;
}

// 全ての型をまとめる
export type WallpaperEngineProperty = SliderProperty | BoolProperty | ComboProperty;

// プロパティの辞書型（オブジェクトで複数のプロパティが入る）
export type WallpaperEngineProperties = Record<string, WallpaperEngineProperty>;
