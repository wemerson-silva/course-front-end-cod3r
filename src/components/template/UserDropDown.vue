<template>
  <div class="user-dropdown">
    <div class="user-button">
      <span class="d-none d-sm-block">{{user.name}}</span>
      <div class="user-dropdown-img">
        <VueGravatar :email="user.email" alt="User" />
      </div>
      <i class="fa fa-angle-down"></i>
    </div>
    <div class="user-dropdown-content">
        <router-link to="/admin"><i class="fa fa-cogs"></i> Administração</router-link>
        <a href=""><i class="fa fa-sign-out"></i> Exit</a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import VueGravatar from "vue-gravatar";

export default {
  name: "UserDropDown",
  components: { VueGravatar },
  computed: mapState(["user"])
};
</script>

<style>
.user-dropdown {
    position: relative;
    height: 100%;
}
.user-button {
    display: flex;
    align-items: center;
    color: #fff;
    font-weight: 100;
    height: 100%;
    padding: 0px 20px;
    transition: 0.5s all;
}
.user-dropdown:hover {
    background-color: rgba(0, 0, 0, 0.2);
    transition: 0.5s all;
    cursor: pointer;
}
.user-dropdown-img {
    margin:  0px 10px;
}
.user-dropdown-img > img {
    max-height: 37px;
    border-radius: 2px;
}
.user-dropdown-content {
    position: absolute;
    right: 0px;
    background-color: #f9f9f9;
    min-width: 170px;
    box-shadow:  0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 0px 0px;
    z-index: 5;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    visibility:  hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
}
.user-dropdown:hover .user-dropdown-content {
    visibility: visible;
    opacity: 1;
}
.user-dropdown-content a{
    text-decoration: none;
    color: #000;
    padding: 15px;
    transition: color 0.5s, 0.5s;
}
.user-dropdown-content a:hover {
    text-decoration: none;
    color: slategrey;
    transition: color 0.5s, 0.5s;
    background-color: rgba(0, 0, 0, 0.2);
}

</style>