<template>
  <div class="admin-pages">
    <PageTitle icon="fa fa-cogs" main="Administração" sub="Ferramentas Administrativas" />
    <div class="admin-pages-tabs">

      <b-card no-body>
    <b-tabs pills card vertical>
      <b-tab title="Usuarios" active><UserAdmin/></b-tab>
      <b-tab title="Categorias"><CategoryAdmin/></b-tab>
      <b-tab title="Artigos"><ArticleAdmin/></b-tab>
    </b-tabs>
  </b-card>
  
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/template/PageTitle";
import ArticleAdmin from "@/components/admin/ArticleAdmin";
import CategoryAdmin from "@/components/admin/CategoryAdmin";
import UserAdmin from "@/components/admin/UserAdmin";

export default {
  name: "AdminPages",
  components: { PageTitle, ArticleAdmin, CategoryAdmin, UserAdmin }
};
</script>

<style>
.custom-control-input,
.custom-control-input::before,
.custom-control-input:focus {
  border: 0 !important;
  box-shadow: none !important;
  outline: none !important;
}
</style>