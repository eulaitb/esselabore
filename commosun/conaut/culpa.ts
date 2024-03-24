
const { DataBlock } = require('@data-blocks/core');
const { TransactionBlock } = require('@data-blocks/transaction');

const block = new TransactionBlock();
const pureBlock = block.pure('forward');

