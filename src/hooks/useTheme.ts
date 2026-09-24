import { useEffect, useState } from "react";
import themes from "../components/styles/themes";
import { setToLS, getFromLS } from "../utils/storage";
import { readSharedTheme, writeSharedTheme } from "../utils/themeSync";
import { DefaultTheme } from "styled-components";

export const useTheme = () => {
  const [theme, setTheme] = useState<DefaultTheme>(themes.dark);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode: DefaultTheme) => {
    setToLS("tsn-theme", mode.name);
    writeSharedTheme(mode.name); // 写 .mujiu.net cookie，让图形化主页等子站跟着换
    setTheme(mode);
  };

  useEffect(() => {
    // 优先用全站共享的 cookie（可能是在 gui.mujiu.net 选的），其次本站历史值，最后默认 dark
    const shared = readSharedTheme();
    const local = getFromLS("tsn-theme") || "";
    if (!shared && local && themes[local]) writeSharedTheme(local); // 老用户：把历史选择迁移进 cookie
    const name = shared || local;
    setTheme(name && themes[name] ? themes[name] : themes.dark);
    setThemeLoaded(true);

    // 在别的子站换了主题，切回本页时跟随
    const sync = () => {
      if (document.hidden) return;
      const n = readSharedTheme();
      if (n && themes[n]) setTheme(themes[n]);
    };
    window.addEventListener("focus", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      window.removeEventListener("focus", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  return { theme, themeLoaded, setMode };
};
