class Cart {
  // Selector Cart
  ProductAdded = () => cy.get('[data-opaque-css="fade"].qa-item-name.bl-link.is-bold');
  btnLanjutPembayaran = () => cy.get(".qa-btn-to-checkout.bl-button.bl-button--primary.bl-button--medium.bl-button--block");
  CheckBoxPilihSemua = () => cy.get(".bl-checkbox__label");
}
export default new Cart();
