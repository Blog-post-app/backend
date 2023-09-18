const express = require("express");
const router = express.Router();

const {
    updateProfile,
    getProfile,
    createPost,
    showAdminYazilar,
    showAdminSiirler,
    showAdminMakaleler,
    showAdminGundemeDair,
    showAdminPosts,
  } = require("../controllers/admin.controller");

  const { isAuthenticated, isAdmin } = require("../middleware/auth");

router.get("/admin/anasayfa", showAdminPosts);
router.get("/admin/yazilar", showAdminYazilar);
router.get("/admin/siirler", showAdminSiirler);
router.get("/admin/makaleler", showAdminMakaleler);
router.get("/admin/gundeme-dair", showAdminGundemeDair);
router.put("/admin/profile/update/", isAuthenticated, isAdmin, updateProfile);
router.get("/admin/profile", isAuthenticated, getProfile);

module.exports = router;