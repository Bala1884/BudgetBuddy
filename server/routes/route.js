import express from "express";
import controller from "../controller/controller.js"
const router =express.Router();

router.route("/api/categories")
.post(controller.createCategories)
.get(controller.getCategories)

router.route("/api/transaction")
.post(controller.createTransaction)
.get(controller.getTransaction)
.delete(controller.deleteTransaction)

router.route("/api/Labels")
.get(controller.getLabels)
export default router