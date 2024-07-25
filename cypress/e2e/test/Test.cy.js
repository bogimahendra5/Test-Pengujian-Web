import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProductDetail from "../pages/ProductDetail";

describe("Login to Checkout Scenario Test", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.fixture("user.json").as("user");
    cy.fixture("product.json").as("product");
  });

  it("Test Login, Add Product, Checkout Scenario", function () {
    LoginPage.StepActionLogin(this.user.email, this.user.password);
    HomePage.LoginSnackbar().should("be.visible");
    ProductDetail.stepAddProductToCart(this.product.nama);
    HomePage.CartMenu().click();
    CartPage.ProductAdded().should("be.visible").and("contain.text", this.product.nama);
    CheckoutPage.stepCheckout();
    CheckoutPage.ProductCheckoutList().should("be.visible").and("contain.text", this.product.nama);
    CheckoutPage.btnPilihMetodeBayar().click();
    cy.wait(500);
    CheckoutPage.CardRincianHarga().should("be.visible");
  });
});
