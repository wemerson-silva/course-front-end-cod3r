<template>
  <footer class="footer">
    <span>
      Copyright
      <strong>Courser Vue Front End</strong>©2020
    </span>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
.footer {
  grid-area: footer;
  background-color: #dddddd;
  color: #333;
  diplay: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
  display: flex;
  items-align:center
}

</style>