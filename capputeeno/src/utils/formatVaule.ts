export function formatValue(valueCents: number){
    const valorEmReal = valueCents/100;
    return valorEmReal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}