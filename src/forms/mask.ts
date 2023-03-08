export default () => {
  return document.querySelectorAll<HTMLInputElement>('[data-mask="phone"]')
  .forEach( (el) => {
    el.oninput = () => {
      el.value = el.value.replace(/\D/g, '')
      .replace(/^(\d)/, '($1').replace(/^(\(\d{2})(\d)/, '$1) $2')
      .replace(/(\d{5})(\d{1,5})/, '$1-$2')
      .replace(/(\d{5}){\d{1,5}}/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1')
    }
  })
}  
