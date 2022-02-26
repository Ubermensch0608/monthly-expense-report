import { nanoid } from "nanoid";
import React, { FC, useRef } from "react";

export interface ExpenseDataProps {
  id: string;
  title: string;
  date: string;
  amount: number;
}

export interface NewExpenseProps {
  onNewExpense: (expenses: ExpenseDataProps) => void;
}

const NewExpense: FC<NewExpenseProps> = ({ onNewExpense }) => {
  const expenseTitleRef = useRef<HTMLInputElement>(null);
  const expenseDateRef = useRef<HTMLInputElement>(null);
  const expenseAmountRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const currentTitleValue = expenseTitleRef.current!.value;
    const currentDateValue = expenseDateRef.current!.value;
    const currentAmountValue = expenseAmountRef.current!.value;

    onNewExpense({
      id: nanoid(),
      title: currentTitleValue,
      date: currentDateValue,
      amount: Number(currentAmountValue),
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>지출 내용</label>
          <input type="text" ref={expenseTitleRef} />
        </div>

        <div>
          <label>지출일</label>
          <input type="date" ref={expenseDateRef} />
        </div>

        <div>
          <label>지출액</label>
          <input type="text" ref={expenseAmountRef} />
        </div>

        <div>
          <button type="submit">입력하기</button>
        </div>
      </form>
    </div>
  );
};

export default NewExpense;
