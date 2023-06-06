const poppins = {
  fontFamily: "'Poppins', sans-serif",
  fontWeights: {
    300: '300',
    400: '400',
    500: '500',
    600: '600',
    700: '700',
  },
};

const publicSans = {
  fontFamily: "'Public Sans', sans-serif",
  fontWeights: {
    300: '300',
    400: '400',
    500: '500',
  },
};

const fonts = { publicSans, poppins };

const getFontProps = (font, fontWeight) => {
  const { fontFamily, fontWeights } = fonts[font] ?? fonts.poppins;

  const weight = fontWeight ? fontWeights[fontWeight] : null;

  if (!weight && fontWeight) {
    throw `fontWeight "${fontWeight} not found on font ${font}"`;
  }

  return {
    fontFamily,
    ...(!!weight && { fontWeight: weight }),
  };
};

export { poppins, publicSans, getFontProps };
