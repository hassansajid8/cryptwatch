export function formatCurrency(str: string){
    let num = new Number(str);

    return num.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
}