import axios from "axios";

const updatedExpenses = async (year, month) => {
  const { data } = await axios.get("/api/transactions/getExpenseByMonth");

  const newData = data?.expenseByMonth?.find(
    (report) => report._id.month === month && report._id.year === year
  );

  return newData === undefined ? 0 : newData.total;
};

const updatedIncomes = async (year, month) => {
  const { data } = await axios.get("/api/transactions/getIncomeByMonth");

  const newData = data?.incomeByMonth?.find(
    (report) => report._id.month === month && report._id.year === year
  );

  return newData === undefined ? 0 : newData.total;
};
export async function fetchCurrentExpenses(year, month) {
  const { data } = await axios.get(
    `api/transactions/getExpenseDetail/${year}-${month}`
  );
  // token.set(data.user.token);
  return data.expenseDetail;
}
export async function fetchCurrentIncome(year, month) {
  const { data } = await axios.get(
    `api/transactions/getIncomeDetail/${year}-${month}`
  );
  // token.set(data.user.token);
  return data.incomeDetail;
}

const balanceServices = {
  updatedExpenses,
  updatedIncomes,
};

export default balanceServices;
