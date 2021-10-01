class NumberFormat {
    // in 1000 out $1,000
    currencyFormat(num: number) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    // in 1000 out 1,000
    formatNumber(num: string) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
      }
    // in $1,000 out 1000
    removeNoNumericFormat(num: string){
        return num.replace(/[^\d.-]/g, '');
    }
}

export { NumberFormat };
