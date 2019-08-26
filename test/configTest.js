const assert = require('chai').assert
const crypto = require('../server/config/cryptografia')

describe('crypt',function(){
    it('crypt should be not null',function(){   
        assert.isNotNull(crypto)
    })
})

describe('crypt',function(){
    it('deveria retornar uma string',function(){   
        crypto.criptografar('aldo').
        then((data)=>{
            assert.isNotNull(data)
        })
    })

    it('deveria retornar true encontrando o verificar crypt',function(){
        crypto.criptografar('aldo').
        then((data)=>{
           crypto.verificarCripto(data,'aldo').
           then((ret)=>{
               assert.isTrue(ret)
           }).catch((ret)=>{
            assert.isTrue(ret)
           })
        })
    })

    it('deveria retornar false encontrando o verificar crypt',function(){
        crypto.criptografar('aldo').
        then((data)=>{
           crypto.verificarCripto(data,'ald').
           then((ret)=>{
               assert.isFalse(ret)
           }).catch((ret)=>{
            assert.isTrue(ret)
           })
        })
    })
})