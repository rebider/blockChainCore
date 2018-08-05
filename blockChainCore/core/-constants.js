/**
 * 
 * 
 * 
 * 
 */



module.exports = {

    amtfns: {
        // address
        accountCreateByPassword: 'createByPassword', // 创建加密账户
        accountVerifyAddressValid: 'verifyAddressValid', // 验证地址有效性
        // signature
        accoundHashForSign: 'hashForSign', // 为签名取原文的hash
        accoundSignByPrivateKey: 'signByPrivateKey', // 通过私钥签名数据
        accoundVerifySignatureByPublicKey: 'verifySignatureByPublicKey', // 用公钥检签名是否正确
        // multisign
        multisignCreateDoublePublicKeyScriptPair: 'createDoublePublicKeyScriptPair', // 创建多重签名 key script
        multisignHandlePairToSignature: 'handlePairToSignature', // 处理多重签名
        // consensus 共识
        consensusGetBlockSlot: 'getBlockSlot',
        // reward 奖励机制
        rewardGetBlockCoinbaseByHeight: 'getBlockCoinbaseByHeight', // 计算获取区块奖励
        // asset 资产
        assetRegisterTypeHandle: 'registerTypeHandle', // 注册处理资产类型
        // transport 数据传输
        transportPackBlock: 'packBlock', // 打包区块数据
        transportPackTransaction: 'packTransaction', // 打包交易
        transportUnpackBlock: 'unpackBlock', // 解包区块
        transportUnpackTransaction: 'unpackTransaction', // 交易解包
        

    },

    amtfnids: {
        // 标识采用比特币的算法
        bitcoinUsed: 'bitcoin_used',
        // 标识 Tribe Trust 的算法
        tribetrustUsed: 'tribetrust_used',
    },






}