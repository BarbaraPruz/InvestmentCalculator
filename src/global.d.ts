type InvestmentCategory = {
    id: string,
    name: string,
    weightage: number,
    amount: number
}

type InvestmentClass = {
    id: string,
    name: string,
    initialInvestment: number,
    totalInvestment: number,
    categories: Array<InvestmentCategory>
}

