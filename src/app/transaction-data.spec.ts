import { TransactionData } from './transaction-data';

describe('TransactionData', () => {
  it('should create an instance', () => {
    expect(new TransactionData('','',0,'')).toBeTruthy();
  });
});
