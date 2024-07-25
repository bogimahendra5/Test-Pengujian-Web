class HomePage {
  //Selector for Home Page
  LoginSnackbar = () => cy.get('[data-test="snackbar"]');
  CartMenu = () => cy.get("a[href='/cart/carts?from=nav_header']");
  fieldSearch = () => cy.get("#v-omnisearch__input");
  btnSearch = () => cy.get("button[title='Cari']");
  Product = () =>
    cy.get(
      ":nth-child(2) > .te-product-card > .bl-product-card-new__wrapper > .bl-product-card-new__description > .bl-product-card-new__name > .bl-text > .bl-link"
    );
}
export default new HomePage();
