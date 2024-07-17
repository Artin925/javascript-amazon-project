import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSymmary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import "../data/cart-class.js";
// import "../data/backend-practice.js";

Promise.all([
  new Promise((resolve) => {
    loadProducts(() => {
      resolve("value1");
    });
  }),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  }),
]).then((values) => {
  renderOrderSummary();
  renderPaymentSymmary();
});

// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve();
//   });
// })
//   .then(() => {
//     return new Promise((resolve) => {
//       loadCart(() => {
//         resolve();
//       });
//     });
//   })
//   .then(() => {
//     renderOrderSummary();
//     renderPaymentSymmary();
//   });

// loadProducts(() => {
//   renderOrderSummary();
//   renderPaymentSymmary();
// });
