module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: [
    "react-refresh",
    //import 관련 규칙 추가
    "import",
    "unused-imports",
    //react 관련 규칙 추가
    "react",
    "jsx-a11y",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "vite.config.js"],
  parserOptions: {
    ecmaFeatures: {
      //jsx 구문 파싱할 수 있도록 설정
      jsx: true,
    },
    // 사용할 ECMA 버전 지정
    ecmaVersion: "latest",
    // 모듈 형식을 사용한다는 것을 명시
    sourceType: "module",
  },
  settings: {
    react: { version: "18.2" },
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      alias: {
        map: [["@", "./src"]],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    // 함수 컴포넌트를 화살표 함수 형태로 정의하도록 규칙 설정
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    // redux immer를 통해 불변성 관리하는 경우
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsFor: ["state"] },
    ],
    // 변수나 함수를 선언하기 전에 사용하는 것을 허용
    "no-use-before-define": "off",
    // 기본 export를 선호하는 규칙 비활성화
    "import/prefer-default-export": "off",
    // JSX props의 spreading을 허용함
    "react/jsx-props-no-spreading": "off",
    // 이 프로젝트 한정 구현 조건에 alert를 사용하기 때문에 사용
    "no-restricted-globals": "off",
    // 이 프로젝트 한정 구현 조건에 alert를 사용하기 때문에 사용
    "no-alert": "off",
    "react/jsx-no-target-blank": "off",
    "react/jsx-wrap-multilines": "off",
    // export {default} 사용
    "no-restricted-exports": "off",
    // jsx는 원래 import React를 해줬어야하나, 이젠 React17에서 자동으로 import되므로 필요하지 않음.
    "react/react-in-jsx-scope": "off",
    // 객체 중괄호 내부에서 줄바꿈을 강제하지 않음
    "object-curly-newline": "off",
    // prop-types 맞추라는 경고 무시
    "react/prop-types": "off",
    //안 쓰는 import 에러 처리
    "unused-imports/no-unused-imports": "error",
    // eslint-plugin-import 사용으로 인한 styled-components 불러오기시 에러 발생
    "import/no-named-as-default": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/order": [
      "error",
      {
        groups: [
          // 내장 모듈
          "builtin",
          // npm을 통해 설치된 외부 모듈
          "external",
          // 프로젝트 내부에서 설정한 경로 별칭을 사용하는 모듈
          "internal",
          // 상위 디렉토리에 있는 모듈
          "parent",
          // 같은 디렉토리에 있는 모듈
          "sibling",
          // 같은 디렉토리의 index 파일
          "index",
        ],
        pathGroups: [
          {
            pattern: "react*",
            group: "external",
            position: "before",
          },
          {
            pattern: "@/hooks{,/**}",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/schemas{,/**}",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/utils{,/**}",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/constants{,/**}",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/pages{,/**}",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/components{,/**}",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/styles{,/**}",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/svg{,/**}",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/**",
            group: "internal",
            position: "after",
          },
        ],
        // pathGroups 규칙을 적용하지 않을 import 타입을 설정
        pathGroupsExcludedImportTypes: [],
        // 임포트 그룹 사이 개행 여부
        "newlines-between": "never",
        alphabetize: {
          // 알파벳 순서대로 정렬
          order: "asc",
          // 대소문자 구분 없이 정렬
          caseInsensitive: true,
        },
      },
    ],
  },
};
