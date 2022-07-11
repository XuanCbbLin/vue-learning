<template>
  <!-- <MenuVue :title="menuData.name" :child="menuData.childNodes" /> -->
  <!-- <DynamicComponent /> -->
  <DynamicComponentHookVue />
</template>

<script setup>
import MenuVue from "./components/Menu.vue";
import DynamicComponent from "./components/DynamicComponent.vue";
import DynamicComponentHookVue from "./components/DynamicComponentHook.vue";

const menuData = {
  name: "好書推薦",
  childNodes: [
    {
      name: "Git",
      url: null,
      childNodes: [
        {
          name: "為你自己學 Git",
          url: "https://www.tenlong.com.tw/products/9789864342662",
        },
      ],
    },
    {
      name: "前端開發",
      url: null,
      childNodes: [
        {
          name: "金魚都能懂的 CSS 選取器",
          url: "https://www.tenlong.com.tw/products/9789864344994",
        },
        {
          name: "0 陷阱！0 誤解！8 天重新認識 JavaScript！",
          url: "https://www.tenlong.com.tw/products/9789864344130",
        },
        {
          name: "讓 TypeScript 成為你全端開發的 ACE！",
          url: "https://www.tenlong.com.tw/products/9789864344895",
        },
      ],
    },
    {
      name: "IoT",
      url: null,
      childNodes: [
        {
          name: "IoT沒那麼難！新手用 JavaScript 入門做自己的玩具！",
          url: "https://www.tenlong.com.tw/products/9789864345328",
        },
      ],
    },
    {
      name: "Chatbot",
      url: null,
      childNodes: [
        {
          name: "人人可作卡米狗：從零打造自己的 LINE 聊天機器人",
          url: "https://www.tenlong.com.tw/products/9789864342938",
        },
      ],
    },
  ],
};
</script>

<style></style>
