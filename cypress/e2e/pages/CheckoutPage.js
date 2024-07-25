import CartPage from "./CartPage";

class Checkout {
  //Selector for Checkout
  ProductCheckoutList = () => cy.get('[data-opaque-css="fade"].qa-item-name.bl-link.is-bold');
  VAPayMethod = () => cy.get("label[for='virtual_account'] div[class='bl-flex-container p-20']");
  btnPilihMetodeBayar = () => cy.get(".qa-btn-submit");
  CardRincianHarga = () => cy.get(".sticky-sidebar-checkout.bl-card.bl-card--outlined");

  // step Flow to Checkout after flow Beli
  stepCheckout = () => {
    CartPage.CheckBoxPilihSemua().click();
    CartPage.btnLanjutPembayaran().click();
  };
}
export default new Checkout();
