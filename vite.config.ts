import * as path from "path";

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
    build: {
        target: "es2018",
        lib: {
            entry: path.resolve(__dirname, "src/index.js"),
            name: "index",
            fileName: "index",
        },
        outDir: "dist",
        assetsDir: ".",
    },
    plugins: [
        dts() // d.ts를 생성하여 타입정보 유지
    ],
});