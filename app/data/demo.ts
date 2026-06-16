export type Bill = {
  id: string;
  name: string;
  amount: number;
  date: string;
  category: string;
  paid: boolean;
};

export type Goal = {
  id: string;
  name: string;
  target: number;
  saved: number;
  deadline: string;
  mode: "Extreme" | "Normal" | "Comfortable";
};

export type BudgetCategory = {
  id: string;
  name: string;
  budgeted: number;
  spent: number;
};

export type SplitExpense = {
  id: string;
  title: string;
  total: number;
  people: string[];
  paidBy: string;
};

export const demoIncome = {
  monthlyIncome: 4200,
  nextPaydayAmount: 2100,
  nextPaydayDate: "June 28",
  currentBalance: 1830,
};

export const demoBills: Bill[] = [
  { id: "rent", name: "Rent", amount: 1500, date: "June 24", category: "Housing", paid: false },
  { id: "phone", name: "Phone", amount: 85, date: "June 25", category: "Utilities", paid: false },
  { id: "internet", name: "Internet", amount: 70, date: "June 26", category: "Utilities", paid: false },
  { id: "insurance", name: "Car insurance", amount: 145, date: "June 27", category: "Insurance", paid: false },
];

export const demoCategories: BudgetCategory[] = [
  { id: "housing", name: "Housing", budgeted: 1500, spent: 1500 },
  { id: "food", name: "Food", budgeted: 450, spent: 310 },
  { id: "transport", name: "Transportation", budgeted: 300, spent: 180 },
  { id: "fun", name: "Fun", budgeted: 250, spent: 120 },
  { id: "savings", name: "Savings", budgeted: 600, spent: 600 },
];

export const demoGoals: Goal[] = [
  { id: "house", name: "Buy a house", target: 100000, saved: 30000, deadline: "2028", mode: "Normal" },
  { id: "car", name: "Buy a car", target: 25000, saved: 6000, deadline: "2026", mode: "Comfortable" },
  { id: "emergency", name: "Emergency fund", target: 10000, saved: 4200, deadline: "2025", mode: "Extreme" },
];

export const demoSplits: SplitExpense[] = [
  { id: "dinner", title: "Dinner with friends", total: 180, people: ["You", "Sam", "Alex"], paidBy: "You" },
  { id: "trip", title: "Weekend trip", total: 720, people: ["You", "Maya", "Omar", "Lea"], paidBy: "Maya" },
];

export function calculateSafeToSpend() {
  const upcomingBills = demoBills.filter((bill) => !bill.paid).reduce((sum, bill) => sum + bill.amount, 0);
  const foodBuffer = 200;
  const emergencyBuffer = 125;
  return demoIncome.currentBalance - upcomingBills - foodBuffer - emergencyBuffer;
}

export function calculateGoalMonthlyContribution(goal: Goal) {
  const remaining = Math.max(goal.target - goal.saved, 0);
  const modeDivider = goal.mode === "Extreme" ? 12 : goal.mode === "Normal" ? 24 : 36;
  return Math.ceil(remaining / modeDivider);
}
