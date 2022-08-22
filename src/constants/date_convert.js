let months = {
  '01':'Janeiro',
  '02':'Fevereiro',
  '03':'Março',
  '04':'Abril',
  '05':'Maio',
  '06':'Junho',
  '07':'Julho',
  '08':'Agosto',
  '09':'Setembro',
  '10':'Outubro',
  '11':'Novembro',
  '12':'Dezembro'
}

export function monthYearPTBR(date){
  if(date) {
    let month = date[5]+date[6]
    let readableMonth =  months[month]
    let year = date[0]+date[1]+date[2]+date[3]
    return readableMonth + ', ' + year
  } else { return 'Data de lançamento não cadastrada'}
}

export function dayMonthYearPTBR(date){
    if(date) {
    let day = date[8]+date[9]
    let month = date[5]+date[6]
    let year = date[0]+date[1]+date[2]+date[3]
    return day + '/' + month + '/' + year
  } else { return 'Data de lançamento não cadastrada'}
}