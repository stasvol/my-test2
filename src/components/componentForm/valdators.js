export const required = value =>
  !value && !value.length ? 'Field is required' : undefined;

export const maxLength = max => value =>
  value && value.length > max ? `Length is > ${max} symbol ` : undefined;

export const minLength = min => value =>
  value && value.length < min ? `Length is < ${min} symbol ` : undefined;
// add
