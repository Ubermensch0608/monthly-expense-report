import React, { FC } from "react";
import { Card } from "src/layout";
import styled from "styled-components";
import { ExpenseDataProps } from "../NewExpense/NewExpense";

const MONTH_LIST = [
  {
    id: "m1",
    month: "01",
  },
  {
    id: "m2",
    month: "02",
  },
  {
    id: "m3",
    month: "03",
  },
  {
    id: "m4",
    month: "04",
  },
  {
    id: "m5",
    month: "05",
  },
  {
    id: "m6",
    month: "06",
  },
  {
    id: "m7",
    month: "07",
  },
  {
    id: "m8",
    month: "08",
  },
  {
    id: "m9",
    month: "09",
  },
  {
    id: "m10",
    month: "10",
  },
  {
    id: "m11",
    month: "11",
  },
  {
    id: "m12",
    month: "12",
  },
];

const Chart: FC<{ filteredList: ExpenseDataProps[] }> = ({ filteredList }) => {
  let count = 0;
  for (let i = 0; i < filteredList.length; i++) {
    if (filteredList[i].date.split(".")[1] === MONTH_LIST[i].month) {
      count++;
    }
  }

  return (
    <Card>
      <ChartWrapper>
        <ChartBars>
          <ChartBar expenseRate="10">.</ChartBar>
          <ChartBar expenseRate="20"></ChartBar>
          <ChartBar expenseRate="30"></ChartBar>
          <ChartBar expenseRate="40"></ChartBar>
          <ChartBar expenseRate="50"></ChartBar>
          <ChartBar expenseRate="60"></ChartBar>
          <ChartBar expenseRate="70"></ChartBar>
          <ChartBar expenseRate="80"></ChartBar>
          <ChartBar expenseRate="90"></ChartBar>
          <ChartBar expenseRate="100"></ChartBar>
          <ChartBar expenseRate="100"></ChartBar>
          <ChartBar expenseRate="100"></ChartBar>
        </ChartBars>

        <Month>
          <div>1월</div>
          <div>2월</div>
          <div>3월</div>
          <div>4월</div>
          <div>5월</div>
          <div>6월</div>
          <div>7월</div>
          <div>8월</div>
          <div>9월</div>
          <div>10월</div>
          <div>11월</div>
          <div>12월</div>
        </Month>
      </ChartWrapper>
    </Card>
  );
};

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 200px;
  width: 100%;
  color: #fff;
`;
const ChartBars = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-evenly;
  align-items: flex-end;
`;

const ChartBar = styled.div<{ expenseRate: string }>`
  background-color: #fff;
  content: "";
  width: 10px;
  height: ${(props) => props.expenseRate}%;
`;

const Month = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export default Chart;
