import { UserConfig } from "vite";
import ssr from "vite-plugin-ssr/plugin";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
const config: UserConfig = {
  plugins: [react(), ssr()],
};

export default config;
