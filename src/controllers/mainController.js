const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = require("../utils/toThousand")
const finalPrice = require("../utils/finalPrice")

const controller = {
	index: (req, res) => {
		return res.render("index",{
			products,
			toThousand,
			finalPrice
		})
	},
	login: (req, res) => {
		return res.render("login",{
		})
	},
};

module.exports = controller;
