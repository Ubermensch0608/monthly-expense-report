import { nanoid } from "nanoid";
import React, { FC, useRef } from "react";
import { Card, Button } from "src/layout";
import styled from "styled-components";

export interface ExpenseDataProps {
  id: string;
  title: string;
  date: string;
  amount: string;
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

    if (
      currentTitleValue.trim().length === 0 ||
      currentDateValue.trim().length === 0 ||
      currentAmountValue.trim().length === 0
    ) {
      return;
    }

    onNewExpense({
      id: nanoid(),
      title: currentTitleValue,
      date: currentDateValue.replaceAll("-", "."),
      amount: Number(currentAmountValue).toLocaleString(),
    });

    expenseTitleRef.current!.value = "";
    expenseDateRef.current!.value = "";
    expenseAmountRef.current!.value = "";
  };

  return (
    <Card>
      <NewExpenseFormWrapper>
        <NewExpenseFormTitle>
          <div>새로운 지출 등록</div>
        </NewExpenseFormTitle>
        <FormCard>
          <NewExpenseForm onSubmit={submitHandler}>
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
              <Button type="submit">입력하기</Button>
            </div>
          </NewExpenseForm>
        </FormCard>
      </NewExpenseFormWrapper>
    </Card>
  );
};

export const NewExpenseFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const NewExpenseFormTitle = styled.div`
  display: flex;
  justify-content: left;
  width: 100%;
  margin: 20px 0 20px 60px;

  font-weight: 700;
  font-size: 20px;
`;

export const NewExpenseForm = styled.form`
  width: 90%;
`;

export const FormCard = styled(Card)`
  width: 50%;
`;
export default NewExpense;
