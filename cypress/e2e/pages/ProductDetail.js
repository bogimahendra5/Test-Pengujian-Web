import HomePage from "./HomePage";

class ProductDetail {
  //Selector for Product Detail
  btnMasukanKeranjang = () => cy.get("button[class='c-main-product__action__cart bl-button bl-button--outline bl-button--medium'] svg");
  MessageProductName = () => cy.get(".c-cart-dialog__item__name");
  btnLihatKeranjang = () => cy.get(".c-cart-dialog__cart-button.c-btn.c-btn--default.c-btn--default.c-btn--default");
  btncloseMessage = () => cy.get("button[class='c-dialog__close']");

  //Step Search and Add Product to Cart
  stepAddProductToCart = (product) => {
    HomePage.fieldSearch().type(product);
    HomePage.btnSearch().click();
    cy.wait(500);
    HomePage.Product().contains(product).click();
    this.btnMasukanKeranjang().click();
    cy.wait(500);
    this.btnLihatKeranjang().should("be.visible");
    this.MessageProductName().should("be.visible").and("contain.text", product);
    this.btncloseMessage().click();
    cy.wait(1000);
  };
}
export default new ProductDetail();
