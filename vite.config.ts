import * as path from "path";
import { createRequire } from 'node:module';

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import copy from "rollup-plugin-copy";
import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5';
const require = createRequire( import.meta.url );

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
        ckeditor5( {
            theme: require.resolve( '@ckeditor/ckeditor5-theme-lark' )
        }),
        copy({
            targets: [
                { src: "assets/*", dest: "dist" }, // 복사할 파일 및 디렉토리 설정
            ]}
        ),
        dts() // d.ts를 생성하여 타입정보 유지
    ],
});