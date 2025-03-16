import { defineConfig } from "vite";
import path from "path";
import babel from "vite-plugin-babel";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // 예: "@" 별칭이 src 폴더를 가리킴
    },
  },
  // esbuild: {
  // jsx: "transform", // esbuild가 JSX를 변환하지 않고 그대로 Babel에게 넘김
  // jsxInject: "import { jsx } from '@/libs/jsx/jsx-runtime'",
  // jsxFactory: "jsx.createElement", //명령어 지정
  // },

  // plugins: [babel()], // babel.config.json 파일의 설정을 읽어 JSX 변환 진행
  presets: ["@babel/preset-env"],
  plugins: [
    [
      "@babel/plugin-transform-react-jsx",
      {
        pragma: "createElement", // React.createElement 대신 사용할 함수명
        pragmaFrag: "Fragment", // React.Fragment 대신 사용할 이름
      },
    ],
  ],
});
