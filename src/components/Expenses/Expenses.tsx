import React, { FC } from "react";
import Card from "src/layout/Card";
import { MOCK_YEAR } from "src/utils/dropdown-year";
import styled from "styled-components";
import Expense, { ExpenseProps } from "./Expense";

export interface ExpensesProps {
  expenses: ExpenseProps[];
  onSelectedYear: (selectedYear: string) => void;
}

const Expenses: FC<ExpensesProps> = ({ expenses, onSelectedYear }) => {
  const selectYearHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const targetYear = event.target.value;

    onSelectedYear(targetYear);
  };

  return (
    <Card>
      <ExpensesWrapper>
        <Card>
          <DropDownHolder>
            <span>지출일</span>
            <span>지출 내용</span>
            <span>지출액</span>

            <div>지출 연도 선택</div>
            <select onChange={selectYearHandler}>
              {MOCK_YEAR.map((year) => (
                <DropDownOption key={year.id}>{year.value}</DropDownOption>
              ))}
            </select>
          </DropDownHolder>
        </Card>
        <ExpensesUl>
          {expenses.map((expense) => (
            <Expense
              key={expense.id}
              amount={expense.amount}
              date={expense.date}
              title={expense.title}
            />
          ))}
        </ExpensesUl>
      </ExpensesWrapper>
    </Card>
  );
};

const ExpensesWrapper = styled.div`
  width: 100%;
`;

const ExpensesUl = styled.ul`
  width: 100%;
  margin: 0 auto;
`;

const DropDownHolder = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 30px;

  > span {
    margin: 0 20px;
  }
`;

const DropDownOption = styled.option`
  &:hover {
    background: #f5f2e7;
    color: #000;
  }
`;

export default Expenses;
