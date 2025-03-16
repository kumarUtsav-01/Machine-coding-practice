export const createPhoneNumber = (number) => {
  const phoneNumber = number.replace(/[^0-9]/g, "").slice(0, 10);

  if (phoneNumber.length <= 3) {
    return phoneNumber;
  } else {
    const countryCode = phoneNumber.slice(0, 3);
    const landline = phoneNumber.slice(3);

    return `+(${countryCode}) - ${landline}`;
  }
};
