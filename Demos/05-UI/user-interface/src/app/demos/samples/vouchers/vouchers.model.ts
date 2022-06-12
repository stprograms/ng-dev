export class VoucherDetail {
  ID: number;
  VoucherID: number;
  AccountID: number;
  Account: BalanceAccount;
  Text: string;
  Amount: number;
  Comment: string;
}

export class BalanceAccount {
  ID: number;
  Name: string;

  Expense: boolean;
  VoucherDetails: VoucherDetail[];
}

export class Voucher {
  ID: number;
  Text: string;
  Date: string;
  Amount: number;
  Paid: boolean;
  Expense: boolean;
  Remark?: boolean;
  Readonly?: boolean;
  Details?: VoucherDetail[];
}

export interface Todo {
  title: string;
  dateAdded: string;
}
