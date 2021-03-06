export default {
	submitOrder: 'PROVIDER-ORDER:/order/gateway/unifiedorder',
	// cardLimit: 'PROVIDER-RSS:/rss/cardLimit/list',
	cardLimit: 'PROVIDER-RSS:/rss/cardLimit/supportChnBanks',
	checkCard: 'PROVIDER-ORDER:/order/common/check/card',
	submitB2COrder: 'PROVIDER-ORDER:/order/ebank/b2cOrder',
	submitB2BOrder: 'PROVIDER-ORDER:/order/ebank/b2bOrder',
	orderInfo: 'PROVIDER-ORDER:/order/orderInfo',
	orderStatus: 'PROVIDER-ORDER:/order/result',
	paymentEbankB2C: 'PROVIDER-ORDER:/order/gateway/b2cPay',
	paymentEbankB2B: 'PROVIDER-ORDER:/order/gateway/b2bPay',
	sign: 'PROVIDER-MERC:/merc/rsa/help/sign',
	agreeApply: 'PROVIDER-ORDER:/order/quickPay/quickOrder',
	agreeOrderPay: 'PROVIDER-ORDER:/order/quickPay/quickPay',
	noCardPay: 'PROVIDER-ORDER:/order/noCardPay/openAndConsume',
	noCardQuery: 'PROVIDER-ORDER:/order/noCardPay/noCardQuery',
	noCardConsume: 'PROVIDER-ORDER:/order/noCardPay/consume',
	formOrder: 'PROVIDER-ORDER:/order/noCardPay/formOrder',
	mercInfoDetail: 'PROVIDER-MERC:/merc/mercInfo/query/detail',
	H5OrderPay: 'PROVIDER-ORDER:/order/wxjsa/wxjsaOrder',
}