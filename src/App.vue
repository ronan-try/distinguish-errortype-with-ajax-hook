<template>
  <main style="font-size: 30px">
    <button @click="onClickCancleRequest">Cancle Request</button>
    <button @click="onClickErrorRequest">Newwork Down Request</button>

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
    console.log("onabort:", e);
  };
  xhr.onerror = function (e) {
    console.log("onerror:", e);
  };

  xhr.send();

  setTimeout(() => xhr.abort(), 1000 * 0);
};

const onClickErrorRequest = () => {
  console.log("");
  console.warn("onClickErrorRequest");

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");

  xhr.onreadystatechange = function () {
    console.log("onreadystatechange:");
    console.log(xhr.readyState, xhr.status, xhr);
  };
  xhr.onabort = function (e) {
    console.log("onabort:", e);
  };
  xhr.onerror = function (e) {
    console.log("onerror:", e);
  };

  setTimeout(() => {
    xhr.send();
  }, 1000 * 3);
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
