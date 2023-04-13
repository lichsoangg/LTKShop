const express = require("express");
const {
  createUser,
  loginUserController,
  getallUser,
  getaUser,
  deleteaUser,
  updateaUser,
  blockUser,
  unblockUser,
  handlerRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin,
  getWishlist,
  saveAddress,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrders,
  updateOrderStatus,
  getAllOrders,
  getOrderByUserId,
} = require("../controller/userController");
const {authMiddleware, isAdmin} = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/password", authMiddleware, updatePassword);
router.put("/reset-password/:token", resetPassword);
router.post("/login", loginUserController);
router.post("/admin-login", loginAdmin);
router.post("/cart", authMiddleware, userCart);
router.get("/cart", authMiddleware, getUserCart);
router.post("/cart/apply-coupon", authMiddleware, applyCoupon);
router.post("/cart/cash-order", authMiddleware, createOrder);
router.get("/get-orders", authMiddleware, getOrders);
router.get("/getallorders", authMiddleware, isAdmin, getAllOrders);
router.post("/getorderbyuser/:id", authMiddleware, isAdmin, getAllOrders);
router.delete("/empty-cart", authMiddleware, emptyCart);
router.get("/all-user", authMiddleware, isAdmin, getallUser);
router.get("/refresh/", handlerRefreshToken);
router.get("/logout/", logout);
router.get("/wishlist", authMiddleware, getWishlist);
router.get("/:id", authMiddleware, isAdmin, getaUser);
router.delete("/:id", authMiddleware, isAdmin, deleteaUser);
router.put("/edit-user", authMiddleware, updateaUser);
router.put("/save-address", authMiddleware, saveAddress);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
module.exports = router;
