<template>
  <main style="font-size: 30px">
    <button @click="onClickCancleRequest">Cancle Request</button>

    <br />
    <br />
    <button @click="onClickNetworkDownRequest">Newwork Down Request</button>

    <br />
    <br />
    <button @click="onClickTimeoutRequest">Newwork Timeout Request</button>

    <br />
    <br />
    <img src="./assets/result.png" />
  </main>
</template>

<script setup>
import { onMounted } from "vue";

const onClickCancleRequest = () => {
  console.log("");
  console.warn("onClickCancleRequest");

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");

  xhr.onreadystatechange = function () {
    console.log("onreadystatechange:");
    console.log(xhr.readyState, xhr.status, xhr);
  };
  xhr.onabort = function (e) {
    console.error("onabort:", e);
  };
  xhr.onerror = function (e) {
    console.error("onerror:", e);
  };

  xhr.send();

  setTimeout(() => xhr.abort(), 1000 * 0);
};

const onClickNetworkDownRequest = () => {
  console.log("");
  console.warn("onClickNetworkDownRequest");

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");

  xhr.onreadystatechange = function () {
    console.log("onreadystatechange:");
    console.log(xhr.readyState, xhr.status, xhr);
  };
  xhr.onabort = function (e) {
    console.error("onabort:", e);
  };
  xhr.onerror = function (e) {
    console.error("onerror:", e);
  };

  setTimeout(() => {
    xhr.send();
  }, 1000 * 3);
};

const onClickTimeoutRequest = () => {
  console.log("");
  console.warn("onClickTimeoutRequest");

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
  xhr.timeout = 5;

  xhr.onreadystatechange = function () {
    console.log("onreadystatechange:");
    console.log(xhr.readyState, xhr.status, xhr);
  };
  xhr.onabort = function (e) {
    console.error("onabort:", e);
  };
  xhr.onerror = function (e) {
    console.error("onerror:", e);
  };
  // 监听 timeout 事件
  xhr.ontimeout = function (e) {
    console.error("ontimeout", e);
  };

  xhr.send();
};

onMounted(() => {});
</script>

<style>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
