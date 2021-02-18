type InvestmentCategory = {
    id: string,
    name: string,
}

type InvestmentClass = {
    id: string,
    name: string,
    initialInvestment: number,
    categories: Array<InvestmentCategory>
}

