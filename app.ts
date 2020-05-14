export function newDate(): any {
  return new Intl.DateTimeFormat("pt-BR").format(new Date())
}
