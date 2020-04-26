<template>
  <div class="admin-pages">
    <PageTitle icon="fa fa-cogs" main="Administração" sub="Ferramentas Administrativas" />
    <div class="admin-pages-tabs">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Artigo" active>
            <ArticleAdmin />
          </b-tab>
          <b-tab title="Categorias">
            <CategoryAdmin />
          </b-tab>
          <b-tab title="Usuarios">
            <UserAdmin />
          </b-tab>
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
</style>