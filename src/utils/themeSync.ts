// 全站主题互通：mujiu.net 下各子站共用一枚 cookie。
// localStorage 按"域"隔离（mujiu.net 与 gui.mujiu.net 互不可见），只有 cookie 能跨子域，
// 所以主题名写进 .mujiu.net 作用域的 cookie，图形化主页与本终端站等页面共享同一个值。
const THEME_COOKIE = "mujiu_theme";
const THEME_MAX_AGE = 31536000; // 1 年

export const readSharedTheme = (): string => {
  try {
    const m = document.cookie.match(/(?:^|;\s*)mujiu_theme=([^;]+)/);
    return m ? decodeURIComponent(m[1]) : "";
  } catch (e) {
    return "";
  }
};

export const writeSharedTheme = (name: string): void => {
  if (!name) return;
  try {
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    const base = `${THEME_COOKIE}=${encodeURIComponent(
      name
    )}; path=/; max-age=${THEME_MAX_AGE}; SameSite=Lax${secure}`;
    document.cookie = `${base}; domain=.mujiu.net`; // 主站与各子域共享
    document.cookie = base; // 本地预览等非 mujiu.net 主机下兜底
  } catch (e) {
    // cookie 被禁用时静默忽略，站点仍可用
  }
};
