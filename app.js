import { createSSRApp } from "vue";

/**
 * サーバと共用するApp生成メソッド
 * @return {App<Element>} app
 */
export const createApp = () => {
  return createSSRApp({
    data() {
      return {
        count: 0
      };
    },
    template: `
    <button @click="count++">increment</button>
    <p>count: {{ count }}</p>
    `,
  });
};
