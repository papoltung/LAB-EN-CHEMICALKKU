export function nextChemicalCode(codes, now = new Date()) {
  const buddhistYear = now.getFullYear() + 543;
  const year = String(buddhistYear).slice(-2);
  const prefix = `EN14-${year}-`;
  const pattern = new RegExp(`^EN14-${year}-(\\d{4})$`);
  const numbers = codes
    .map((code) => String(code || '').trim().match(pattern))
    .filter(Boolean)
    .map((match) => Number(match[1]));
  const next = numbers.length > 0 ? Math.max(...numbers) + 1 : 1;
  if (next > 9999) throw new Error(`เลขรหัสสารเคมีปี ${year} ถูกใช้ครบแล้ว`);
  return prefix + String(next).padStart(4, '0');
}
