function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    }
    );
}

export function newInvestmentClass(): InvestmentClass {
    return {
        id: uuidv4(),
        name:'New Investment Class',
        initialInvestment: 0,
        totalInvestment: 0,
        categories: [newInvestmentCategory()]
    }
}

export function newInvestmentCategory(): InvestmentCategory {
    return {
        id: uuidv4(),
        name:'New Investment Category',
        weightage: 0,
        amount: 0
    }
}
